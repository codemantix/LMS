'use client';

import styles from "../../styles/homeDesktop.module.css";
import Image from 'next/image';
import { Inter, Montserrat } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { Search, X, Heart, UserRound, Puzzle, Settings, SquareArrowRightExit, SquarePen, Home, LayoutGrid, ShoppingCart, Bell, BookOpen, GraduationCap, TrendingUp, Clock5, ArrowUpRight, Linkedin, Facebook, Instagram, Twitter, Star } from 'lucide-react';

const ASSET_PATH = '/Assets/codemantix resources/codemantix resources';
const assetPath = (filename) => encodeURI(`${ASSET_PATH}/${filename}`);

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] });

export default function CourseDesktop() {

  // THE FUNCTION FOR MOBILE MORE OPEN AND CLOSE 
  const [isMoreOpen, setMoreOpen] = useState(false)
  
  // THE MENU ACTIONS, DROP MENU AND HIDE 
  const [menuOpen, setMenuOpen] = useState(false)
  const [showProgressScreen, setShowProgressScreen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const sidebarRef = useRef(null)

  const [query, setQuery] = useState('');

  const sidebarItems = [
  {
    label: 'Home',
    icon: 'Home Icon.png',
    href: '/student-dashboard/home-desktop',
  },
  {
    label: 'Courses',
    icon: 'Book icon.png',
    href: '/student-dashboard/coursepage',
  },
  {
    label: 'Progress',
    icon: 'Progress icon.png',
  },
  {
    label: 'Quizzes',
    icon: 'Quizzes icon.png',
    href: '/student-dashboard/quizzes',
  },
  {
    label: 'Assignments',
    icon: 'Assignment icon.png',
    href: '/student-dashboard/assignments',
  },
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
    image: assetPath('UX course image.png')  
  },
  { 
    title: "Software Engineering", 
    description: "This  beginner-friendly course is focused on learning data analytics and technical tools  from scratch",
    progress: 69, 
     image: assetPath('graphics design course image.png')  
  },
  { 
    title: "Data and Technology", 
    description: "This  beginner-friendly course is focused on learning data analytics and technical tools  from scratch",
    progress: 69, 
    image: assetPath('data anlysus course image.png') 
  },
  { 
    title: "Business and Digital Systems", 
    description: "This  course is designed for business owners and professionals to help them learn website mang.",
    progress: 69, 
    image: assetPath('data anlysus course image.png') 
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
        className={`${styles.navItem} ${
          item.label === activeItem ? styles.navActive : ''
        }`}
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
                Good Morning, John<br />Doe
              </p>
              <p className={styles.date}>{formattedDate}</p>
            </div>

            <div className={styles.dashboardGrid}>
              <div className={styles.leftColumn}>
                <div className={styles.cardContainer}>
                  <div className={styles.cardCopy}>
                    <h2 className={`${montserrat.className} ${styles.cardTitle}`}>
                      New Courses Available Now!
                    </h2>
                    <p className={styles.cardDescription}>
                      Explore our latest courses and gain practical skills in tech, design, and digital innovation.
                    </p>
                    <button className={styles.exploreButton}>Explore Now</button>
                  </div>
                  <div className={styles.heroImageWrap}>
                    <Image
                      src={assetPath('Cad-boy.png')}
                      alt="Course illustration"
                      width={219}
                      height={329}
                      priority
                      sizes="(max-width: 768px) 100vw, 219px"
                      className={styles.heroImage}
                    />
                  </div>
                </div>

                <div className={styles.cardList}>
                  <div className={styles.cardListItem}>
                    <BookOpen className={`${styles.cardIcon} ${styles.blue}`} />
                    <p className={styles.cardlistName}>Total Courses</p>
                    <span className={`${styles.cardNumber} ${montserrat.className}`}>1</span>
                  </div>
                  <div className={styles.cardListItem}>
                    <GraduationCap className={`${styles.cardIcon} ${styles.green}`} />
                    <p className={styles.cardlistName}>Completed</p>
                    <span className={`${styles.cardNumber} ${montserrat.className}`}>0</span>
                  </div>
                  <div className={styles.cardListItem}>
                    <TrendingUp className={`${styles.cardIcon} ${styles.orange}`} />
                    <p className={styles.cardlistName}>In Progress</p>
                    <span className={`${styles.cardNumber} ${montserrat.className}`}>1</span>
                  </div>
                  <div className={styles.cardListItem}>
                    <Clock5 className={`${styles.cardIcon} ${styles.grey}`} />
                    <p className={styles.cardlistName}>Learning Hours</p>
                    <span className={`${styles.cardNumber} ${montserrat.className}`}>0</span>
                  </div>
                </div>

                <div className={styles.courseSection}>
                  <div className={styles.sectionRow}>
                    <h2 className={`${styles.pageTitle} ${montserrat.className}`}>My Courses</h2>
                    <button className={styles.seeAllBtn}>See All</button>
                  </div>

                  <div className={styles.courseGrid}>
                    <div className={styles.courseCard}>
                      <div className={styles.cardImage}>
                        <p className={styles.beginnerBadge}>Beginner</p>
                        <Image
                          src={featuredCourse.image}
                          alt={featuredCourse.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className={styles.cardImg}
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <div className={styles.courseHeader}>
                          <div className={styles.progressWrapper}>
                            <div
                              className={styles.progressCircle}
                              style={{
                                background: `conic-gradient(#41e0a0 ${featuredCourse.progress}%, #d8f0ea ${featuredCourse.progress}% )`,
                              }}
                            >
                              <div className={styles.progressInner}>{featuredCourse.progress}%</div>
                            </div>
                          </div>
                          <div className={styles.courseText}>
                            <h3 className={`${styles.courseTitle} ${montserrat.className}`}>{featuredCourse.title}</h3>
                            <p className={styles.courseDescription}>{featuredCourse.description}</p>
                            <div className={styles.ratingRow} aria-label="Course rating">
                              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
                              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
                              <Star className={styles.star} fill="#f7c948" color="#f7c948" />
                              <Star className={styles.starMuted} />
                              <Star className={styles.starMuted} />
                            </div>
                          </div>
                        </div>

                        <button className={styles.continueBtn}>Continue Learning</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className={styles.rightRail}>
                <div className={styles.assignmentsCard}>
                  <div className={styles.smallCardHeader}>
                    <h3 className={styles.railTitle}>Assignments</h3>
                  </div>
                  <div className={styles.emptyState}>No Assignments !</div>
                </div>

                <div className={styles.trendCard}>
                     <div className={styles.tradContainer}>
                       <h3 className={styles.railTitle}>Your Learning Trend <TrendingUp /></h3>
                  <div className={styles.chartLegend}>
                    <span><i className={styles.legendDotLilac} />Completed</span>
                    <span><i className={styles.legendDotBlue} />In Progress</span>
                  </div>

                  <div className={styles.chartArea}>
                    <div className={styles.chartAxistContainer}>
                      <p className={styles.points}>Points</p>
                    <div className={styles.chartAxis}>
                      <span>300</span>
                      <span>200</span>
                      <span>150</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                      </div>
                    </div>

                    <div className={styles.chartBars}>
                      {trendBars.map((bar) => (
                        <div key={bar.label} className={styles.chartGroup}>
                          <div className={styles.barPair}>
                            <div className={styles.barTrack}>
                              <div className={styles.barInProgress} style={{ height: `${bar.inProgress}%` }} />
                            </div>
                            <div className={styles.barTrack}>
                              <div className={styles.barCompleted} style={{ height: `${bar.completed}%` }} />
                            </div>
                          </div>
                          <span className={styles.chartLabel}>{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className={styles.pointWeek}>Weeks</p>
                     </div>
                  <div className={styles.viewAllTrend}>View All <ArrowUpRight size={14} /></div>
                </div>
              </aside>
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
              <a href="#">Home</a>
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
      <Link href='#' className={styles.bottomNavItem}>
    <UserRound size={24} className={styles.bottomIcon} />
  </Link>
  <Link href='/student-dashboard/home-desktop' className={`${styles.bottomNavItem} ${activeItem === 'Home' ? styles.active : ''}`}>
   <Home size={24} className={styles.bottomIcon} />
  </Link>
  <Link href='/student-dashboard/coursepage' className={styles.bottomNavItem}>
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