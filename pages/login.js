import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Add your actual login API call here
    alert("Login successful! (Demo)");
  };

  return (
    <div className="flex flex-col justify-center bg-gray-50 items-center min-h-screen pb-6 sm:px-6 lg:px-8">
      {/* Background logo / brand mark  */}
       <div className='flex justity-center items-center'>
         <img
        src="/assets/logo.png"
        alt=""
        className="pointer-events-none select-none absolute inset-0 m-auto w-1/2 min-h-screen max-w-screen opacity-[6%]"
      />
       </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="py-8 px-4 shadow rounded-lg sm:px-10 backdrop-blur-sm">
          <div className="flex justify-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={125}
              height={125}
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-[30px] font-bold leading-[36px]">Welcome Back!</h1>
            <p className={`${inter.className} font-regular text-[18px] leading-[28px] text-[#000000B2]`}>
              Please Login to your account
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <Image
                src='/assets/ci_mail.png'
                alt="Mail Icon"
                width={34}
                height={34}
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="appearance-none block w-full h-[56px] px-3 py-2 rounded-[12px] border-[0.25px] shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-[#C7C7CC] sm:text-sm hover:scale-[1.02] transition duration-300"
              />
            </div>

            <div className="relative flex items-center gap-2">
              <Image
                src='/assets/uil_padlock.png'
                alt="Padlock Icon"
                width={34}
                height={34}
              />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="appearance-none block w-full h-[56px] px-3 py-2 rounded-[12px] border-[0.25px] shadow-[0_4px_0_rgba(0,0,0,0.2)] placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-[#C7C7CC] sm:text-sm pr-10 hover:scale-[1.02] transition duration-300"
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

            <div className="flex flex-row justify-between pb-4">
              <label htmlFor="remember-me" className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2 block text-sm text-gray-900">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-[56px] flex justify-center items-center py-2 px-4 text-center border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition duration-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              className="w-full h-[56px] flex items-center justify-center border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transform hover:scale-[1.02] transition duration-300"
            >
              <FcGoogle size={20} />
              <span className="ml-2 text-blue-800">Sign up with Google</span>
            </button>

            <button
              type="button"
              className="w-full h-[56px] flex items-center justify-center border border-blue-800 rounded-3xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transform hover:scale-[1.02] transition duration-300"
            >
              <FaApple size={20} className="text-black" />
              <span className="ml-2 text-blue-800">Sign up with Apple</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600 pb-8">
            New to Codemantixe Collective?{' '}
            <Link
              href="/signup"
              className="text-[#35a2ff] hover:text-[#1e90ff] font-medium px-2"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}