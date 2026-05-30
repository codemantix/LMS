import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../../styles/Courses.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

/* ── 3 filled stars, always ── */
function StarRating() {
  return (
    <div className={styles.starRating}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#F59E0B"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.starIcon}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Software Engineering",
    desc: "A beginner-friendly course focused on building websites and web applications from scratch.",
    author: "Codemantix Team",
    badge: "Beginner",
    advanced: false,
    img: "software engineering course image.png",
  },
  {
    id: 2,
    title: "UI/UX Fundamentals",
    desc: "A beginner-friendly course focused on designing user-friendly interfaces and experiences.",
    author: "Codemantix Team",
    badge: "Beginner",
    advanced: false,
    img: "UX course image.png",
  },
  {
    id: 3,
    title: "Career and Freelancing",
    desc: "A course giving users the insights they need to start and grow in their tech careers.",
    author: "Codemantix Team",
    badge: "Advanced",
    advanced: true,
    img: "data-management.png",
  },
  {
    id: 4,
    title: "Data and Technology",
    desc: "A beginner-friendly course focused on learning data analytics and technical tools.",
    author: "Codemantix Team",
    badge: "Beginner",
    advanced: false,
    img: "data-technology.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    desc: "A course on the fundamentals of graphic design and the tools used by professionals.",
    author: "Codemantix Team",
    badge: "Beginner",
    advanced: false,
    img: "graphics design course image.png",
  },
  {
    id: 6,
    title: "Business and Digital Systems",
    desc: "Designed for business owners and professionals learning website management.",
    author: "Codemantix Team",
    badge: "Advanced",
    advanced: true,
    img: "Rectangle 39.png",
  },
];

/* ── Single card ── */
function CourseCard({ course, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 0.08}s`;
          el.classList.add(styles.cardVisible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className={styles.courseCard}>

      {/* ── Image ── */}
      <div className={styles.courseImageWrapper}>
        <Image
          src={`${ASSET_PATH}/${course.img}`}
          alt={course.title}
          width={486}
          height={328}
          className={styles.courseImage}
        />
      </div>

      {/* ── Info panel ── */}
      <div className={styles.courseInfo}>
        <div className={styles.courseTitleRow}>
          <div className={styles.courseMetaRow}>

            {/* Progress ring column */}
            <div className={styles.progressCol}>
              <div className={styles.newUserProgressBar}>
                <div className={styles.newUserProgressFill} />
              </div>
              <p className={styles.progressText}>0% · New</p>
            </div>

            {/* Title / desc / stars column */}
            <div className={styles.courseDetailsCol}>
              <h3 className={styles.courseTitle}>{course.title}</h3>

              {/* desc + star rating on the same row */}
              <div className={styles.courseDescStarRow}>
                <p className={styles.courseDesc}>{course.desc}</p>
                <StarRating />
              </div>
            </div>

          </div>
        </div>

        {/* Button */}
        <button className={styles.continueBtn}>Enroll Now</button>
      </div>

    </div>
  );
}

/* ── Page ── */
export default function CoursesPage() {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = [heroRef.current, sectionRef.current].filter(Boolean);
    els.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add(styles.fadeInUp), i * 150);
    });
  }, []);

  return (
    <div className={styles.page}>

      {/* Navbar */}
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

      {/* Hero */}
      <section ref={heroRef} className={`${styles.hero} ${styles.animateBase}`}>
        <div className={styles.heroIconWrapper}>
          <Image src={`${ASSET_PATH}/Balance.png`} alt="" width={60} height={60} />
        </div>
        <h1 className={styles.heroTitle}>
          Level up your skills with<br />industry-ready courses
        </h1>
        <p className={styles.heroSubtitle}>
          Explore a wide range of practical, hands-on courses designed to help you build
          real-world skills in tech and design. Whether you&apos;re just starting out or
          looking to advance your career, we&apos;ve got something for you.
        </p>
      </section>

      {/* Courses section */}
      <section ref={sectionRef} className={`${styles.coursesSection} ${styles.animateBase}`}>
        <p className={styles.sectionTitle}>All Courses</p>
        <p className={styles.sectionSubtitle}>
          Browse through our full catalog of courses and find the perfect fit for your goals.
        </p>

        {/* Search + Filter */}
        <div className={styles.searchSection}>
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
                <option value="design">UI/UX &amp; Web Design</option>
                <option value="graphic">Graphic Design</option>
                <option value="career">Career &amp; Freelancing</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}