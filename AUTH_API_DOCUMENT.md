# LMS Authentication API Specification

> Detailed API contract for the Codemantix LMS authentication & onboarding system.
> Based on the current frontend codebase analysis.

---

## Table of Contents

1. [Overview & Auth Flow](#1-overview--auth-flow)
2. [Base Configuration](#2-base-configuration)
3. [Endpoints](#3-endpoints)
   - [3.1 Sign Up](#31-sign-up)
   - [3.2 Login](#32-login)
   - [3.3 Social Auth (Google)](#33-social-auth-google)
   - [3.4 Social Auth (Apple)](#34-social-auth-apple)
   - [3.5 Send Email Verification Code](#35-send-email-verification-code)
   - [3.6 Verify Email (OTP)](#36-verify-email-otp)
   - [3.7 Resend Verification Code](#37-resend-verification-code)
   - [3.8 Forgot Password (Send OTP)](#38-forgot-password-send-otp)
   - [3.9 Reset Password](#39-reset-password)
   - [3.10 Logout](#310-logout)
   - [3.11 Refresh Token](#311-refresh-token)
   - [3.12 Get Current User](#312-get-current-user)
4. [Onboarding Endpoints](#4-onboarding-endpoints)
   - [4.1 Save Interests & Learning Goal (Step 2)](#41-save-interests--learning-goal-step-2)
   - [4.2 Save Course Selection (Step 3)](#42-save-course-selection-step-3)
   - [4.3 Complete Onboarding](#43-complete-onboarding)
5. [Authentication & Token Strategy](#5-authentication--token-strategy)
6. [Error Response Format](#6-error-response-format)
7. [Page-to-API Mapping](#7-page-to-api-mapping)
8. [User Flow Sequences](#8-user-flow-sequences)

---

## 1. Overview & Auth Flow

```
┌──────────┐    ┌───────────────────┐    ┌──────────────────┐    ┌──────────────┐
│  Sign Up │───▶│ Email Confirmation│───▶│ Email Verified   │───▶│ Onboarding   │
│  POST    │    │ (OTP sent)        │    │ (OTP validated)  │    │ Step 2 → 3   │
└──────────┘    └───────────────────┘    └──────────────────┘    └──────┬───────┘
                                                                       │
┌──────────┐    ┌───────────────────┐    ┌──────────────────┐          ▼
│  Login   │───▶│  Dashboard        │    │ Onboarding       │    ┌──────────────┐
│  POST    │    │  (authenticated)  │◀───│ Complete         │◀───│  Dashboard   │
└──────────┘    └───────────────────┘    └──────────────────┘    └──────────────┘
      │
      ▼
┌──────────────────┐    ┌───────────────────┐    ┌──────────────────┐
│ Forgot Password  │───▶│ Verify Reset OTP  │───▶│ Set New Password │
│ (send OTP)       │    │                   │    │                  │
└──────────────────┘    └───────────────────┘    └──────────────────┘
```

---

## 2. Base Configuration

| Property        | Value                                   |
| --------------- | --------------------------------------- |
| Base URL        | `{BACKEND_URL}/api/v1`                  |
| Content-Type    | `application/json`                      |
| Auth Header     | `Authorization: Bearer <access_token>`  |
| Token Storage   | HTTP-only cookie (recommended)          |

---

## 3. Endpoints

### 3.1 Sign Up

Creates a new user account and triggers an email verification code.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/signup` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "fullName": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "password": "string (required, min 8 chars, 1 special char)",
  "confirmPassword": "string (required, must match password)"
}
```

**Success Response — `201 Created`:**

```json
{
  "success": true,
  "message": "Account created. Verification email sent.",
  "data": {
    "user": {
      "id": "string (UUID)",
      "fullName": "string",
      "email": "string",
      "phone": "string",
      "isEmailVerified": false,
      "onboardingCompleted": false,
      "createdAt": "ISO 8601 datetime"
    },
    "accessToken": "string (JWT)",
    "refreshToken": "string (JWT)"
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `400` | Validation error (missing fields, weak password) | `{ "success": false, "message": "Password must be at least 8 characters with 1 special character", "errors": [...] }` |
| `409` | Email already registered | `{ "success": false, "message": "An account with this email already exists" }` |

**Frontend Integration:**
- Page: `/signup`
- Form state: `form.fullName`, `form.email`, `form.phone`, `form.password`, `form.confirmPassword`
- On success: redirect to `/email-confirmation`
- On 409: show inline error on email field

---

### 3.2 Login

Authenticates an existing user with email and password.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/login` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "email": "string (required)",
  "password": "string (required)",
  "rememberMe": "boolean (optional, default: false)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "string",
      "fullName": "string",
      "email": "string",
      "isEmailVerified": true,
      "onboardingCompleted": true,
      "role": "student"
    },
    "accessToken": "string (JWT)",
    "refreshToken": "string (JWT)"
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `401` | Wrong password | `{ "success": false, "message": "Incorrect password" }` |
| `404` | Email not found | `{ "success": false, "message": "No account found with this email" }` |
| `403` | Email not verified | `{ "success": false, "message": "Please verify your email first", "data": { "email": "..." } }` |

**Frontend Integration:**
- Page: `/login`
- Form state: `formData.email`, `formData.password`
- On `401`: redirect to `/incorrect-password`
- On `403`: redirect to `/email-confirmation`
- On success + `onboardingCompleted === false`: redirect to `/onboarding/step2`
- On success + `onboardingCompleted === true`: redirect to `/dashboard`

---

### 3.3 Social Auth (Google)

Authenticate or register via Google OAuth 2.0.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/google` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "idToken": "string (Google OAuth ID Token)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Google authentication successful",
  "data": {
    "user": { "id": "...", "fullName": "...", "email": "...", "isEmailVerified": true, "onboardingCompleted": false },
    "accessToken": "string",
    "refreshToken": "string",
    "isNewUser": true
  }
}
```

**Frontend Integration:**
- Used on: `/signup` and `/login` (Google button)
- If `isNewUser === true`: redirect to `/onboarding/step2`
- If `isNewUser === false`: redirect to `/dashboard`

---

### 3.4 Social Auth (Apple)

Authenticate or register via Apple Sign-In.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/apple` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "identityToken": "string (Apple identity token)",
  "authorizationCode": "string",
  "fullName": "string (optional, only provided on first sign-in)"
}
```

**Success Response — `200 OK`:**

Same structure as Google auth response.

---

### 3.5 Send Email Verification Code

Sends a 6-digit OTP to the user's email for verification.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/send-verification-code` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:**

```json
{
  "email": "string (required)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Verification code sent to your email",
  "data": {
    "email": "joh***@gmail.com",
    "expiresIn": 300
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `429` | Too many requests | `{ "success": false, "message": "Please wait before requesting a new code", "data": { "retryAfter": 60 } }` |
| `400` | Email already verified | `{ "success": false, "message": "Email is already verified" }` |

**Frontend Integration:**
- Triggered automatically after signup
- Page: `/email-confirmation` displays masked email and 6 OTP input boxes

---

### 3.6 Verify Email (OTP)

Validates the 6-digit OTP code entered by the user.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/verify-email` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:**

```json
{
  "email": "string (required)",
  "code": "string (required, 6 digits)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Email verified successfully",
  "data": {
    "user": {
      "id": "string",
      "email": "string",
      "isEmailVerified": true
    }
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `400` | Invalid or expired code | `{ "success": false, "message": "Invalid or expired verification code" }` |
| `429` | Too many attempts | `{ "success": false, "message": "Too many failed attempts. Request a new code." }` |

**Frontend Integration:**
- Page: `/email-confirmation` — "Verify Email" button
- The 6 individual inputs (`code[0]` to `code[5]`) should be concatenated into a single string: `"123456"`
- On success: redirect to `/email-confirmed` → then to `/onboarding/step2`

---

### 3.7 Resend Verification Code

Re-sends the OTP to the user's email.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/resend-verification-code` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:**

```json
{
  "email": "string (required)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "A new verification code has been sent",
  "data": {
    "expiresIn": 300
  }
}
```

**Frontend Integration:**
- Page: `/email-confirmation` — "Send a new code" button
- Rate-limited: disable button for 60 seconds after click

---

### 3.8 Forgot Password (Send OTP)

Initiates password reset by sending an OTP to the user's email.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/forgot-password` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "email": "string (required)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Password reset code sent to your email",
  "data": {
    "email": "joh***@gmail.com",
    "expiresIn": 300
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `404` | Email not found | `{ "success": false, "message": "No account found with this email" }` |
| `429` | Rate limited | `{ "success": false, "message": "Please wait before requesting another reset" }` |

**Frontend Integration:**
- Page: `/reset-password` — "Send OTP" button
- On success: redirect to OTP entry screen (can reuse `/email-confirmation` with a `type=password-reset` query param)

---

### 3.9 Reset Password

Sets a new password using the OTP verification.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/reset-password` |
| **Auth Required** | No |

**Request Body:**

```json
{
  "email": "string (required)",
  "code": "string (required, 6-digit OTP)",
  "newPassword": "string (required, min 8 chars, 1 special char)",
  "confirmNewPassword": "string (required, must match newPassword)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `400` | Invalid/expired OTP | `{ "success": false, "message": "Invalid or expired reset code" }` |
| `400` | Weak password | `{ "success": false, "message": "Password must be at least 8 characters with 1 special character" }` |
| `400` | Passwords don't match | `{ "success": false, "message": "Passwords do not match" }` |

**Frontend Integration:**
- Page: `/incorrect-password` — "Update Password" button
- Password requirements displayed: 8+ chars, 1 special character
- On success: redirect to `/login` with success message

---

### 3.10 Logout

Invalidates the user's current session/tokens.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/logout` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:** None

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Frontend Integration:**
- Clear stored tokens (cookies/localStorage)
- Redirect to `/login`

---

### 3.11 Refresh Token

Generates a new access token using a valid refresh token.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/auth/refresh-token` |
| **Auth Required** | No (uses refresh token) |

**Request Body:**

```json
{
  "refreshToken": "string (required)"
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "data": {
    "accessToken": "string (new JWT)",
    "refreshToken": "string (new refresh token, rotated)"
  }
}
```

**Error Responses:**

| Status | Condition | Body |
| ------ | --------- | ---- |
| `401` | Invalid/expired refresh token | `{ "success": false, "message": "Session expired. Please log in again." }` |

**Frontend Integration:**
- Called automatically by an HTTP interceptor when a `401` is received on any authenticated request
- On failure: redirect to `/login`

---

### 3.12 Get Current User

Returns the profile of the currently authenticated user.

| Property | Value |
| -------- | ----- |
| **URL** | `GET /api/v1/auth/me` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:** None

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "fullName": "string",
      "email": "string",
      "phone": "string",
      "isEmailVerified": true,
      "onboardingCompleted": true,
      "interests": ["Frontend", "UX Design"],
      "learningGoal": "5h/week",
      "role": "student",
      "createdAt": "ISO 8601"
    }
  }
}
```

**Frontend Integration:**
- Called on app load (`_app.js`) to hydrate auth context
- Determines whether to show landing vs authenticated UI in Navbar

---

## 4. Onboarding Endpoints

### 4.1 Save Interests & Learning Goal (Step 2)

| Property | Value |
| -------- | ----- |
| **URL** | `PUT /api/v1/onboarding/preferences` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:**

```json
{
  "interests": ["Frontend", "UX Design", "AI/ML"],
  "learningGoal": "5h/week"
}
```

**Allowed values for `interests`:**
- `"Frontend"`, `"Data Science"`, `"UX Design"`, `"Mobile Dev"`, `"AI/ML"`, `"Cybersecurity"`, `"Product Management"`, `"Cloud Computing"`

**Allowed values for `learningGoal`:**
- `"2h/week"` (Casual)
- `"5h/week"` (Regular)
- `"10h/week"` (Serious)
- `"20h+/week"` (Intense)

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Preferences saved",
  "data": {
    "interests": ["Frontend", "UX Design", "AI/ML"],
    "learningGoal": "5h/week"
  }
}
```

**Frontend Integration:**
- Page: `/onboarding/step2`
- State: `selectedInterests[]`, `selectedGoal`
- On success: redirect to `/onboarding/step3`

---

### 4.2 Save Course Selection (Step 3)

| Property | Value |
| -------- | ----- |
| **URL** | `PUT /api/v1/onboarding/course-selection` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:**

```json
{
  "selectedCourseIds": ["course_uuid_1"]
}
```

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Course enrolled",
  "data": {
    "enrolledCourses": [
      {
        "id": "course_uuid_1",
        "title": "Software Engineering",
        "instructor": "Emma Wilson"
      }
    ]
  }
}
```

**Frontend Integration:**
- Page: `/onboarding/step3`
- Currently courses are hardcoded — should come from `GET /api/v1/courses?category={category}`
- On success: redirect to `/onboarding/complete`

---

### 4.3 Complete Onboarding

Finalizes the onboarding process and marks the user's profile as complete.

| Property | Value |
| -------- | ----- |
| **URL** | `POST /api/v1/onboarding/complete` |
| **Auth Required** | Yes (Bearer token) |

**Request Body:** None

**Success Response — `200 OK`:**

```json
{
  "success": true,
  "message": "Onboarding completed",
  "data": {
    "onboardingCompleted": true,
    "redirectUrl": "/dashboard"
  }
}
```

**Frontend Integration:**
- Page: `/onboarding/complete`
- "Go to Dashboard" button should navigate to `redirectUrl` from response
- Currently the button incorrectly links to `/signup` — needs fix

---

## 5. Authentication & Token Strategy

### Recommended Approach

| Property | Recommendation |
| -------- | -------------- |
| **Access Token** | JWT, 15-minute expiry, stored in memory (React state/context) |
| **Refresh Token** | JWT, 7-day expiry (30 days if "Remember Me"), stored in HTTP-only secure cookie |
| **Token Rotation** | Refresh tokens should be rotated on each use |
| **CSRF Protection** | Use `SameSite=Strict` on cookies + CSRF token header |

### Auth Context (to implement in `_app.js`)

```
AuthContext should provide:
  - user (current user object or null)
  - isAuthenticated (boolean)
  - isLoading (boolean)
  - login(email, password)
  - signup(formData)
  - logout()
  - refreshUser()
```

### Protected Route Middleware

```
Route Groups:
  PUBLIC:    /, /login, /signup, /reset-password, /incorrect-password
  AUTH-ONLY: /email-confirmation, /email-confirmed, /email-verification
  PRIVATE:   /onboarding/*, /dashboard, /profile/*
```

---

## 6. Error Response Format

All error responses follow a consistent format:

```json
{
  "success": false,
  "message": "Human-readable error description",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Standard HTTP Status Codes

| Code | Usage |
| ---- | ----- |
| `200` | Success |
| `201` | Resource created (signup) |
| `400` | Validation error / bad request |
| `401` | Unauthorized (missing/invalid token) |
| `403` | Forbidden (email not verified, insufficient role) |
| `404` | Resource not found |
| `409` | Conflict (duplicate email) |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

---

## 7. Page-to-API Mapping

| Frontend Page | API Endpoint(s) Needed | Method |
| ------------- | ---------------------- | ------ |
| `/signup` | `/auth/signup` | POST |
| `/signup` | `/auth/google` | POST |
| `/signup` | `/auth/apple` | POST |
| `/login` | `/auth/login` | POST |
| `/login` | `/auth/google` | POST |
| `/login` | `/auth/apple` | POST |
| `/email-confirmation` | `/auth/verify-email` | POST |
| `/email-confirmation` | `/auth/resend-verification-code` | POST |
| `/email-confirmed` | *(no API — static success page)* | — |
| `/email-verification` | *(no API — static success page)* | — |
| `/reset-password` | `/auth/forgot-password` | POST |
| `/incorrect-password` | `/auth/reset-password` | POST |
| `/onboarding/step2` | `/onboarding/preferences` | PUT |
| `/onboarding/step3` | `/onboarding/course-selection` | PUT |
| `/onboarding/step3` | `/courses?category=...` | GET |
| `/onboarding/complete` | `/onboarding/complete` | POST |
| `_app.js` (global) | `/auth/me` | GET |
| `_app.js` (global) | `/auth/refresh-token` | POST |
| Navbar (onboarding) | `/auth/logout` | POST |

---

## 8. User Flow Sequences

### 8.1 New User Registration (Happy Path)

```
1. User fills signup form
2. POST /auth/signup
3. Server creates user, sends OTP email
4. Redirect → /email-confirmation
5. User enters 6-digit OTP
6. POST /auth/verify-email
7. Redirect → /email-confirmed → /onboarding/step2
8. User selects interests & goal
9. PUT /onboarding/preferences
10. Redirect → /onboarding/step3
11. User picks a course
12. PUT /onboarding/course-selection
13. Redirect → /onboarding/complete
14. POST /onboarding/complete
15. Redirect → /dashboard
```

### 8.2 Returning User Login

```
1. User enters email & password
2. POST /auth/login
3a. If onboardingCompleted=false → /onboarding/step2
3b. If onboardingCompleted=true  → /dashboard
```

### 8.3 Password Reset

```
1. User clicks "Forgot password?" on login page
2. Redirect → /reset-password
3. User enters email
4. POST /auth/forgot-password → OTP sent
5. Redirect → /email-confirmation?type=password-reset
6. User enters OTP
7. POST /auth/verify-email (or separate /auth/verify-reset-code)
8. Redirect → /incorrect-password
9. User enters new password
10. POST /auth/reset-password
11. Redirect → /login
```

### 8.4 Token Refresh (Automatic)

```
1. Authenticated request returns 401
2. HTTP interceptor catches 401
3. POST /auth/refresh-token with stored refresh token
4a. Success → retry original request with new access token
4b. Failure → clear tokens, redirect to /login
```

---

## Notes & Issues Found in Current Codebase

| Issue | Location | Fix Required |
| ----- | -------- | ------------ |
| "Go to Dashboard" links to `/signup` | `/onboarding/complete` | Change to `/dashboard` |
| "Continue to Step 3" label on last step | `/onboarding/step3`, `/onboarding/complete` | Fix button labels |
| Hardcoded email `johndoe@gmail.com` | `/email-confirmation` | Make dynamic from auth context |
| No API calls implemented anywhere | All pages | Integrate with endpoints above |
| No auth state/context | `_app.js` | Add AuthProvider wrapping the app |
| No protected route guards | All private pages | Add middleware or HOC |
| Missing `/dashboard` page | Referenced in multiple pages | Create page |
| Missing `/forgot-password` route | Referenced in login page | Create or redirect to `/reset-password` |
| Courses hardcoded in Step 3 | `/onboarding/step3` | Fetch from `GET /courses` API |
| No form validation beyond password match | `/signup` | Add email format, phone, etc. |
