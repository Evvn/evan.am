'use client';
import styles from './page.module.css';
import { useState } from 'react';
import localFont from 'next/font/local';

const mondwest = localFont({
  src: [
    {
      path: './fonts/PPMondwest-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mondwest',
});

const neueMontrealMedium = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Medium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal-medium',
});

const neueMontrealBold = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Bold.otf',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal-bold',
});

const neueMontrealItalic = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Italic.otf',
      weight: 'bold',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal-italic',
});

const projects = [
  // {
  //   title: 'Brandy Senki – 27:00 ',
  //   description: '',
  //   src: 'https://streamable.com/e/cuwkxv?autoplay=1&muted=1',
  // },
  // {
  //   title: 'HÄN - BRIDGES',
  //   description: '',
  //   src: 'https://streamable.com/e/zmknxx?autoplay=1&muted=1',
  // },
  {
    title: 'Coming-of-Age Story – Brandy Senki',
    description: '',
    src: 'https://streamable.com/e/z9hevf?autoplay=1&muted=1',
  },
  {
    title: 'HÄN – CHROME',
    description: '',
    src: 'https://streamable.com/e/rwkm35?autoplay=1&muted=1',
  },
  {
    title: 'YUMMY – NENE ft. YOUNG COCO',
    description: '',
    src: 'https://streamable.com/e/v3862l?autoplay=1&muted=1',
  },
  {
    title: 'Do It Like Me – Yurufuwa Gang x Glogang',
    description: '',
    src: 'https://streamable.com/e/bqtzry?autoplay=1&muted=1',
  },
  {
    title: 'Sony – Nuro Mobile Brand Commercial',
    description: '',
    src: 'https://streamable.com/e/mnsvay?autoplay=1&muted=1',
  },
  {
    title: 'Sony – Nuro Mobile Plan Commercial',
    description: '',
    src: 'https://streamable.com/e/nv8z9a?autoplay=1&muted=1',
  },
  {
    title: 'SoftBank – StationAI Teaser',
    description: '',
    src: 'https://streamable.com/e/5aoeup?autoplay=1&muted=1',
  },
  {
    title: 'The Nunchuck Princess',
    description: '',
    src: 'https://streamable.com/e/rzo9y0?autoplay=1&muted=1',
  },
  {
    title: 'Phoebes Angels – adidas Forum',
    description: '',
    src: 'https://streamable.com/e/ez43x5?autoplay=1&muted=1',
  },
  {
    title: 'eye_C magazine x peacebird',
    description: '',
    src: 'https://streamable.com/e/8xlrhl?autoplay=1&muted=1',
  },
];

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className={styles.homeContainer}>
      {/* -------- NAV --------  */}
      <nav className={styles.homeNav}>
        <div>
          <h1>
            <span className={neueMontrealItalic.className}>evan</span>
            .am ✨
          </h1>
          <p>
            <span className={neueMontrealMedium.className}>editor</span> __tokyo
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <p
              key={project.title}
              onClick={() => {
                setCurrentProject(i);
              }}
              className={
                i === currentProject
                  ? neueMontrealItalic.className
                  : neueMontrealMedium.className
              }
              style={{
                cursor: 'pointer',
                textDecoration: i === currentProject ? 'underline' : 'none',
                marginBottom: '.5rem',
              }}
            >
              <span
                className={mondwest.className}
                style={{
                  fontWeight: i === currentProject ? 'bold' : 'inherit',
                }}
              >
                {i + 1}.{' '}
              </span>
              <span className={styles.projectTitle}>{project.title}</span>
            </p>
          ))}
        </div>

        <div>
          {/* <p>
            <a href='tel:07013940013'>☏ 070 1394 0013</a>
          </p> */}
          {/* <p>
            <a href='mailto:hello@evan.am'>✉ hello@evan.am</a>
          </p> */}
          <p>
            <a href='mailto:hello@evan.am'>
              <span className={neueMontrealMedium.className}>hello</span>
              @evan.am
            </a>{' '}
            __<a href='https://instagram.com/evan.am_'>@evan.am_</a>
          </p>
          {/* <p>🜨 Tokyo, Japan</p> */}
        </div>
      </nav>
      {/* -------- NAV --------  */}

      {/* -------- VIDEO --------  */}
      <div className={styles.videoContainer}>
        <iframe
          allow='fullscreen;autoplay'
          src={projects[currentProject].src}
          width='100%'
          className={styles.iframe}
        />
      </div>
      {/* -------- VIDEO --------  */}

      {/* {projects.map((project) => (
        <div key={project.title} style={{ width: '10vw' }}>
          <div className={styles.videoContainer}>
            <iframe
              allow='fullscreen;autoplay'
              height='100%'
              src={project.src}
              width='100%'
              className={styles.iframe}
            />
          </div>
        </div>
      ))} */}
    </div>
  );
}
