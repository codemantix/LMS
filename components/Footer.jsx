import Image from "next/image";
import Link from "next/link";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 md:px-14 py-5 font-inter">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={`${ASSET_PATH}/codemantix logo png 3.png`}
            alt="Codemantix Collective"
            width={140}
            height={40}
          />
          {/* <span className="text-[12px] font-bold text-[#1E3A8A] leading-tight tracking-wide">
            CODEMANTIX<br />COLLECTIVE
          </span> */}
          <span className="text-[18px] text-[#1E3A8A] ml-4 font-normal leading-28">
            All Rights Reserved 2026
          </span>
        </div>
        <div className="flex items-center gap-8 text-[13px] text-[#1E3A8A] font-medium">
          <Link href="#" className="hover:text-[#1a1a6e] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#1a1a6e] transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-[#1a1a6e] transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
