import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/EmailConfirmation.module.css';

// const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function EmailConfirmationPage() {
  const router = useRouter();
  const [nextRoute, setNextRoute] = useState("");

  useEffect(() => {
    if (nextRoute) {
      router.push(nextRoute);
    }
  }, [nextRoute, router]);

  return (
    <div className={styles.page}>
      {/* Background logo / brand mark */}
      <div className={styles.bgLogoWrapper}>
       <img
          src="/assets/logo.png"
          alt=""
          width={1484}
          height={1484}
          className={styles.bgLogo}
        />
      </div>
      <div className={styles.card}>
        {/* Logo + brand mark */}
        <div className={styles.logoCenter}>
          <Image
            src='/assets/logo.png'
            alt='Codemantix Collective Logo'
            width={125}
            height={125}
          />
        </div>

        {/* Main card */}
        <div>
          <div className={styles.headerSection}>
            <h1 className={styles.title}>
              Email Verification
            </h1>
            <p className={styles.subtitle}>
              We've sent an 6-digit verification code to:
            </p>
          </div>

          {/* Email display with edit icon */}
          <div className={styles.emailRow}>
            <div className={styles.emailDisplay}>
              <span className={styles.emailText}>johndoe@gmail.com</span>
              <Image
                src='/assets/write.png'
                alt='email note'
                width={24}
                height={24}
              />
            </div>
            <p className={styles.emailHint}>
              Please enter it below to confirm your account.
            </p>
          </div>

          {/* 6-digit code inputs */}
          <div className={styles.codeGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className={styles.codeInput}
                autoFocus={i === 0}
              />
            ))}
          </div>

          {/* Resend link */}
          <div className={styles.resendSection}>
            <p className={styles.resendText}>
              Didn't get your code?
            </p>
            <button
              type="button"
              className={styles.resendBtn}
            >
              Send a new code
            </button>
          </div>

          {/* Verify button */}
          <button
            type="button"
            onClick={() => setNextRoute("/email-verification")}
            className={styles.verifyBtn}
          >
            Verify Email
          </button>

          {/* Back & support links */}
          <div className={styles.bottomLinks}>
            <Link
              href="/login"
              className={styles.backLink}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>

            <Link
              href="/support"
              className={styles.supportLink}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}