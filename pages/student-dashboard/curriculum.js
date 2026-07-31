'use client';

import styles from "../../styles/curriculum.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, Book, ShoppingCart, ChevronUp, ChevronDown, Bell, Clock5, Earth, GraduationCap, Lock, BookCheck, Star, CircleEllipsis, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Footer from './footer';
import { Montserrat } from 'next/font/google';


const ASSET_PATH = '/assets/codemantix resources/codemantix resources';
const assetPath = (filename) => encodeURI(`${ASSET_PATH}/${filename}`);

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] });


const modules = [
  {
    id: 1,
    title: "Module 1: Introduction to Product Design",
    topics: [
      "What is Product Design?",
      "Understanding the Product Design Process",
      "The Role of a Product Designer",
      "Product Thinking vs Traditional Design"
    ]
  },
  {
    id: 2,
    title: "Module 2: User Research",
    topics: [
      "Understanding User Needs",
      "Understanding the Product Design Process",
      "Creating User Personas",
      "Customer Journey Mapping"
    ]
  },
  {
    id: 3,
    title: "Module 3: Information Architecture",
    topics: [
      "Structuring Digital Products",
      "User Flows and Task Flows",
      "Content Organization"
    ]
  },
  {
    id: 4,
    title: "Module 4: Wireframing & Low-Fidelity Design",
    topics: [
      "Sketching Ideas Quickly",
      "Creating Low-Fidelity Wireframes",
      "Layout Principles",
      "Design Consistency"
    ]
  },
  {
    id: 6,
    title: "Module 6: Prototyping",
    topics: [
      "Interactive Prototypes",
      "Micro-interactions"
    ]
  },
  {
    id: 7,
    title: "Module 7: Usability Testing",
    topics: [
      "Collecting User Feedback",
      "Identifying UX Problems",
      "Iterating Based on Data"
    ]
  },
  {
    id: 8,
    title: "Final Project: Guided Project",
    topics: [
      "In this module, students will practice all they learnt on a real-life project by designing a complete digital product experience including research, wireframes, high-fidelity UI, and interactive prototype, working with developers, using design systems."
    ]
  }
];

