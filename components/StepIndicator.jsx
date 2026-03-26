export default function StepIndicator({ currentStep, totalSteps = 4 }) {
  return (
    <div className="flex flex-col items-center gap-2">
       <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i < currentStep
                ? "w-16 bg-[#E2E8F0]"
                : i === currentStep
                ? "w-16 bg-[#1E3A8A]"
                : "w-16 bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-[14px] text-[#475569] mt-1">
        Personalizing your learning journey...
      </p>
    </div>
  );
}
