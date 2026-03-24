import Link from 'next/link';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Public_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const publicSans = Public_Sans({ subsets: ['latin'] });

export default function EmailConfirmationPage() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
       {/* Background logo / brand mark  */}
       <div className='flex justity-center items-center'>
         <img
        src="/assets/logo.png"
        alt=""
        className="pointer-events-none select-none absolute inset-0 m-auto w-1/2 min-h-screen max-w-screen opacity-[6%]"
      />
       </div>
      <div className="w-full max-w-xl shadow-lg px-10 pb-10 rounded-2xl backdrop-blur-sm ">
        {/* Logo + brand mark */}
        <div className="flex flex-col items-center">
          <Image
          src='/assets/logo.png'
          alt='Codemantix Collective Logo'
          width={125}
          height={125}
          />
        </div>

        {/* Main card */}
        <div className="">
          <div className="text-center mb-1">
            <h1 className="text-[30px] font-bold leading-[36px]">
              Email Verification
            </h1>
            <p className="text-[#000000B2] text-[18px] leading-[28px] ${inter.className}">
              We've sent an 6-digit verification code to:
            </p>
          </div>

          {/* Email display with edit icon */}
         <div className='flex items-start justify-between font-medium leading-[26px] gap-4 mb-10 '>
           <div className='flex items-center gap-2 justify-center'>
             <span className='${inter.class} font-medium bg-gray-100 text-[18px] leading-[28px]'>johndoe@gmail.com</span>
            <Image
            src='/assets/write.png'
            alt='email note'
            width={24}
            height={24}
            />
           </div>
           <p className="text-[#000000B2] font-medium text-[18px] leading-[28px] ${inter.className}">
            Please enter it below to confirm your account.
          </p>
         </div>

          {/* 6-digit code inputs */}
          <div className="grid grid-cols-6 gap-3 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="h-[79px] text-center text-2xl font-bold border-[1px] border-[#9F9B9B5C] rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                autoFocus={i === 0}
              />
            ))}
          </div>

          {/* Resend link */}
          <div className="flex flex-row justify-center items-start gap-2 ${inter.className}text-center mb-8">
            <p className="text-[#000000B2] text-[18px] font-medium leading-[28px] mb-2">
              Didn't get your code?
            </p>
            <button 
              type="button"
              className="inline-flex items-center gap-2 text-[#000000B2] hover:text-black leading-[28px] transition-colors text-[18px] font-[700]"
            >
              Send a new code
            </button>
          </div>

          {/* Verify button */}
          <button 
            type="button"
            className="w-full py-4 bg-[#1E3A8A] hover:bg-[#1E3A8A] rounded-xl font-semibold text-white text-lg shadow-lg shadow-cyan-900/30 transition-all hover:shadow-cyan-700/40 hover:scale-[1.02]"
          >
            Verify Email
          </button>

          {/* Back & support links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-sm">
            <Link 
              href="/login"
              className="flex items-center gap-2 text-[#0088FF] font-medium ${inter.className} leading-[24px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>

            <Link 
              href="/support"
              className="text-[#64748B] font-[500] text-[14px] leading-[20px] ${publicSans.className} transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}