export default function CourseDetails() {

    const [openModules, setOpenModules] = useState([1]);

  const toggleModule = (id) => {
    if (openModules.includes(id)) {
      setOpenModules(openModules.filter(m => m !== id));
    } else {
      setOpenModules([...openModules, id]);
    }
  };

  const [activeTab, setActiveTab] = useState('Curriculum');
   const [query, setQuery] = useState('');

      const tabs = [
  { name: "Overview", href: "/student-dashboard/overview" },
  { name: "Curriculum", href: "/student-dashboard/curriculum" },
  { name: "Instructor", href: "/student-dashboard/instructor" },
  { name: "Review", href: "/student-dashboard/review" },
  { name: "Q/A", href: "/student-dashboard/faq" },
];

  return (
    <div className={styles.page}>
     <div className={styles.container}>
       {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image src="/assets/codemantix%20resources/codemantix%20resources/codemantix%20logo%20png%203.png" alt='Codemantix Logo' width={140} height={40} className={styles.logo} />
          </div>
          <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
               <div className={styles.searchbar}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search for courses, skills and videos"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.userSection}>
                <div className={styles.notification}>
               <div className={styles.logoContainerMobile}>
                <Image src="/assets/codemantix%20resources/codemantix%20resources/codemantix%20logo%20png%203.png" alt='Codemantix Logo' width={140} height={40} className={styles.logo} />
               </div>
                 <div className={styles.notificationIconContainer}>
                   <Heart className={styles.notificationIcon} />
                  <ShoppingCart className={styles.notificationIcon} />
                  <Bell className={styles.notificationIcon} />
                  <Search size={18} className={styles.hide} />
                 </div>
                </div>
                <div className={styles.profile}>
                <Image
                    src={assetPath('notification-image.jpg')}
                    alt="John Doe"
                    width={30}
                    height={30}
                    className={styles.avatar}
                  />
                  <div>
                    <p className={styles.name}>Profile</p>
                    <p className={styles.role}>John Doe</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>Course / Course Details</div>
          <h1 className={`${styles.courseTitle} ${montserrat.className}`}>UI/UX & Product <br /> Design</h1>
          <p className={styles.courseSubtitle}>Design</p>

          <div className={styles.meta}>
            <div className={styles.instructorTag}>
              <CircleEllipsis className={styles.ellipse} size={30} /> Instructor - Emma Wilson
            </div>
            <div className={styles.metaItem}><Clock5 className={styles.detailsIcon} size={18} /> N/A</div>
            <div className={styles.metaItem}>
              <div className={styles.starContainer}>
                <Star className={styles.detailsIcon} size={20} />
                <Star className={styles.detailsIcon} size={20} />
                <Star className={styles.detailsIcon} size={20} />
                <Star className={styles.detailsIcon} size={20} />
                <Star className={styles.detailsIcon} size={20} />
              </div>
               <span>(0)</span>
               </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className={`${styles.tabs} ${montserrat.className}`}>
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`${styles.tab} ${
            activeTab === tab.name ? styles.activeTab : ""
        }`}
         onClick={() => setActiveTab(tab.name)}
        >
           {tab.name}
          </Link>
         ))}
      </div>

      <div className={styles.mainContent}>
        {/* Curriculum Section */}

        <div className={styles.curriculumContainer}>
      <div className={styles.curriculum}>
        <h1 className={montserrat.className}>Course Curriculum</h1>

        <div className={styles.modules}>
          {modules.map((module) => (
            <div key={module.id} className={styles.module}>
              <button 
                className={`${styles.moduleHeader} ${montserrat.className}`}
                onClick={() => toggleModule(module.id)}
              >
                <span className={styles.moduleTitle}>{module.title}</span>
                {openModules.includes(module.id) ? 
                  <ChevronUp size={20} /> : 
                  <ChevronDown size={20} />
                }
              </button>

              {openModules.includes(module.id) && (
                <div className={styles.moduleContent}>
                  <ul>
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className={styles.topic}>
                        {topic}
                        <span className={styles.arrow}><ArrowUpRight size={20}/></span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* Sidebar Info */}
        <div className={styles.sidebar}>
           <div className={styles.heroImage}>
             <Image
               src={assetPath('UX image.png')}
               alt="Course"
               fill
               className={styles.image}
             />
                </div>
          <div className={styles.sidebarInfo}>
            <p className={styles.wishlistBtn}><Heart className={styles.detailsIcon} /> Add To Wishlist</p>
          <button className={styles.continueBtn}>Continue Learning</button>

          <ul className={styles.details}>
            <li><Clock5 className={styles.detailsIcon} /> Duration: N/A</li>
            <li><Earth className={styles.detailsIcon} /> Language: English</li>
            <li><BookCheck className={styles.detailsIcon} /> Skill Level: Beginner</li>
            <li><GraduationCap className={styles.detailsIcon} /> Certificate of Completion</li>
            <li><Lock className={styles.detailsIcon} /> Full-Time Access</li>
          </ul>

          <div className={styles.share}>
            <p>Share</p>
            <div className={styles.socialShare}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM447.3 263.3C447.3 350 381.3 449.9 260.7 449.9C223.5 449.9 189 439.1 160 420.5C165.3 421.1 170.4 421.3 175.8 421.3C206.5 421.3 234.7 410.9 257.2 393.3C228.4 392.7 204.2 373.8 195.9 347.8C206 349.3 215.1 349.3 225.5 346.6C195.5 340.5 173 314.1 173 282.2L173 281.4C181.7 286.3 191.9 289.3 202.6 289.7C193.6 283.7 186.2 275.6 181.1 266.1C176 256.6 173.3 245.9 173.4 235.1C173.4 222.9 176.6 211.7 182.3 202C214.6 241.8 263.1 267.8 317.5 270.6C308.2 226.1 341.5 190 381.5 190C400.4 190 417.4 197.9 429.4 210.7C444.2 207.9 458.4 202.4 471 194.9C466.1 210.1 455.8 222.9 442.2 231C455.4 229.6 468.2 225.9 480 220.8C471.1 233.9 459.9 245.5 447.1 254.8C447.3 257.6 447.3 260.5 447.3 263.3z"/></svg>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     <Footer />
     </div>
    </div>
  );
}