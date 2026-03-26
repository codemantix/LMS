import Image from "next/image";
import Link from "next/link";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

function Logo({ width = 140, height = 40 }) {
  return (
    <Link href="/">
      <Image
        src={`${ASSET_PATH}/codemantix logo png 3.png`}
        alt="Codemantix Collective"
        width={width}
        height={height}
        className="h-10 w-auto"
      />
    </Link>
  );
}

export default function Navbar({ variant = "landing" }) {
  if (variant === "onboarding") {
    return (
      <nav className="flex items-center justify-between px-8 md:px-14 py-4 bg-white border-b border-gray-100 font-inter">
        <Logo />
        <div className="flex items-center gap-4">
          <button className="text-sm text-[#64748B] hover:text-gray-700 font-medium">
            Save & Exit
          </button>
          <Link
            href="/"
            className="px-5 py-2 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-[50px] text-sm font-semibold hover:bg-gray-50 transition font-inter"
          >
            Skip
          </Link>
        </div>
      </nav>
    );
  }

  // Landing variant
  return (
    <nav className="flex items-center justify-between px-8 md:px-14 py-4 bg-white font-inter">
      <Logo />
      <div className="flex items-center gap-3">
        <Link
          href="/onboarding/step2"
          className="px-6 py-2.5 bg-[#1a1a6e] text-white rounded-full text-sm font-semibold hover:bg-[#14145a] transition"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="px-6 py-2.5 border-2 border-[#1a1a6e] text-[#1a1a6e] rounded-full text-sm font-semibold hover:bg-gray-50 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
