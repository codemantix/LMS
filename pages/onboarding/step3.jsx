import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepIndicator from "@/components/StepIndicator";
import styles from "../../styles/Step3.module.css";

const ASSET_PATH = "/Assets/codemantix resources/codemantix resources";

const categories = [
  { label: "All Interests", },
  { label: "Business", icon: `${ASSET_PATH}/Container.png` },
  { label: "Design", icon: `${ASSET_PATH}/Icon.design.png` },
  { label: "Coding", icon: `${ASSET_PATH}/Icon.coding.png` },
  { label: "Marketing", icon: `${ASSET_PATH}/Icon.marketting.png` },
];

const courses = [
  {
    title: "Software Engineering",
    author: "Emma Wilson",
    progress: 69,
    image: `${ASSET_PATH}/software engineering course image.png`,
    category: "Coding",
  },
  {
    title: "UI/UX Design Fundamentals",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/UX course image.png`,
    category: "Design",
  },
  {
    title: "Graphic Design",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/graphics design course image.png`,
    category: "Design",
  },
  {
    title: "Data Analytics",
    author: "Emma Wilson",
    progress: 40,
    image: `${ASSET_PATH}/data anlysus course image.png`,
    category: "Business",
  },
];

function StarRating() {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3].map((star) => (
        <Image
          key={star}
          src={`${ASSET_PATH}/star icon.png`}
          alt="star"
          width={18}
          height={18}
          className={styles.starIcon}
        />
      ))}
    </div>
  );
}

export default function Step3() {
  const router = useRouter();
  const [nextRoute, setNextRoute] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Interests");

  useEffect(() => {
    if (nextRoute) {
      router.push(nextRoute);
    }
  }, [nextRoute, router]);

  const filteredCourses =
    activeCategory === "All Interests"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className={styles.page}>
      <Navbar variant="onboarding" />

      <main className={styles.main}>
        {/* Step indicator header */}
        <div className="animate-fade-in">
          <p className={styles.stepHeader}>
            STEP 3 OF 3
          </p>
          <StepIndicator currentStep={2} totalSteps={3} />
        </div>

        {/* Heading */}
        <h1 className={`${styles.title} animate-fade-in-up delay-100`}>
          Pick Your First Course
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
          Based on your professional interests, we&apos;ve curated these high-impact starter courses to help you begin your learning journey immediately.
        </p>

        {/* Category Tabs */}
        <div className={`${styles.categoryTabs} animate-fade-in-up delay-300`}>
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={activeCategory === cat.label ? styles.categoryBtnActive : styles.categoryBtnInactive}
            >
              {cat.icon && (
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={18}
                  height={18}
                  className={activeCategory === cat.label ? styles.categoryIconActive : ""}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className={styles.courseGrid}>
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className={`${styles.courseCard} animate-fade-in-up`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className={styles.courseImageWrapper}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={486}
                  height={328}
                  className={styles.courseImage}
                />
              </div>

              {/* Course Info */}
              <div className={styles.courseInfo}>
                {/* Title row with stars */}
                <div className={styles.courseTitleRow}>
                  <div className={styles.courseMetaRow}>
                    <div className={styles.progressCol}>
                      <div className={styles.newUserProgressBar}>
                        <div className={styles.newUserProgressFill}></div>
                      </div>
                      <p className={styles.progressText}>0% · New</p>
                    </div>
                    <div className={styles.courseDetailsCol}>
                      <div>
                       <h3 className={styles.courseTitle}>
                         {course.title}
                       </h3>
                       <div className={styles.courseAuthorRow}>
                          <p className={styles.courseAuthor}>{course.author}</p>
                          <StarRating />
                       </div>
                       

                      </div>

                    
                    </div>
                  </div>
                </div>

                {/* Author */}

                {/* Continue Learning button */}
                <button className={styles.continueBtn}>
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button
            onClick={() => router.back()}
            className={styles.backBtn}
          >
            ← Back
          </button>
          <button
            onClick={() => setNextRoute("/onboarding/complete")}
            className={styles.nextBtn}
          >
            Finish Onboarding →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
