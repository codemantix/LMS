import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepIndicator from "@/components/StepIndicator";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

const categories = [
  { label: "All Interests", },
  { label: "Business", icon: `${ASSET_PATH}/Container.png` },
  { label: "Design", icon: `${ASSET_PATH}/Icon.design.png` },
  { label: "Coding", icon: `${ASSET_PATH}/Icon.coding.png` },
  { label: "Marketing", icon: `${ASSET_PATH}/Icon.marketting.png` },
];

const courses = [
  {
    title: "Software Engineering",
    author: "Emma Wilson",
    progress: 69,
    image: `${ASSET_PATH}/software engineering course image.png`,
    category: "Coding",
  },
  {
    title: "UI/UX Design Fundamentals",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/UX course image.png`,
    category: "Design",
  },
  {
    title: "Graphic Design",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/graphics design course image.png`,
    category: "Design",
  },
  {
    title: "Data Analytics",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/data anlysus course image.png`,
    category: "Business",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <Image
          key={star}
          src={`${ASSET_PATH}/star icon.png`}
          alt="star"
          width={18}
          height={18}
          className="opacity-3"
        />
      ))}
    </div>
  );
}

export default function Step3() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All Interests");

  const filteredCourses =
    activeCategory === "All Interests"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Navbar variant="onboarding" />

      <main className="flex-1 flex flex-col items-center px-6 py-8">
        {/* Step indicator header */}
        <div className="animate-fade-in">
          <p className="text-xs font-bold text-[#1E3A8A] tracking-wider mb-3 text-center">
            STEP 3 OF 3
          </p>
          <StepIndicator currentStep={2} totalSteps={3} />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 font-montserrat text-3xl md:text-4xl font-bold text-[#0F172A] mt-8 mb-2 text-center">
          Pick Your First Course
        </h1>
        <p className="animate-fade-in-up delay-200 text-sm text-[#475569] text-center mb-8 max-w-lg">
          Based on your professional interests, we&apos;ve curated these high-impact starter courses to help you begin your learning journey immediately.
        </p>

        {/* Category Tabs */}
        <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === cat.label
                  ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                  : "bg-white text-[#334155] border-gray-200 hover:border-gray-400 hover:shadow-sm"
              }`}
            >
              {cat.icon && (
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={18}
                  height={18}
                  className={activeCategory === cat.label ? "brightness-0 invert" : ""}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="w-[1052px] h-[1100px] grid grid-cols-1 md:grid-cols-2 gap-[5.3rem] p-12 mb-40 relative">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="animate-fade-in-up w-[510px] h-[536px] rounded-[20px] p-[12px] opacity-100 shadow-lg col-span-1 row-span-1 border-2 border-solid border-[#ffffff]/60 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 -mt-8"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative  bg-gray-50 overflow-hidden rounded-20px">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={486}
                  height={328}
                  className=""
                />
              </div>

              {/* Course Info */}
              <div className=" w-[486px] h-[168px] right-[16px] bottom-[16px] gap-[16px] left-[16px] absolute ">
                {/* Title row with stars */}
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-3 w-[462px] ">
                    <div className="flex flex-col items-start gap-3 w-[50px] ">
                      <Image
                        src={course.progress === 69 ? `${ASSET_PATH}/progress bar.bar.png` : `${ASSET_PATH}/progress bar.png`}
                        alt={`${course.progress}% progress`}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                      <p className="text-xs font-bold text-[#0F172A] left-[8px] top-[56px] ml-1.5">
                        {course.progress}%
                      </p>
                    </div>
                    <div className=" gap-12 w-[396px] h-[40px] -mt-8">
                      <div>
                       <h3 className="text-[20px] font-bold font-montserrat text-[#343131] leading-28">
                         {course.title}
                       </h3>
                       <div className="flex items-center gap-2 mt-1 w-[396px] h-[18px] justify-between">
                          <p className="text-xs text-[#64748B]">{course.author}</p>
                          <StarRating />
                       </div>
                       

                      </div>

                    
                    </div>
                  </div>
                </div>

                {/* Author */}

                {/* Continue Learning button */}
                <button className="w-[454px] h-[56px] border-1 mt-[8px] border-[#1E3A8A] rounded-full bg-[#1E3A8A] text-white text-[16px] tracking-[0.3px] font-inter hover:transition-all duration-300 hover:shadow-md">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between w-[413px] h-[56px] opacity-100 absolute top-[1602px] left-[925px]">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 font-medium hover:text-gray-700 flex items-center gap-1"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push("/onboarding/complete")}
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
