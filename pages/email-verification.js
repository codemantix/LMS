import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/EmailVerification.module.css';

export default function VerificationSuccess() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.bgLogoWrapper}>
          <img
            src="/assets/logo.png"
            alt=""
            width={1484}
            height={1484}
            className={styles.bgLogo}
          />
        </div>
        {/* Checkmark circle */}
        <div className={styles.checkmarkCenter}>
          <Image
            src="/assets/Container.png"
            alt="Verification image"
            width={70}
            height={70}
          />
        </div>

        <h1 className={styles.title}>
          Account Verified!
        </h1>

        <p className={styles.subtitle}>
          Welcome to Codemantix Collective! Your account is now fully set up and ready for your academic journey.<br/>
          Let's get started.
        </p>
        <div className={styles.verificationImage}>
          <Image
            src="/assets/verification.png"
            alt="Verification Illustration"
            width={300}
            height={133.33}
          />
        </div>

        {/* Main CTA */}
        <Link
          href="/dashboard"
          className={styles.dashboardBtn}
        >
          Go to Dashboard →
        </Link>

        {/* Secondary link */}
        <Link
          href="/profile/complete"
          className={styles.profileBtn}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Complete Profile</span>
        </Link>
        <p className={styles.supportText}>
          Need help?{' '}
          <Link
            href="/contact-support"
            className={styles.supportLink}
          >
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}