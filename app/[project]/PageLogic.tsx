'use client';
import styles from './page.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '../projects';

export default function ProjectLogic({ path }: { path: string }) {
  const [currentProject, setCurrentProject] = useState(0);
  const projectListRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleProjectSelect = (path: string) => {
    router.push(`/${path}`);
    setCurrentProject(projects.findIndex((p) => p.path === path));
  };

  useEffect(() => {
    const index = projects.findIndex((p) => p.path === path);
    if (index >= 0) setCurrentProject(index);
  }, [path]);

  useEffect(() => {
    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (projectListRef.current && !isHovered) {
          const list = projectListRef.current;
          if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
            list.scrollTop = 0; // Reset to top
          } else {
            list.scrollTop += 13; // Scroll down by 13px
          }
        }
      }, 1300);
    };

    startScrolling();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isHovered]); // Reacts to hover state

  return (
    <div className={styles.homeContainer}>
      {/* -------- NAV --------  */}
      <nav className={styles.homeNav}>
        <div>
          <p>evan.am</p>
          <p>editor, tokyo</p>
        </div>

        <div
          className={styles.projectList}
          ref={projectListRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, i) => (
            <p
              key={project.title}
              onClick={() => handleProjectSelect(project.path)}
              style={{
                cursor: 'pointer',
                textDecoration: i === currentProject ? 'underline' : 'none',
                fontWeight: i === currentProject ? 'bold' : 'normal',
              }}
            >
              <span className={styles.projectTitle}>{project.title}</span>
            </p>
          ))}
        </div>

        <div>
          <p>
            ig: <a href='https://instagram.com/evan.am_'>@evan.am_</a>
          </p>
          <p>
            me: <a href='mailto:hello@evan.am'>hello@evan.am</a>
          </p>
          <p>
            mgmt: <a href='mailto:naoko@nobodcr.com'>naoko@nobodcr.com</a>
          </p>
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
    </div>
  );
}
