import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ResetPassword.module.css';

export default function ForgotPassword() {
  return (
    <div className={styles.page}>
      {/* Background logo / brand mark */}
      <div className={styles.bgLogoWrapper}>
        <img
          src="/assets/logo.png"
          alt=""
          width={500}
          className={styles.bgLogo}
        />
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          {/* Logo */}
          <div className={styles.logoCenter}>
            <Image
              src='/assets/logo.png'
              alt='Codemantix Collective logo'
              width={125}
              height={125}
            />
          </div>

          {/* Main Card */}
          <div>
            <h1 className={styles.title}>
              Reset Your Password
            </h1>
            <p className={styles.subtitle}>
              Enter your email, we will send you a<br />
              One-Time Password.
            </p>

            {/* Email Input */}
            <div className={styles.fieldGroupLarge}>
              <div className={styles.inputRow}>
                <Image
                  src='/assets/ci_mail.png'
                  alt="Mail Icon"
                  width={34}
                  height={34}
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className={styles.passwordInput}
                />
              </div>
            </div>

            {/* Send OTP Button */}
            <button className={styles.updateBtn}>
              Send OTP
            </button>

            {/* Back to Login */}
            <div className={styles.backRow}>
              <Link
                href="/login"
                className={styles.backLink}
              >
                <span>←</span>
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}