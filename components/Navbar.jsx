import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

function Logo({ width = 140, height = 40 }) {
  return (
    <Link href="/">
      <Image
        src={`${ASSET_PATH}/codemantix logo png 3.png`}
        alt="Codemantix Collective"
        width={width}
        height={height}
        className={styles.logo}
      />
    </Link>
  );
}

export default function Navbar({ variant = "landing" }) {
  if (variant === "onboarding") {
    return (
      <nav className={styles.navOnboarding}>
        <Logo />
        <div className={styles.onboardingActions}>
          <button className={styles.saveExitBtn}>
            Save & Exit
          </button>
          <Link href="/" className={styles.skipLink}>
            Skip
          </Link>
        </div>
      </nav>
    );
  }

  // Landing variant
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.landingActions}>
        <Link href="/onboarding/step2" className={styles.signUpBtn}>
          Sign Up
        </Link>
        <Link href="/login" className={styles.loginBtn}>
          Login
        </Link>
      </div>
    </nav>
  );
}
