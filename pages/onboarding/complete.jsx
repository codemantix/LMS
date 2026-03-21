import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Complete() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="onboarding" />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Success Icon Area */}
        <div className="relative mb-8 animate-fade-in hover:  animate-fade-in-up delay-500 animate-gentle-bounce loop-delay-800"
          
        >
          <div
            className="w-[404px] h-[404px] bg-gray-50 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
            style={{ boxShadow: '0px 25px 50px -12px #1E3A8A40' }}
          >
            {/* Background overlay */}
            <Image
              src={`${ASSET_PATH}/complete-background.png`}
              alt=""
              fill
              className="object-cover rounded-3xl pointer-events-none"
              style={{ mixBlendMode: 'overlay', boxShadow: '0px 25px 50px -12px #1E3A8A40'  }}
            />
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center relative z-10" style={{ boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}>
              <Image
                src={`${ASSET_PATH}/success icon.png`}
                alt="Success"
                width={80}
                height={80}
                className="mb-3"
              />
              <div className="flex gap-1.5">
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className="opacity-3"
                />
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className="opacity-3"
                />
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className="opacity-3"
                />
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-100/30 rounded-3xl blur-2xl -z-10 scale-110"></div>
        </div>

        {/* Heading */}
        <h1 className="text-[50px] w-[430px] h-[75px] font-bold text-[#0F172A] leading-[150%] mb-4 text-center animate-fade-in-up font-montserrat">
          You&apos;re All Set!
        </h1>
        <p className="text-[20px] leading-28 font-Public Sans font-normal text-[#475569] text-center mb-8 max-w-sm leading-relaxed animate-fade-in-up delay-200">
          Welcome to Codemantix Collective.<br />
          Your configuration is complete and your learning journey starts right now.
        </p>

        {/* Quick Tip Card */}
        <div className="w-full max-w-[576px] h-[128px] bg-[#1E3A8A0D] border border-gray-100 rounded-xl p-6 mt-7 mb-8 animate-fade-in-up delay-300 animate-pulse-glow">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center flex-shrink-0">
              <Image
                src={`${ASSET_PATH}/Background.png`}
                alt="background"
                width={50}
                height={50}
                className="rounded-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-bold text-[#0F172A] mb-1">Quick Tip</h3>
              <div className="flex items-center gap-2">
                <p className="text-[16px] text-[#475569] leading-28">
                You can find your first enrolled lesson under the{" "}
                <strong className="text-[#1E3A8A] font-bold text-[16px]">&apos;My Courses&apos;</strong> tab in your main dashboard.
              </p>
              <Link
                 href="#"
                  className="text-[14px] text-[#1E3A8A] font-bold whitespace-nowrap flex items-center gap-1"
               >
                 View guide →
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Go to Dashboard Button */}
        <Link
          href="/signup"
          className="w-full max-w-md py-3.5 bg-[#1E3A8A] text-white rounded-full text-sm font-bold hover:bg-[#14145a] transition text-center block mb-4 animate-fade-in-up delay-500 animate-gentle-bounce loop-delay-800"
        >
          Go to Dashboard →
        </Link>

        {/* Support Link */}
        <p className="text-[14px] text-[#64748B]  animate-fade-in-up delay-600 mt-10 leading-20 font-Public Sans mb-40">
          Need help getting started?{" "}
          <Link href="#" className="text-[14px] text-[#1E3A8A] ">
            Contact Support
          </Link>
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-between w-[413px] h-[56px] opacity-100 absolute top-[1203px] left-[925px]  mb-40">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 font-medium hover:text-gray-700 flex items-center gap-1"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-[#1E3A8A] text-white text-sm font-bold hover:bg-[#1E3A8A] transition flex items-center justify-center gap-[10px] w-[215px] h-[56px] rounded-[40px] py-4 px-5 border border-[#1a1a6e]"
          >
            Continue to Step 3 →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
