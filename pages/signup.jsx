import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Signup.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    if (!agreed) {
      alert("Please agree to the Terms of Services and Privacy Policy");
      return;
    }
    router.push("/onboarding/step2");
  };

  return (
    <div className={styles.page}>
      {/* Background logo watermark */}
      <div className={styles.bgWatermark} style={{ width: 1480, height: 1480, top: '50%', left: -100, transform: 'translateY(-50%)', opacity: 0.06 }}>
        <Image
          src={`${ASSET_PATH}/codemantix logo png 3.png`}
          alt=""
          width={1480}
          height={1480}
          className={styles.bgWatermarkImage}
        />
      </div>

      <div className={styles.card}>
      <div className={styles.cardInner}>
        {/* Logo */}
        <div className={styles.logoCenter}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={`${ASSET_PATH}/codemantix logo png 3.png`}
              alt="Codemantix Collective"
              width={125}
              height={43}
            />
          </Link>
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          Create Your Account
        </h1>
        <p className={styles.subtitle}>
          Please enter your  correct details
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name *"
              value={form.fullName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email *"
              value={form.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number *"
              value={form.phone}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password *"
              value={form.password}
              onChange={handleChange}
              required
              className={styles.inputPassword}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeButton}
            >
              {showPassword ? (
                <svg className={styles.eyeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              ) : (
                <svg className={styles.eyeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <div className={styles.passwordWrapper}>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password *"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className={styles.inputPassword}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className={styles.eyeButton}
            >
              {showConfirm ? (
                <svg className={styles.eyeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              ) : (
                <svg className={styles.eyeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Password error message */}
          {passwordError && (
            <div className={styles.passwordError} style={{ width: 291, height: 24 }}>
              <Image
                src={`${ASSET_PATH}/Vector.png`}
                alt="error"
                width={16}
                height={16}
              />
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#FF383C' }}>
                Passwords don&apos;t match
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#0088FF', cursor: 'pointer' }}>
                Try again!
              </span>
            </div>
          )}

          {/* Terms */}
          <div className={styles.termsRow}>
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={agreed ? styles.termsCheckboxChecked : styles.termsCheckboxUnchecked}
            >
              {agreed && (
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className={styles.termsText}>
              By Signing Up, You agree to the{" "}
              <Link href="#" className={styles.termsLink}>
                Terms of Services
              </Link>{" "}
              and{" "}
              <Link href="#" className={styles.termsLink}>
                Privacy Policy
              </Link>
              .
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className={styles.socialSection}>
          <button className={styles.socialBtn}>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
          <button className={styles.socialBtn}>
            <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Login link */}
        <p className={styles.loginText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}
