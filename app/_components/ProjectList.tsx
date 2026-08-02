import Link from 'next/link';
import type { Ref } from 'react';
import { getProjectPathname } from '../_lib/projects';
import { projects } from '../projects';
import styles from './portfolio.module.css';

type ProjectListProps = Readonly<{
  currentProjectIndex: number;
  listRef: Ref<HTMLDivElement>;
  setProjectItemRef: (
    index: number,
    element: HTMLAnchorElement | null,
  ) => void;
  showNewerPrompt: boolean;
  showOlderPrompt: boolean;
  onScroll: (direction: 'up' | 'down') => void;
}>;

export default function ProjectList({
  currentProjectIndex,
  listRef,
  setProjectItemRef,
  showNewerPrompt,
  showOlderPrompt,
  onScroll,
}: ProjectListProps) {
  return (
    <div className={styles.projectListContainer}>
      {showNewerPrompt && (
        <button
          type="button"
          className={styles.projectScrollPromptTop}
          onClick={() => onScroll('up')}
        >
          [ newer ]
        </button>
      )}

      <div ref={listRef} className={styles.projectList}>
        {projects.map((project, index) => {
          const isCurrentProject = index === currentProjectIndex;

          return (
            <Link
              key={project.path}
              ref={(element) => setProjectItemRef(index, element)}
              href={getProjectPathname(project.path)}
              prefetch={false}
              scroll={false}
              className={`${styles.projectButton} ${
                isCurrentProject ? styles.currentProject : ''
              }`}
              aria-current={isCurrentProject ? 'page' : undefined}
            >
              {project.title}
            </Link>
          );
        })}
      </div>

      {showOlderPrompt && (
        <button
          type="button"
          className={styles.projectScrollPromptBottom}
          onClick={() => onScroll('down')}
        >
          [ older ]
        </button>
      )}
    </div>
  );
}
