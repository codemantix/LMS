'use client';

import styles from "../../styles/coursepage.module.css";
import Image from 'next/image';
import { Inter, Montserrat } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { Search, Home, SquareArrowRightExit, Settings, Puzzle, SquarePen, X, Heart, UserRound, LayoutGrid, ShoppingCart, Bell, BookOpen, GraduationCap, TrendingUp, Clock5, ArrowUpRight, Linkedin, Facebook, Instagram, Twitter, Star } from 'lucide-react';

const ASSET_PATH = '/assets/codemantix resources/codemantix resources';
const assetPath = (filename) => encodeURI(`${ASSET_PATH}/${filename}`);

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] });

export default function CourseDesktop() {

    // THE FUNCTION FOR MOBILE MORE OPEN AND CLOSE 
    const [isMoreOpen, setMoreOpen] = useState(false)
  
  // THE MENU ACTIONS, DROP MENU AND HIDE 
  const [menuOpen, setMenuOpen] = useState(false)
  const [showProgressScreen, setShowProgressScreen] = useState(false)
  const [activeItem, setActiveItem] = useState('Courses')
  const sidebarRef = useRef(null)

  const [query, setQuery] = useState('');

  const sidebarItems = [
    { label: 'Home', icon: 'Home Icon.png', href: '/student-dashboard/home-desktop', },
    { label: 'Courses', icon: 'Book icon.png' },
    { label: 'Progress', icon: 'Progress icon.png' },
    { label: 'Quizzes', icon: 'Quizzes icon.png' },
    { label: 'Assignments', icon: 'Assignment icon.png' },
  ];

  const settingsItems = [
    { label: 'Profile', icon: 'Profile Icon.png' },
    { label: 'Settings', icon: 'Settings icon.png' },
    { label: 'Logout', icon: 'Logout icon.png' },
  ];

   const courses = [
  { 
    title: "Software Engineering", 
    description: "This  beginner-friendly course is focused onn building websites and web applications from scratch",
    progress: 69, 
    image: assetPath('software engineering course image.png') 
  },
  { 
    title: "UI/UX Fundamentals", 
    description: "This  beginner-friendly course is focused on designing user-friendly interfaces and experiences from scratch",
    progress: 69, 
    image: assetPath('UX course image.png') 
  },
  { 
    title: "Career and Freelancing", 
    description: "This course is focused on helping and giving  users insights to start and grow in their tech careers",
    progress: 69, 
    image: assetPath('career image.png')  
  },
  { 
    title: "Software Engineering", 
    description: "This  beginner-friendly course is focused on learning data analytics and technical tools  from scratch",
    progress: 69, 
     image: assetPath('data image.png')  
  },
  { 
    title: "Data and Technology", 
    description: "This  beginner-friendly course is focused on learning data analytics and technical tools  from scratch",
    progress: 69, 
    image: assetPath('graphics image.png') 
  },
  { 
    title: "Business and Digital Systems", 
    description: "This  course is designed for business owners and professionals to help them learn website mang.",
    progress: 69, 
    image: assetPath('business image.png') 
  },
];

  const trendBars = [
    { label: 'Wk 1', inProgress: 62, completed: 48 },
    { label: 'Wk 2', inProgress: 92, completed: 60 },
    { label: 'Wk 3', inProgress: 84, completed: 36 },
  ];

// THE CODE FOR NEW DATE FUNCTION
const currentDate = new Date();
const day = currentDate.getDate();

const getOrdinal = (n) => {
  if (n > 3 && n < 21) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd'
    default: return 'th';
  }
};

