'use client';
import styles from './page.module.css';
import { useEffect, useRef, useState } from 'react';
import { projects } from '../projects';

export default function ProjectLogic({ path }: { path: string }) {
  const [currentProject, setCurrentProject] = useState(0);
  const [showScrollPromptAtTop, setShowScrollPromptAtTop] = useState(false);
  const [showScrollPromptAtBottom, setShowScrollPromptAtBottom] =
    useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectListRef = useRef<HTMLDivElement | null>(null);
  const projectItemRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasAlignedInitialProjectRef = useRef(false);

  const handleProjectSelect = (path: string) => {
    const index = projects.findIndex((p) => p.path === path);
    if (index < 0) return;

    setCurrentProject(index);
    window.history.pushState(null, '', `/${path}`);
  };

  const updateScrollPrompt = () => {
    const el = projectListRef.current;
    if (!el) return;

    const maxScrollTop = el.scrollHeight - el.clientHeight;
    const hasOverflow = maxScrollTop > 0;
    const isAtTop = el.scrollTop <= 0;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    const progress = hasOverflow ? el.scrollTop / maxScrollTop : 0;

    setShowScrollPromptAtTop(hasOverflow && !isAtTop);
    setShowScrollPromptAtBottom(hasOverflow && !isAtBottom);
    setScrollProgress(progress);
  };

  const scrollProjectList = (direction: 'up' | 'down') => {
    const el = projectListRef.current;
    if (!el) return;

    el.scrollBy({
      top: direction === 'down' ? 100 : -100,
      behavior: 'smooth',
    });
  };

  const scrollProjectIntoView = (index: number) => {
    const listEl = projectListRef.current;
    const itemEl = projectItemRefs.current[index];
    if (!listEl || !itemEl) return;

    const targetScrollTop =
      itemEl.offsetTop + itemEl.offsetHeight - listEl.clientHeight;

    listEl.scrollTop = Math.max(0, targetScrollTop);
  };

  useEffect(() => {
    const index = projects.findIndex((p) => p.path === path);
    if (index < 0) return;

    setCurrentProject(index);

    const frame = requestAnimationFrame(() => {
      if (!hasAlignedInitialProjectRef.current) {
        scrollProjectIntoView(index);
        hasAlignedInitialProjectRef.current = true;
      }

      updateScrollPrompt();
    });

    return () => cancelAnimationFrame(frame);
  }, [path]);

  useEffect(() => {
    updateScrollPrompt();

    const el = projectListRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollPrompt);
    window.addEventListener('resize', updateScrollPrompt);

    return () => {
      el.removeEventListener('scroll', updateScrollPrompt);
      window.removeEventListener('resize', updateScrollPrompt);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\//, '');
      const index = projects.findIndex((p) => p.path === currentPath);
      if (index < 0) return;

      setCurrentProject(index);
      updateScrollPrompt();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* -------- NAV --------  */}
      <nav className={styles.homeNav}>
        <div>
          <p>evan.am</p>
          <p>editor, tokyo</p>
        </div>

        <div className={styles.projectListContainer}>
          {showScrollPromptAtTop && (
            <button
              type='button'
              className={styles.projectScrollPromptTop}
              onClick={() => scrollProjectList('up')}
            >
              [ newer ]
            </button>
          )}

          <div ref={projectListRef} className={styles.projectList}>
            {projects.map((project, i) => (
              <p
                key={project.title}
                ref={(el) => {
                  projectItemRefs.current[i] = el;
                }}
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

          {showScrollPromptAtBottom && (
            <button
              type='button'
              className={styles.projectScrollPromptBottom}
              onClick={() => scrollProjectList('down')}
            >
              [ older ]
            </button>
          )}

          <p
            className={styles.mobileScrollPrompt}
            style={
              {
                '--scroll-progress': scrollProgress,
              } as React.CSSProperties
            }
          >
            [ scroll ]
          </p>
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
