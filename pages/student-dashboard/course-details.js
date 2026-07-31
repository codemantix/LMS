import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bell, BookOpen, Clock3, GraduationCap, Heart, Search, ShoppingCart } from "lucide-react";
import styles from "../../styles/CourseDetails.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";
const assetPath = (filename) => encodeURI(`${ASSET_PATH}/${filename}`);

const overviewItems = [
  { label: "Duration", value: "4 Weeks" },
  { label: "Level", value: "Beginner" },
  { label: "Lessons", value: "12 Modules" },
  { label: "Certificate", value: "Included" },
];

const modules = [
  "Introduction to software engineering concepts and workflows",
  "Building and styling responsive websites with modern tools",
  "Structuring real-world projects and thinking like a developer",
  "Preparing for freelance and career conversations in tech",
];

const outcomes = [
  "Understand the fundamentals of web development",
  "Create polished user-facing experiences",
  "Develop the confidence to keep learning and building",
];

export default function CourseDetailsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/student-dashboard/home-desktop" className={styles.logoWrap}>
          <Image
            src={assetPath("codemantix logo png 3.png")}
            alt="Codemantix Collective"
            width={150}
            height={44}
            className={styles.logo}
          />
        </Link>

        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input type="text" placeholder="Search for courses, skills and videos" />
        </div>

        <div className={styles.toolbar}>
          <Heart className={styles.icon} />
          <ShoppingCart className={styles.icon} />
          <Bell className={styles.icon} />
          <div className={styles.profilePill}>
            <Image
              src={assetPath("notification-image.jpg")}
              alt="Student profile"
              width={30}
              height={30}
              className={styles.avatar}
            />
            <span>John Doe</span>
          </div>
        </div>
      </header>

      <main className={styles.layout}>
        <section className={styles.heroCard}>
          <div className={styles.imagePanel}>
            <Image
              src={assetPath("software engineering course image.png")}
              alt="Software engineering course"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className={styles.courseImage}
            />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.badge}>Beginner</span>
            <h1 className={styles.title}>Software Engineering</h1>
            <p className={styles.description}>
              A beginner-friendly course focused on building websites and web applications from scratch with practical, real-world workflows.
            </p>

            <div className={styles.metaRow}>
              {overviewItems.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className={styles.buttonRow}>
              <button type="button" className={styles.primaryBtn}>
                Enroll Now
              </button>
              <Link href="/student-dashboard/coursepage" className={styles.secondaryBtn}>
                Explore More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.detailsGrid}>
          <article className={styles.infoCard}>
            <div className={styles.sectionHeader}>
              <BookOpen className={styles.sectionIcon} />
              <h2>What you&apos;ll learn</h2>
            </div>
            <ul className={styles.list}>
              {outcomes.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.check}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.sectionHeader}>
              <GraduationCap className={styles.sectionIcon} />
              <h2>Course structure</h2>
            </div>
            <ul className={styles.list}>
              {modules.map((item, index) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.count}>0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className={styles.bottomCard}>
          <div className={styles.bottomRow}>
            <div>
              <p className={styles.bottomLabel}>Learning status</p>
              <p className={styles.bottomValue}>New course • 0% complete</p>
            </div>
            <div className={styles.bottomMeta}>
              <Clock3 size={16} />
              <span>4-week guided track</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
