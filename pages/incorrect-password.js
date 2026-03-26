import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Public_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const public_sans = Public_Sans({ subsets: ['latin'] });

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-6">
           {/* Background logo / brand mark  */}
       <div className='flex justity-center items-center'>
         <img
        src="/assets/logo.png"
        alt=""
        width={1484}
        height={1484}
        className="pointer-events-none select-none absolute inset-0 m-auto w-1/2 min-h-screen max-w-screen opacity-[6%]"
      />
       </div>
      <div className="w-full max-w-xl">
        <div className="bg-[#FFFFFF33] rounded-3xl shadow-xl p-10 pt-0 border border-gray-100">
        {/* Logo */}
        <div className='flex justify-center'>
            <Image
                src='/assets/logo.png'
                alt='Codemantix Collective'
                width={125}
                height={125}
            />
        </div>

        {/* Main Card */}
          <h1 className="text-3xl font-bold text-center text-black leading-[36px]">
            Reset Password
          </h1>
          <p className={`text-center text-[#000000B2] ${inter.className} font-normal text-[18px] leading-[28px] mb-10`}>
            Please enter your new password below to regain<br />
            access to your Codemantix Collective account
          </p>

          {/* New Password */}
          <div className="mb-6">
            <label className={`${inter.className} text-[#656568] text-[16px] font-semibold leading-[28px] `}>New Password</label>
            <div className="flex items-center gap-[20px]">
               <Image
                  src='/assets/uil_padlock.png'
                  alt='padlock'
                  width={32}
                  height={32}
               />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-[56px] px-[20px] py-[16px] bg-white border-[0.23px] border-[Grays/Gray 3] rounded-[12px] focus:outline-none focus:border-[Grays/Gray 3] text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="mb-[40px]">
            <label  className={`${inter.className} text-[#656568] text-[16px] font-semibold leading-[28px] `}>Confirm New Password</label>
            <div className="flex items-center gap-[20px]">
                <Image
                  src='/assets/Secure.png'
                  alt='Secure Icon'
                  width={32}
                  height={32}
                  />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-[56px] px-[20px] py-[16px] bg-white border-[0.23px] border-[Grays/Gray 3] rounded-[12px] focus:outline-none focus:border-[Grays/Gray 3] text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password Requirements */}
          <div className="mb-10 bg-[#F8FAFC] rounded-[8px] border-[1px] border-[#F1F5F9] p-[16px]">
            <p className={`text-[12px] ${public_sans.className} font-bold leading-[16px] tracking-[0.6px] text-[#656568] mb-[8px] `}>PASSWORD REQUIREMENTS</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
               <Image
                  src='/assets/good.png'
                  alt='Good icon'
                  width={11.67}
                  height={11.67}
               />
                <span className={`text-[#64748B] ${public_sans.className} font-Regular text-[12px] leading-[16px] `} >At least 8 characters long</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Image
                  src='/assets/Circle-icon.png'
                  alt='Neutral icon'
                  width={11.67}
                  height={11.67}
                />
                <span className={`text-[#64748B] ${public_sans.className} font-Regular text-[12px] leading-[16px] `}>Include one special character</span>
              </div>
            </div>
          </div>

          {/* Update Password Button */}
          <button className={`w-full h-[56px] ${inter.className} bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-medium border-[1px] border-[#1E3A8A] py-[16px] px-[20px] rounded-full text-[16px] leading-[24px] tracking-[0.2px] transition-all duration-200 shadow-lg shadow-blue-900/30`}>
            Update Password
          </button>

          {/* Back to Login */}
          <div className="flex justify-center mt-8">
            <Link 
              href="/login"
              className={`flex items-center gap-2 text-[#0088FF] ${inter.className} font-Regular text-[16px] leading-[24px] transition-colors`}
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}