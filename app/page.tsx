'use client';
import styles from './page.module.css';
import { useState } from 'react';

const projects = [
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
            <span className='italic'>evan</span>.am ✨
          </h1>
          <p>
            <span className='normal'>editor __ </span>tokyo
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <p
              key={project.title}
              onClick={() => {
                setCurrentProject(i);
              }}
              className={i === currentProject ? 'italic' : 'bold'}
              style={{
                cursor: 'pointer',
                textDecoration: i === currentProject ? 'underline' : 'none',
                marginBottom: '.5rem',
              }}
            >
              <span className={styles.projectNumber}>{i + 1}. </span>
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
              <span className='normal'>hello</span>@evan.am
            </a>{' '}
            __ <a href='https://instagram.com/evanamezcua'>@evanamezcua</a>
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