const formattedDate = `${day}${getOrdinal(day)} ${currentDate.toLocaleString(
  'en-GB',
  {month: 'long'}
)} ${currentDate.getFullYear()}, ${currentDate.toLocaleString('en-GB', {weekday: 'long'})}`;

  const featuredCourse = courses[0];

  return (
    <div className={`${styles.page} ${inter.className}`}>
      <div className={styles.workspace}>
         <aside ref={sidebarRef} className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.logo}>
            <Image
              src={assetPath('codemantix logo png 3.png')}
              alt="Codemantix Collective logo"
              width={180}
              height={68}
              priority
            />
          </div>

           <nav className={styles.nav}>
           {sidebarItems.map((item) =>
            item.href ? (
           <Link
           key={item.label}
           href={item.href}
           className={`${styles.navItem} ${
           item.label === activeItem ? styles.navActive : ''
         }`}
           onClick={() => {
           setActiveItem(item.label);
           setMenuOpen(false);
        }}
      >
          <span className={styles.navIcon}>
          <Image
            src={assetPath(item.icon)}
            alt={`${item.label} icon`}
            width={18}
            height={18}
          />
          </span>
          {item.label}
        </Link>
      ) : (
      <button
        key={item.label}
        type="button"
        className={`${styles.navItem} ${ item.label === activeItem ? styles.navActive : ''}`}
        onClick={() => {
          setActiveItem(item.label);

          if (item.label === 'Progress') {
            setShowProgressScreen(true);
            setMenuOpen(false);
          }
        }}
      >
        <span className={styles.navIcon}>
          <Image
            src={assetPath(item.icon)}
            alt={`${item.label} icon`}
            width={18}
            height={18}
          />
        </span>
        {item.label}
      </button>
    )
  )}
      </nav>

          <div className={styles.frame}>
            <h2 className={styles.setting}>Settings</h2>
            {settingsItems.map((item) => (
              <div className={styles.frameItems} key={item.label}>
                <span className={styles.frameIcon}>
                  <Image
                    src={assetPath(item.icon)}
                    alt={`${item.label} icon`}
                    width={16}
                    height={16}
                  />
                </span>
                {item.label}
              </div>
            ))}
          </div>
          <button
            type="button"
            className={styles.closebar}
            onClick={() => setMenuOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={34} />
          </button>
        </aside>
        <div className={styles.sidebarlinecontainer}>
           <div className={styles.sidebarline}></div>
        </div>
        <section className={styles.shell}>
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
                  <div className={styles.hide}>
                    <Image   src={assetPath('codemantix logo png 3.png')} alt="logo" width={100} height={64} />
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

          <div className={styles.content}>
            {showProgressScreen && (
              <div className={styles.progressOverlay} role="dialog" aria-modal="true" aria-label="Progress status">
                <div className={styles.progressBackdrop} onClick={() => setShowProgressScreen(false)} />
                <div className={styles.progressCard}>
                  <div className={styles.progressIllustration}>
                    <div className={styles.progressCircleArt}>
                     <Image
                         src={assetPath('Visual.png')}
                         alt="Visual representation of empty data"
                         width={50}
                         height={50}
                         />
                    </div>
                    <div className={styles.progressFloatingLeft}>
                      <Image
                         src={assetPath('plan.png')}
                          alt="Plan flight"
                          fill
                          />
                    </div>
                    <div className={styles.progressFloatingTop}>
                      <Image
                           src={assetPath('award.png')}
                          alt="Award cup"
                         fill
                         className={styles.awardImage}
                          />
                    </div>
                  </div>
                  <h2 className={`${styles.progressTitle} ${montserrat.className}`}>No progress data yet</h2>
                  <p className={`${styles.progressText} ${inter.className}`}>
                    You&apos;re at the beginning of your learning journey! Complete your first course modules to see your achievements and performance statistics here.
                  </p>
                  <div className={styles.progressActions}>
                    <button className={styles.progressPrimary} onClick={() => setShowProgressScreen(false)}>
                      Start Learning now →
                    </button>
                    <button className={styles.progressSecondary} onClick={() => setShowProgressScreen(false)}>
                      Browse Courses
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.greeting}>
              <p className={`${styles.welcome} ${montserrat.className}`}>
                Good Morning,<br />John Doe
              </p>
              <p className={styles.date}>{formattedDate}</p>
            </div>

            {/* THE BEGINING OF THE COURSE SECTION  */}
                <div className={styles.courseSection}>
                 <h2 className={`${styles.pageTitle} ${montserrat.className}`}>My Courses</h2>
                 <div className={styles.courseGrid}>
  {courses.map((course, i) => (
    <div key={i} className={styles.courseCard}>
      <div className={styles.cardImage}>
        <span className={styles.beginnerBadge}>Beginner</span>
        <Image 
          src={course.image} 
          alt={course.title} 
          fill 
          className={styles.cardImg} 
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.courseHeader}>
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressCircle}
              style={{
                background: `conic-gradient(#41e0a0 ${course.progress}%, #d8f0ea ${course.progress}% )`,
              }}
            >
              <div className={styles.progressInner}>{course.progress}%</div>
            </div>
          </div>

          <div className={styles.courseText}>
            <h3 className={`${styles.courseTitle} ${montserrat.className}`}>
              {course.title}
            </h3>
            <p className={styles.courseDescription}>{course.description}</p>

            <div className={styles.ratingRow}>
              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
              <Star className={styles.starMuted} />
            </div>
          </div>
        </div>

        <button className={styles.continueBtn}>Continue Learning</button>
      </div>
    </div>
  ))}
