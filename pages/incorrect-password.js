import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/IncorrectPassword.module.css';

export default function ResetPassword() {
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

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          {/* Logo */}
          <div className={styles.logoCenter}>
            <Image
              src='/assets/logo.png'
              alt='Codemantix Collective'
              width={125}
              height={125}
            />
          </div>

          <div className={styles.cardBody}>
            {/* Main Card */}
            <h1 className={styles.title}>
              Reset Password
            </h1>
            <p className={styles.subtitle}>
              Please enter your new password below to regain<br />
              access to your Codemantix Collective account
            </p>

            {/* New Password */}
            <div>
              <label>New Password</label>
              <div className={styles.emailInputRow}>
                <Image
                  src='/assets/uil_padlock.png'
                  alt='padlock'
                  width={32}
                  height={32}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.emailInput}
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label>Confirm New Password</label>
              <div className={styles.emailInputRow}>
                <Image
                  src='/assets/Secure.png'
                  alt='Secure Icon'
                  width={32}
                  height={32}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className={styles.emailInput}
                />
              </div>
            </div>

            {/* Password Requirements */}
            <div>
              <p>PASSWORD REQUIREMENTS</p>
              <div>
                <div>
                  <Image
                    src='/assets/good.png'
                    alt='Good icon'
                    width={11.67}
                    height={11.67}
                  />
                  <span>At least 8 characters long</span>
                </div>
                <div>
                  <Image
                    src='/assets/Circle-icon.png'
                    alt='Neutral icon'
                    width={11.67}
                    height={11.67}
                  />
                  <span>Include one special character</span>
                </div>
              </div>
            </div>

            {/* Update Password Button */}
            <button className={styles.sendOtpBtn}>
              Update Password
            </button>

            {/* Back to Login */}
            <div className={styles.backRow}>
              <Link
                href="/login"
                className={styles.backLink}
              >
                ← Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}