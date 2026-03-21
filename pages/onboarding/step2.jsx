import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepIndicator from "@/components/StepIndicator";

const interests = [
  "Frontend",
  "Data Science",
  "UX Design",
  "Mobile Dev",
  "AI / ML",
  "Cybersecurity",
  "Product Management",
  "Cloud Computing",
];

const learningGoals = [
  { label: "2h", sublabel: "per week", tag: "CASUAL" },
  { label: "5h", sublabel: "per week", tag: "REGULAR" },
  { label: "10h", sublabel: "per week", tag: "SERIOUS" },
  { label: "20h+", sublabel: "per week", tag: "INTENSE" },
];

export default function Step2() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState([
    "Frontend",
    "UX Design",
  ]);
  const [selectedGoal, setSelectedGoal] = useState(1);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Navbar variant="onboarding" />

      <main className="flex-1 flex flex-col items-center px-6 py-8 w-[870px] mx-auto">
        {/* Step indicator header */}
        <div className="animate-fade-in">
          <p className="text-xs font-bold text-[#1E3A8A] tracking-wider mb-3 text-center">
            STEP 2 OF 3
          </p>
          <StepIndicator currentStep={1} totalSteps={3} />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 text-3xl md:text-4xl font-bold font-montserrat text-[#0F172A] mt-8 mb-2 text-center">
          Tailor Your Experience
        </h1>
        <p className="animate-fade-in-up delay-200 text-sm text-gray-400 text-center mb-10 max-w-md">
          Help us understand your goals to provide the best course recommendations.
        </p>

        {/* Interests */}
        <div className="animate-fade-in-up delay-300 w-full max-w-2xl mb-10">
          <h2 className="text-base font-semibold text-[#1a1a2e] mb-4 text-center flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#1a1a6e] animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            What are you interested in?
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((interest, idx) => {
              const isSelected = selectedInterests.includes(interest);
              return (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  style={{
                    minWidth: "133px",
                    height: "44px",
                    borderRadius: "12px",
                    paddingTop: "9.5px",
                    paddingRight: "24px",
                    paddingBottom: "10.5px",
                    paddingLeft: "24px",
                    gap: "8px",
                    animationDelay: `${0.3 + idx * 0.05}s`,
                  }}
                  className={`animate-scale-in inline-flex items-center justify-center text-sm font-medium transition border-2 ${
                    isSelected
                      ? "bg-[#1a1a6e] text-white border-[#1a1a6e]"
                      : "bg-white text-[#1a1a2e] border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {isSelected && (
                    <span className="mr-1.5">✓</span>
                  )}
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Learning Goal */}
        <div className="animate-fade-in-up delay-500 w-full max-w-2xl mb-12 w-[870px] h-[172px] gap-6 mx-auto">
          <h2 className="text-base font-semibold text-[#1a1a2e] mb-4 text-center flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-[#1a1a6e] animate-wiggle loop-delay-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Set your weekly learning goal
          </h2>
          <div className="flex justify-center gap-4 w-full">
            {learningGoals.map((goal, index) => (
              <button
                key={goal.tag}
                onClick={() => setSelectedGoal(index)}
                style={{
                  width: 205.5,
                  height: 120,
                  opacity: 1,
                  borderRadius: "12px",
                  borderWidth: "2px",
                  padding: "16px",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  animationDelay: `${0.5 + index * 0.1}s`,
                }}
                className={`animate-scale-in flex flex-col items-center justify-center transition ${
                  selectedGoal === index
                    ? "border-[#1E3A8A] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 text-[#1E3A8A]"
                }`}
              >
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  {goal.tag}
                </span>
                <span className="text-3xl font-bold text-[#1a1a2e]">
                  {goal.label}
                </span>
                <span className="text-xs text-[#1E3A8A] mt-1">
                  {goal.sublabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
       <div className="flex items-center justify-between w-[413px] h-[56px] opacity-100 absolute top-[678px] left-[925px]">
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 font-medium hover:text-gray-700 flex items-center gap-1"
          >
            ← Back
          </button>
          <button
            onClick={() => router.push("/onboarding/step3")}
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
