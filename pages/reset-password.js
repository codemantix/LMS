import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
         {/* Background logo / brand mark  */}
       <div className='flex justity-center items-center'>
         <img
        src="/assets/logo.png"
        alt=""
        width={500}
        className="pointer-events-none select-none absolute inset-0 m-auto w-1/2 min-h-screen max-w-screen opacity-[6%]"
      />
       </div>
      <div className="w-full max-w-md">
           <div className="bg-[#FFFFFF33] rounded-3xl shadow-xl overflow-hidden">
        {/* Logo */}
       <div className='flex justify-center pt-10'>
            <Image
                src='/assets/logo.png'
                alt='Codemantix Collective logo'
                width={125}
                height={125}
            />
       </div>

        {/* Main Card */}
          <div className="px-8 pb-12">
            <h1 className="text-[30px] leading-[36px] font-bold text-center text-gray-900 mb-2">
              Reset Your Password
            </h1>
            <p className={`${inter.className} text-[18px] font-normal leading-[28px] text-[#000000B2] text-center mb-8 `}>
              Enter your email, we will send you a<br />
              One-Time Password.
            </p>

            {/* Email Input */}
            <div className="relative mb-8 flex items-center gap-3">
             <Image
                src='/assets/ci_mail.png'
                 alt="Mail Icon"
                 width={34}
                height={34}
                           />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-[20px] py-[16px] bg-gray-50 border border-[#C7C7CC] rounded-[12px] focus:outline-none focus:border-[#C7C7CC] text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Send OTP Button */}
            <button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-medium py-4 rounded-full transition-all duration-200 text-lg shadow-lg shadow-blue-900/30">
              Send OTP
            </button>

            {/* Back to Login */}
            <div className="flex justify-center mt-8">
              <Link 
                href="/login"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <span className="text-xl">←</span>
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}