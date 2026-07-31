import styles from "./StepIndicator.module.css";

export default function StepIndicator({ currentStep, totalSteps = 4 }) {
  return (
    <div className={styles.wrapper}>
       <div className={styles.dotsRow}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${
              i < currentStep
                ? styles.dotCompleted
                : i === currentStep
                ? styles.dotActive
                : styles.dotInactive
            }`}
          />
        ))}
      </div>
      <p className={styles.subtitle}>
        Personalizing your learning journey...
      </p>
    </div>
  );
}
