import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../styles/Complete.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Complete() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <Navbar variant="onboarding" />

      <main className={styles.main}>
        {/* Success Icon Area */}
        <div className={`${styles.successIconArea} animate-fade-in animate-fade-in-up delay-500 animate-gentle-bounce loop-delay-800`}>
          <div className={styles.successBox}>
            {/* Background overlay */}
            <Image
              src={`${ASSET_PATH}/complete-background.png`}
              alt=""
              fill
              className={styles.bgOverlay}
            />
            <div className={styles.innerCard}>
              <Image
                src={`${ASSET_PATH}/success icon.png`}
                alt="Success"
                width={80}
                height={80}
                className={styles.successImage}
              />
              <div className={styles.starRow}>
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className={styles.starIcon}
                />
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className={styles.starIcon}
                />
                <Image
                  src={`${ASSET_PATH}/star icon.png`}
                  alt="star"
                  width={20}
                  height={20}
                  className={styles.starIcon}
                />
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className={styles.glow}></div>
        </div>

        {/* Heading */}
        <h1 className={`${styles.title} animate-fade-in-up`}>
          You&apos;re All Set!
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
          Welcome to Codemantix Collective.<br />
          Your configuration is complete and your learning journey starts right now.
        </p>

        {/* Quick Tip Card */}
        <div className={`${styles.tipCard} animate-fade-in-up delay-300 animate-pulse-glow`}>
          <div className={styles.tipInner}>
            <div className={styles.tipIcon}>
              <Image
                src={`${ASSET_PATH}/Background.png`}
                alt="background"
                width={50}
                height={50}
                className="rounded-xl"
              />
            </div>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Quick Tip</h3>
              <div className={styles.tipTextRow}>
                <p className={styles.tipText}>
                You can find your first enrolled lesson under the{" "}
                <strong className={styles.tipHighlight}>&apos;My Courses&apos;</strong> tab in your main dashboard.
              </p>
              <Link
                 href="#"
                  className={styles.tipGuideLink}
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
          className={`${styles.dashboardBtn} animate-fade-in-up delay-500 animate-gentle-bounce loop-delay-800`}
        >
          Go to Dashboard →
        </Link>

        {/* Support Link */}
        <p className={`${styles.supportText} animate-fade-in-up delay-600`}>
          Need help getting started?{" "}
          <Link href="#" className={styles.supportLink}>
            Contact Support
          </Link>
        </p>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button
            onClick={() => router.back()}
            className={styles.backBtn}
          >
            ← Back
          </button>
          <button
            onClick={() => router.push("/signup")}
            className={styles.nextBtn}
          >
            Continue to Step 3 →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
