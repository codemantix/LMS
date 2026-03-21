import Image from "next/image";
import Link from "next/link";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden font-inter">
      {/* ===== HERO SECTION ===== */}
      <main className="flex-1 relative">
        <section className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">

          {/* ===== Left Panel with Background Image ===== */}
          <div className="relative w-full lg:w-[55%] text-white px-8 md:px-14 lg:px-16 pt-6 pb-14 lg:pb-16 flex flex-col rounded-br-[80px] lg:rounded-br-[100px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={`${ASSET_PATH}/Rectangle 52.png`}
              alt=""
              fill
              className="object-cover -z-0"
              priority
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 " />

            {/* Content on top of background */}
            <div className="relative z-10 flex flex-col flex-1">
              {/* Logo inside panel - top left (White Logo) */}
              <div className="animate-fade-in flex items-center gap-2.5 mb-12 lg:mb-16">
                <Image
                  src={`${ASSET_PATH}/White Logo.png`}
                  alt="Codemantix Collective"
                  width={192}
                  height={60}
                  className="h-[50px] w-auto animate-gentle-bounce"
                />
              </div>

              {/* Heading - Montserrat 50px bold 150% line-height */}
              <h1 className="animate-fade-in-left font-montserrat text-[50px] font-bold leading-[150%] mb-6">
                Welcome To<br />Codemantix Collective
              </h1>

              {/* Subtitle */}
              <p className="animate-fade-in-left delay-200 text-[15px] md:text-base text-white/70 mb-10 max-w-[380px] leading-relaxed">
                The next generation Learning Management System designed to accelerate your growth. Your journey to mastery starts here.
              </p>

              {/* Feature Cards */}
              <div className="space-y-4 mb-10">
                {/* Card 1 - Personalized Learning */}
                <div className="animate-fade-in-up delay-300 bg-white rounded-2xl p-5 max-w-[400px] hover:shadow-lg transition-all duration-300 cursor-default animate-pulse-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg p-[12px]" style={{ width: 44, height: 50.25, borderRadius: 8 }}>
                      <Image
                        src={`${ASSET_PATH}/Icon.png`}
                        alt="Personalized Learning"
                        width={44}
                        height={50}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-[15px] text-[#1E3A8A] mb-1">Personalized Learning</h3>
                      <p className="text-[13px] text-[#1E3A8A] leading-relaxed">
                        Curated paths tailored to your unique goals, skill level, and individual learning pace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Expert-Led Courses */}
                <div className="animate-fade-in-up delay-500 bg-white rounded-2xl p-5 max-w-[400px] hover:shadow-lg transition-all duration-300 cursor-default animate-pulse-glow loop-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg p-[12px]" style={{ width: 44, height: 50.25, borderRadius: 8 }}>
                      <Image
                        src={`${ASSET_PATH}/Overlay.png`}
                        alt="Expert-Led Courses"
                        width={44}
                        height={50}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-[15px] text-[#1E3A8A] mb-1">Expert-Led Courses</h3>
                      <p className="text-[13px] text-[#1E3A8A] leading-relaxed">
                        Learn directly from industry giants and top-tier academic experts around the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-700 flex items-center gap-4">
                <Link
                  href="/onboarding/step2"
                  className="px-8 py-3 bg-white text-[#1a1a6e] rounded-full text-[13px] font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="px-8 py-3 border-2 border-white text-white rounded-full text-[13px] font-bold hover:bg-white hover:text-[#1a1a6e] transition-all duration-300"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>

          {/* ===== Right White Panel ===== */}
          <div className="w-full lg:w-[45%] flex flex-col pt-6 pb-10 lg:pb-0 px-8 lg:px-10">

            {/* Sign Up / Login buttons - top right */}
            <div className="animate-fade-in flex items-center justify-end gap-3 mb-8 lg:mb-0">
              <Link
                href="/onboarding/step2"
                className="px-6 py-2.5 bg-[#1E3A8A] text-white rounded-full text-[13px] font-semibold hover:bg-[#14145a] transition-all duration-300 hover:shadow-lg"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-6 py-2.5 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-full text-[13px] font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
              >
                Login
              </Link>
            </div>

            {/* Dashboard Image - centered */}
            <div className="flex-1 flex flex-col items-center justify-center ">
              <div className="animate-scale-in delay-400 relative w-[599px] h-[553px] animate-float">
                <Image
                  src={`${ASSET_PATH}/onboarding first image.png`}
                  alt="Learning Dashboard Preview"
                  width={593}
                  height={546}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />

                {/* Student Avatar + 10k badge - overlaid on image bottom-left */}
                <div className="animate-fade-in-up delay-600 absolute top-[398px] left-[75px] flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md w-[240px] h-[67px] max-w-[230px] border border-gray-100 opacity-100 animate-gentle-bounce loop-delay-600">
                  <div className="flex items-center -space-x-2">
                    <Image
                      src={`${ASSET_PATH}/Student avatar.png`}
                      alt="Student"
                      width={36}
                      height={36}
					  left={6}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src={`${ASSET_PATH}/Student avatar.png`}
                      alt="Student"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                    <div className="w-9 h-9 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">
                      +10k
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 leading-tight">
                    Join 10,000+<br />active learners
                  </span>
                </div>
              </div>

              {/* Step Indicator - Bottom Right */}
              <div className="animate-fade-in-up delay-800 mt-8 lg:mt-12 flex flex-col items-end w-full max-w-[480px]">
                <p className="font-montserrat text-[11px] font-extrabold text-[#1E3A8A] tracking-[0.15em] mb-1.5 uppercase">
                  Step 1 of 3
                </p>
                <p className="text-[11px] text-[#1E3A8A] mb-3">
                  Personalizing your learning journey...
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-2 rounded-full bg-[#1E3A8A] transition-all duration-500"></div>
                  <div className="w-12 h-2 rounded-full bg-gray-200"></div>
                  <div className="w-12 h-2 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-gray-200 px-8 md:px-14 py-5 font-inter">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={`${ASSET_PATH}/codemantix logo png 3.png`}
              alt="Codemantix Collective"
              width={140}
              height={44}
              className="h-9 w-auto"
            />
            <span className="text-[18px] text-[#1E3A8A] ml-4 font-normal">
              All Rights Reserved 2026
            </span>
          </div>
          <div className="flex items-center gap-8 text-[13px] text-[#1E3A8A] font-medium">
            <Link href="#" className="hover:text-[#1E3A8A] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#1E3A8A] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#1E3A8A] transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}