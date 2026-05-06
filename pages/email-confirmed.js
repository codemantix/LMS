import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import styles from '../styles/EmailConfirmed.module.css';

export default function EmailConfirmedPage() {
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
        {/* Logo / Brand mark */}
        <div className={styles.logoSection}>
          <Image
            src="/assets/logo.png"
            alt="Codemantix Collective Logo"
            width={125}
            height={125}
          />
          <h1 className={styles.title}>Email Confirmed</h1>
        </div>
        {/* Success card */}
        <div>
          {/* Big thumbs-up / like icon */}
          <div className={styles.thumbsUp}>
            <Image
              src="/assets/thurmb-up.png"
              alt="Thumbs Up icon"
              width={136}
              height={136}
            />
          </div>

          {/* Congratulations message */}
          <div className={styles.message}>
            <p className={styles.messageText}>
              Congratulations! <br />
              Your email has been confirmed.
              You can now login to the application.
            </p>
          </div>
          {/* {Continue to reset password} */}
          <Link href="/incorrect-password" className={styles.submitBtn}>
            Continue to reset password
          </Link>
          {/* Back to login link */}
          <Link href="/login" className={styles.backLink}>
            <ArrowLeft />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}