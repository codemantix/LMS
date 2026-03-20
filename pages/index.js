// pages/signup.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

// ...existing code...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === 'confirmPassword') {
        setPasswordError(newData.password !== newData.confirmPassword);
      } else if (name === 'password') {
        if (newData.password === newData.confirmPassword) {
          setPasswordError(false);
        }
      }
      return newData;
    });
  };
// ...existing code...

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }
    console.log('Form submitted:', formData);
    // → here you would normally send data to backend / auth service
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter your correct details
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 rounded-md shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:scale-[1.02] transition duration-300"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 rounded-md shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:scale-[1.02] transition duration-300"
                placeholder="Enter Email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 rounded-md shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:scale-[1.02] transition duration-300"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 rounded-md shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10 hover:scale-[1.02] transition duration-300"
                placeholder="Enter Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${
                  passwordError ? 'border-red-500' : 'border-white'
                } rounded-md shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10 hover:scale-[1.02] transition duration-300`}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {passwordError && (
              <p className="text-red-600 text-[0.8rem] mt-0">
                Passwords don't match. <span className='text-[#35a2ff]'>Try again.</span>
              </p>
            )}

            {/* Terms checkbox */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition duration-300"
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
                    <div className="mt-6 space-y-3">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transform hover:scale-[1.02] transition duration-300"
                      >
                        <FcGoogle size={20} />
                        <span className="ml-2 text-blue-800">Sign up with Google</span>
                      </button>
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transform hover:scale-[1.02] transition duration-300"
                      >
                        <FaApple size={20} className='text-black' />
                        <span className="ml-2 text-blue-800">Sign up with Apple</span>
                      </button>
                    </div>
          
                    {/* Sign In Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                      Already have an account?{' '}
                     <Link
                        href="/signin"
                        className="text-[#35a2ff] hover:text-[#1e90ff] font-medium"
                        >
                          Sign In
                        </Link>
                    </p>
                  </div>
                </div>
              </div>
            );
          }