</div>
                 </div>

          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image
              src={assetPath('codemantix logo png 3.png')}
              alt="Codemantix Collective"
              width={140}
              height={54}
            />
            <p className={styles.footerDescription}>
              Codemantix Academy is the educational platform of Codemantix Collective, focused on practical technology training and structured learning for developers and innovators.
            </p>
            <div className={styles.socialIcons}>
              <Linkedin size={20} />
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
            </div>
          </div>

          <div className={styles.footerLinksGrid}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Quick Links:</h3>
              <Link href="/student-dashboard/home-desktop">Home</Link>
              <a href="#">Courses</a>
              <a href="#">Knowledge Base</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Resources:</h3>
              <a href="#">Student Dashboard</a>
              <a href="#">Instructor Portal</a>
              <a href="#">Community</a>
              <a href="#">Frequently Asked Question</a>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Legal:</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>All Rights Reserved {new Date() .getFullYear()}</div>
      </footer>
      {/* Bottom Navigation - Mobile Only */}
       <div className={styles.mainBottomContainer}>
       <div className={styles.bottomNav}>
      <Link href='#' className={`${styles.bottomNavItem} ${activeItem === 'Home' ? styles.active : ''}`}>
    <UserRound size={24} className={styles.bottomIcon} />
  </Link>
  <Link href='/student-dashboard/home-desktop' className={`${styles.bottomNavItem}`}>
   <Home size={24} className={styles.bottomIcon} />
  </Link>
  <Link href='/student-dashboard/coursepage' className={`${styles.bottomNavItem} ${activeItem === 'Courses' ? styles.active : ''}`}>
   <BookOpen size={24} className={styles.bottomIcon} />
  </Link>
  <button onClick={() => setMoreOpen(true)} className={styles.bottomNavItem}>
    <LayoutGrid size={24} className={styles.bottomIcon} />
  </button>
  </div>
  {isMoreOpen &&(
    <div className={styles.moreContainer}>
    <div className={`${styles.moreTop} ${montserrat.className}`}>
      <p>More</p>
      <X  onClick={() => setMoreOpen(false)}/>
    </div>
   <div className={styles.more}>
     <Link href="#" className={styles.moreIcon}>
    <TrendingUp /> Progress
    </Link>
    <Link href='#'  className={styles.moreIcon}>
    <Puzzle /> Quizzes
    </Link>
    <Link href='#'  className={styles.moreIcon}>
    <Settings /> Settings
    </Link>
    <Link href='#'  className={styles.moreIcon}>
    <SquarePen />Assignments
    </Link>
    <Link href='#'  className={styles.moreIcon}>
    <SquareArrowRightExit /> LogOut
    </Link>
   </div>
  </div>
  )}
     </div>
    </div>
  );
}