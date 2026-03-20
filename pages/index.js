// pages/signup.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side check (add real validation + server-side later)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Form submitted:', formData);
    // TODO: Send to /api/signup or use your auth provider (Clerk, NextAuth, etc.)
    // Example: fetch('/api/signup', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Optional logo / title - add your project logo here if available */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter your correct details
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 shadow-lg rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 shadow-lg rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <div className="mt-1">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 shadow-lg rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 shadow-lg rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Password"
                />
                {/* Eye icon placeholder - you can add lucide-react or heroicons later */}
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 shadow-lg rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            {/* Terms checkbox / text */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 shadow-md rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                By signing up, you agree to the{' '}
                <a href="#" className="text-[#35a2ff] hover:text-[#1e90ff]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#35a2ff] hover:text-[#1e90ff]">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-blue-800 hover:bg-gray-50"
            >
              <span className="mr-2"><FcGoogle /></span> Continue with Google
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-blue-800 hover:bg-gray-50"
            >
              <span className="mr-2 text-black"><FaApple /></span> Continue with Apple
            </button>
          </div>

          {/* Login link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-[#35a2ff] hover:text-[#1e90ff]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}