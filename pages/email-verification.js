import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function VerificationSuccess() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className=" p-10 md:p-14 max-w-2xl w-full text-center">
       <div className='flex justity-center items-center'>
         <img
        src="/assets/logo.png"
        alt=""
        width={1484}
        height={1484}
        className="pointer-events-none select-none absolute inset-0 m-auto w-1/2 min-h-screen max-w-screen opacity-[6%]"
      />
       </div>
        {/* Checkmark circle */}
       <div className='flex items-center justify-center mb-6'>
         <Image
        src="/assets/Container.png"
        alt='Verification image'
        width={128}
        height={128}
         />
       </div>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-black">
          Account Verified!
        </h1>

        <p className="text-[#475569] ${inter.className} mb-12 font-normal text-lg leading-relaxed">
             Welcome to Codemantix Collective! Your account is now fully set up and ready for your academic journey.<br/>
          Let's get started.
        </p>
        <div className='flex justify-center mb-8'>
            
            <Image
            src="/assets/verification.png"
            alt="Verification Illustration"
            width={500}
            height={333.33}
          />
        </div>

        {/* Main CTA */}
        <Link
          href="/dashboard"
          className="block w-full py-[16px] px-[20PX] bg-[#1E3A8A] rounded-full border-[1px] border-[#C6C6C8] text-md text-white mb-4"
        >
          Go to Dashboard →
        </Link>

        {/* Secondary link */}
        <Link
          href="/profile/complete"
          className="inline-flex items-center rounded-full border-[1px] py-[16px] px-[20px] border-[#1E3A8A] w-full justify-center text-[#1E3A8A] text-md mb-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Complete Profile</span>
        </Link>
          <p className=" text-center text-sm text-gray-600">
                      Need help?{' '}
                     <Link
                        href="/contact-support"
                        className="text-[#1E3A8A] hover:text-blue-700 font-medium"
                        >
                          Contact our support team
                        </Link>
                    </p>
      </div>
    </div>
  );
}