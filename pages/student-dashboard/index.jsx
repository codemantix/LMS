import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../../styles/StudentDashboard.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

const Star = ({ filled }) => (
  <Image
    src={`${ASSET_PATH}/star icon.png`}
    alt="star"
    width={15}
    height={15}
    style={{ opacity: filled ? 1 : 0.2 }}
  />
);

const recommended = [
  {
    id: 1,
    title: "Software Engineering",
    desc: "This beginner-friendly course is focused on building websites and web applications from scratch",
    img: "software engineering course image.png",
    stars: 3,
    lessons: 12,
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    desc: "This beginner-friendly course is focused on designing user-friendly interfaces and experiences from scratch",
    img: "UX course image.png",
    stars: 3,
    lessons: 12,
  },
];

const categories = [
 
  { label: "Web Development", icon: `${ASSET_PATH}/code sign.png` },
  { label: "UI/UX & Web Design", icon: `${ASSET_PATH}/color palette.png` },
  { label: "Graphic Design", icon: `${ASSET_PATH}/graphics-icon.png` },
  { label: "Career & Freelancing", icon: `${ASSET_PATH}/career-icon.png` },
];

export default function StudentDashboardHome() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className={styles.page}>

      {/* ===== Navbar ===== */}
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={`${ASSET_PATH}/codemantix logo png 3.png`}
            alt="Codemantix Collective"
            width={140}
            height={40}
            className={styles.logo}
          />
        </Link>
      </nav>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className={styles.heroIconWrapper}>
          <Image
            src={`${ASSET_PATH}/real book icon.png`}
            alt=""
            width={63}
            height={55.5}
          />
        </div>
        <h1 className={styles.heroTitle}>
          Your learning journey starts<br />here
        </h1>
        <p className={styles.heroSubtitle}>
          Welcome to Codemantix Academy! You haven&apos;t enrolled in any courses yet.
          Our catalog features over 500+ industry-leading programs to help you reach your goals.
        </p>
        <div className={styles.heroBtns} style={{ marginTop: "1.5rem" }}>
          <Link href="/student-dashboard/courses" className={styles.browseBtn}>
            Browse Courses →
          </Link>
          <Link href="/login" className={styles.enrollBtn}>
            Enroll Now
          </Link>
        </div>
      </section>

      {/* ===== Search ===== */}
      <section className={styles.searchSection}>
        <div className={styles.searchRow}>
          <div className={styles.searchInputWrapper}>
            <Image
              src={`${ASSET_PATH}/Icon.png`}
              alt="Search"
              width={16}
              height={16}
              className={styles.searchIconImage}
            />
            <input type="text" placeholder="Search for courses, skills and videos" />
          </div>
          <div className={styles.filterGroup}>
            <span>Filter By:</span>
            <select defaultValue="all">
              <option value="all">All Categories</option>
              <option value="web">Web Development</option>
              <option value="design">UI/UX & Web Design</option>
              <option value="graphic">Graphic Design</option>
              <option value="career">Career &amp; Freelancing</option>
            </select>
          </div>
        </div>
      </section>

      {/* ===== Course Categories ===== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionTitle}>Course Categories</p>
            <p className={styles.sectionSubtitle}>Explore Everything we Offer</p>
          </div>
          <Link href="/student-dashboard/courses" className={styles.viewAllLink}>
            View all courses
          </Link>
        </div>
        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={
                activeCategory === cat.label
                  ? styles.categoryBtnActive
                  : styles.categoryBtnInactive
              }
            >
              {cat.icon && (
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={30}
                  height={30}
                  className={
                    activeCategory === cat.label ? styles.categoryIconActive : ""
                  }
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== All Courses ===== */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionTitle}>All Courses</p>
            <p className={styles.sectionSubtitle}>Explore Everything we Offer</p>
          </div>
          <Link href="/student-dashboard/courses" className={styles.viewAllLink}>
            View all courses
          </Link>
        </div>
        <div className={styles.featureChipsRow}>
          <div className={styles.featureChip}>
            <Image src={`${ASSET_PATH}/books.png`} alt="" width={30} height={30} />
            <span>Comprehensive Lessons</span>
          </div>
          <div className={styles.featureChip}>
            <Image src={`${ASSET_PATH}/video-icon.png`} alt="" width={30} height={30} />
            <span>Video Tutorials</span>
          </div>
          <div className={styles.featureChip}>
            <Image src={`${ASSET_PATH}/flasklab-icon.png`} alt="" width={30} height={30} />
            <span>Real-world Projects</span>
          </div>
          <div className={styles.featureChip}>
            <Image src={`${ASSET_PATH}/graduate diploma.png`} alt="" width={30} height={30} />
            <span>Certificate</span>
          </div>
        </div>
      </section>

      {/* ===== Recommended for You ===== */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionTitle}>Recommended for You</p>
            <p className={styles.sectionSubtitle}>Start with our most popular programs</p>
          </div>
          <Link href="/student-dashboard/courses" className={styles.viewAllLink}>
            View all catalog
          </Link>
        </div>
        <div className={styles.recommendedGrid}>
          {recommended.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseCardImageWrapper}>
                <Image
                  src={`${ASSET_PATH}/${course.img}`}
                  alt={course.title}
                  width={500}
                  height={328}
                  className={styles.courseCardImage}
                />
              </div>
              <div className={styles.courseCardBody}>
                <p className={styles.courseCardTitle}>{course.title}</p>
                <div className={styles.courseCardDescStars}>
                  <p className={styles.courseCardDesc}>{course.desc}</p>
                  <div className={styles.courseCardStars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < course.stars} />
                    ))}
                  </div>
                </div>
                <div className={styles.courseCardFooter}>
                  <div className={styles.lessonsGroup}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <Link href="/student-dashboard/courses" className={styles.previewLink}>
                    ↗ Preview Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}