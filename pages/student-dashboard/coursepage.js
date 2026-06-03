'use client';

import styles from '../styles/coursepage.module.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const ASSET_PATH = '/assets/codemantix resources/codemantix resources';
const assetPath = (filename) => encodeURI(`${ASSET_PATH}/${filename}`);

const inter = Inter({ subsets: ['latin'] });

export default function CourseDesktop() {

  const [query, setQuery] = useState('');

 const courses = [
  { 
    title: "Software Engineering", 
    progress: 65, 
    image: assetPath('software engineering course image.png') 
  },
  { 
    title: "UI/UX Fundamentals", 
    progress: 40, 
    image: assetPath('UX course image.png') 
  },
  { 
    title: "Career and Freelancing", 
    progress: 85, 
    image: assetPath('UX course image.png')  
  },
  { 
    title: "Software Engineering", 
    progress: 30, 
     image: assetPath('graphics design course image.png')  
  },
  { 
    title: "Data and Technology", 
    progress: 75, 
    image: assetPath('data anlysus course image.png') 
  },
  { 
    title: "Business and Digital Systems", 
    progress: 55, 
    image: assetPath('data anlysus course image.png') 
  },
];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={`${styles.sidebar}`}>
          <div className={`${styles.logo}`}>
            <Image
              src={assetPath('codemantix logo png 3.png')}
              alt="Codematix Collective logo"
              width={287}
              height={109}
            />
          </div>
       
        <nav className={styles.nav}>
          {['Home', 'Courses', 'Progress', 'Quizzes', 'Assignments'].map((item) => (
            <div key={item} className={`${styles.navItem} ${item === 'Courses' ? styles.active : ''}`}>
              <span className={styles.navIcon}>
                {item === 'Home' ? 
                <Image 
                src={assetPath('Home Icon.png')}
                alt='Home Icon'
                width={15}
                height={15}
                /> : item === 'Courses' ?
                <Image
                src={assetPath('Book icon.png')}
                alt='Book Icon'
                width={15}
                height={12.19}
                />
                 : item === 'Progress' ? 
                 <Image
                 src={assetPath('Progress icon.png')}
                 alt='Progress Icon'
                 width={15}
                 height={9}
                 /> 
                 : item === 'Quizzes' ? 
                 <Image
                 src={assetPath('Quizzes icon.png')}
                 alt='Quizzes Icon'
                 width={15}
                 height={12.19}
                 /> 
                 : <Image
                 src={assetPath('Assignment icon.png')}
                 alt='Assignment icon'
                 width={14.25}
                 height={14.25}
                 />
                 }
              </span>
              {item}
            </div>
          ))}
        </nav>
       <div>
  <div className={styles.frame}>
    <h2 className={styles.setting}>Settings</h2>
     {['Profile', 'Settings', 'Logout'].map((item) => (
            <div  className={styles.frameItems}key={item}>
              <span>
                {item === 'Profile' ? 
                <Image 
                src={assetPath('Profile Icon.png')}
                alt='Profile Icon'
                width={18}
                height={18}
                /> : item === 'Settings' ?
                <Image
                src={assetPath('Settings icon.png')}
                alt='Settings Icon'
                width={18}
                height={18}
                />
                 : item === 'Logout' ? 
                 <Image
                 src={assetPath('Logout icon.png')}
                 alt='Logout Icon'
                 width={15}
                 height={9}
                 />  
                 : null
                 }
              </span>
              {item}
            </div>
          ))}
  </div>
</div>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Navbar */}
        <nav className={styles.navbar}>
         <div>
          <input
          type='text'
          placeholder='Search for courses, skills and videos'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchbar}
          />
         </div>

          {/* <div className={styles.greeting}>
            <p className={styles.welcome}>Good Morning, John Doe</p>
            <p className={styles.date}>24th February 2025, Tuesday</p>
          </div> */}

          <div className={styles.userSection}>
            <div className={styles.notification}>🛎️</div>
            <div className={styles.profile}>
              <Image src="https://i.pravatar.cc/40" alt="John Doe" width={40} height={40} className={styles.avatar} />
              <div>
                <p className={styles.name}>John Doe</p>
                <p className={styles.role}>Student</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className={styles.content}>
          <h2 className={styles.pageTitle}>My Courses</h2>

          <div className={styles.courseGrid}>
            {courses.map((course, i) => (
              <div key={i} className={styles.courseCard}>
                <div className={styles.cardImage}>
                  <Image src={course.image} alt={course.title} fill className={styles.image} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  
                  <div className={styles.progressContainer}>
                    <span className={styles.progressLabel}>Progress</span>
                    <span className={styles.progressValue}>{course.progress}%</span>
                  </div>

                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
                  </div>

                  <button className={styles.continueBtn}>Continue Learning</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}