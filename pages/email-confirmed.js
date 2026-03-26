import Link from 'next/link';
import { Inter } from 'next/font/google';
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] });

export default function EmailConfirmedPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
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
      <div className="w-full max-w-xl text-center md:p-4 md:pb-10 rounded-2xl bg-[#FFFFFF33] shadow-md shadow-black/20 backdrop-blur-sm">
        {/* Logo / Brand mark */}
         <div className='flex justify-center items-center flex-col'>
         <Image
        src='/assets/logo.png'
        alt='Codemantix Collective Logo'
        width={125}
        height={125}
        />
          <h1 className="text-3xl md:text-4xl font-bold text-[30px] text-black mb-4">
            Email Confirmed
          </h1>
       </div>
        {/* Success card */}
        <div className="">

          {/* Big thumbs-up / like icon */}
         <div className='flex justify-center'>
             <Image
          src='/assets/thurmb-up.png'
          alt='Thumbs Up icon'
          width={236}
          height={236}
          />
         </div>

          {/* Congratulations message */}
          <div className="space-y-4 mb-4 w-[720px] max-w-sm mx-auto">
            <p className={`text-[#000000] font-${inter.className} font-normal text-[18px] leading-[28px]`}>
              Congratulations! <br/>
              Your email has been confirmed.
              You can now login to the application.
            </p>
          </div>

          {/* Back to login link */}
          <Link
  href="/login"
  className={`inline-flex items-center font-${inter.className} gap-2 px-8 py-4 font-normal text-[16px] leading-[24px] text-[#0088FF]`}
>
    <ArrowLeft className='' />
  Back to Login
</Link>
        </div>
      </div>
    </div>
  );
}