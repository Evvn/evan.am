'use client';
import styles from './page.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '../projects';

export default function ProjectLogic({ path }: { path: string }) {
  const [currentProject, setCurrentProject] = useState(0);
  const router = useRouter();

  const handleProjectSelect = (path: string) => {
    router.push(`/${path}`);
    setCurrentProject(projects.findIndex((p) => p.path === path));
  };

  useEffect(() => {
    const index = projects.findIndex((p) => p.path === path);
    if (index >= 0) setCurrentProject(index);
  }, [path]);

  return (
    <div className={styles.homeContainer}>
      {/* -------- NAV --------  */}
      <nav className={styles.homeNav}>
        <div>
          <p>evan.am</p>
          <p>editor, tokyo</p>
        </div>

        <div className={styles.projectList}>
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
