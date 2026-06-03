import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hasAccount = localStorage.getItem("lms_has_account");
    const hasVisited = localStorage.getItem("lms_visited");
    if (hasAccount === "true") {
      router.replace("/login");
      return;
    }
    if (hasVisited === "true") {
      router.replace("/signup");
      return;
    }
    localStorage.setItem("lms_visited", "true");
  }, []);

  return (
    <div className={styles.page}>
      {/* ===== HERO SECTION ===== */}
      <main className={styles.heroSection}>
        <section className={styles.heroInner}>

          {/* ===== Left Panel with Background Image ===== */}
          <div className={styles.leftPanel}>
            {/* Background Image */}
            <Image
              src={`${ASSET_PATH}/Rectangle 52.png`}
              alt=""
              fill
              className={styles.bgImage}
              priority
            />
            {/* Overlay for readability */}
            <div className={styles.overlay} />

            {/* Content on top of background */}
            <div className={styles.leftContent}>
              {/* Top bar: Logo left + Nav buttons right */}
              <div className={`animate-fade-in ${styles.panelTopBar}`}>
                <Image
                  src={`${ASSET_PATH}/White Logo.png`}
                  alt="Codemantix Collective"
                  width={192}
                  height={60}
                  className={styles.whiteLogo}
                />
                <div className={styles.blueNavButtons}>
                  <Link href="/onboarding/step2" className={styles.blueSignUpBtn}>
                    Sign Up
                  </Link>
                  <Link href="/onboarding/step2" className={styles.blueLoginBtn}>
                    Login
                  </Link>
                </div>
              </div>
              <br />


              {/* Heading */}
              <h1 className={`animate-fade-in-left ${styles.heading}`}>
                Welcome To<br />Codemantix Collective
              </h1>

              {/* Subtitle */}
              <p className={`animate-fade-in-left delay-200 ${styles.subtitle}`}>
                The next generation Learning Management System designed to accelerate your growth. Your journey to mastery starts here.
              </p>
              <br />


              {/* Feature Cards */}
              <div className={styles.cardsContainer}>
                {/* Card 1 - Personalized Learning */}
                <div className={`animate-fade-in-up delay-300 ${styles.featureCard} animate-pulse-glow`}>
                  <div className={styles.featureCardInner}>
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
                      <h3 className={styles.featureCardTitle}>Personalized Learning</h3>
                      <p className={styles.featureCardText}>
                        Curated paths tailored to your unique goals, skill level, and individual learning pace.
                      </p>
                    </div>
                  </div>
                </div>
             

                {/* Card 2 - Expert-Led Courses */}
                <div className={`animate-fade-in-up delay-500 ${styles.featureCard} animate-pulse-glow loop-delay-400`}>
                  <div className={styles.featureCardInner}>
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
                      <h3 className={styles.featureCardTitle}>Expert-Led Courses</h3>
                      <p className={styles.featureCardText}>
                        Learn directly from industry giants and top-tier academic experts around the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* CTA Buttons */}
              <div className={`animate-fade-in-up delay-700 ${styles.ctaButtons}`}>
                <Link href="/onboarding/step2" className={styles.getStartedBtn}>
                  Get Started
                </Link>
                <Link href="/onboarding/step2" className={styles.browseBtn}>
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>

          {/* ===== Right White Panel ===== */}
          <div className={styles.rightPanel}>

            {/* Sign Up / Login buttons - top right (desktop only) */}
            <div className={`animate-fade-in ${styles.topRightButtons}`}>
              <Link href="/onboarding/step2" className={styles.signUpBtn}>
                Sign Up
              </Link>
              <Link href="/onboarding/step2" className={styles.loginBtn}>
                Login
              </Link>
            </div>
                 
            {/* Dashboard Image - centered */}
            <div className={styles.dashboardArea}>
              <div className={`animate-scale-in delay-400 ${styles.dashboardImageWrapper} animate-float`}>
                <Image
                  src={`${ASSET_PATH}/onboarding first image.png`}
                  alt="Learning Dashboard Preview"
                  width={593}
                  height={546}
                  className={styles.dashboardImage}
                  priority
                />

                {/* Student Avatar + 10k badge */}
                <div className={`animate-fade-in-up delay-600 ${styles.studentBadge}`}>
                  <div className={styles.avatarStack}>
                    <Image
                      src={`${ASSET_PATH}/Student avatar.png`}
                      alt="Student"
                      width={36}
                      height={36}
					  left={6}
                      className={styles.avatar}
                    />
                    <Image
                      src={`${ASSET_PATH}/Student avatar.png`}
                      alt="Student"
                      width={36}
                      height={36}
                      className={styles.avatar}
                    />
                    <div className={styles.avatarCount}>
                      +10k
                    </div>
                  </div>
                  <span className={styles.joinText}>
                    Join 10,000+<br />active learners
                  </span>
                </div>
              </div>

              {/* Step Indicator - Bottom Right */}
              <div className={`animate-fade-in-up delay-800 ${styles.stepIndicatorArea}`}>
                <p className={styles.stepLabel}>
                  Step 1 of 3
                </p>
                <p className={styles.stepSubLabel}>
                  Personalizing your learning journey...
                </p>
                <div className={styles.stepDots}>
                  <div className={styles.stepDotActive}></div>
                  <div className={styles.stepDotInactive}></div>
                  <div className={styles.stepDotInactive}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={styles.indexFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image
              src={`${ASSET_PATH}/codemantix logo png 3.png`}
              alt="Codemantix Collective"
              width={140}
              height={44}
              className={styles.footerLogo}
            />
            <span className={styles.footerRights}>
              All Rights Reserved 2026
            </span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
            <Link href="#" className={styles.footerLink}>Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}