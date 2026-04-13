import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brandGroup}>
          <Image
            src={`${ASSET_PATH}/codemantix logo png 3.png`}
            alt="Codemantix Collective"
            width={140}
            height={40}
          />
          <span className={styles.rightsText}>
            All Rights Reserved 2026
          </span>
        </div>
        <div className={styles.linksGroup}>
          <Link href="#" className={styles.link}>Privacy Policy</Link>
          <Link href="#" className={styles.link}>Terms of Service</Link>
          <Link href="#" className={styles.link}>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
