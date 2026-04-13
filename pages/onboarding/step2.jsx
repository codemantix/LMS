import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepIndicator from "@/components/StepIndicator";
import styles from "../../styles/Step2.module.css";

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
    <div className={styles.page}>
      <Navbar variant="onboarding" />

      <main className={styles.main}>
        {/* Step indicator header */}
        <div className="animate-fade-in">
          <p className={styles.stepHeader}>
            STEP 2 OF 3
          </p>
          <StepIndicator currentStep={1} totalSteps={3} />
        </div>

        {/* Heading */}
        <h1 className={`${styles.title} animate-fade-in-up delay-100`}>
          Tailor Your Experience
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
          Help us understand your goals to provide the best course recommendations.
        </p>

        {/* Interests */}
        <div className={`${styles.interestsSection} animate-fade-in-up delay-300`}>
          <h2 className={styles.sectionTitle}>
            <svg className={`${styles.sectionIcon} animate-wiggle`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            What are you interested in?
          </h2>
          <div className={styles.interestsGrid}>
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
                  className={`${isSelected ? styles.interestBtnActive : styles.interestBtnInactive} animate-scale-in`}
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
        <div className={`${styles.goalsSection} animate-fade-in-up delay-500`}>
          <h2 className={styles.sectionTitle}>
            <svg className={`${styles.sectionIcon} animate-wiggle loop-delay-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Set your weekly learning goal
          </h2>
          <div className={styles.goalsGrid}>
            {learningGoals.map((goal, index) => (
              <button
                key={goal.tag}
                onClick={() => setSelectedGoal(index)}
                style={{
                  minWidth: 0,
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
                className={`${selectedGoal === index ? styles.goalBtnActive : styles.goalBtnInactive} animate-scale-in`}
              >
                <span className={styles.goalTag}>
                  {goal.tag}
                </span>
                <span className={styles.goalLabel}>
                  {goal.label}
                </span>
                <span className={styles.goalSublabel}>
                  {goal.sublabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button
            onClick={() => router.back()}
            className={styles.backBtn}
          >
            ← Back
          </button>
          <button
            onClick={() => router.push("/onboarding/step3")}
            className={styles.continueBtn}
          >
            Continue to Step 3 →
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
