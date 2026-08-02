'use client';

import { useProjectListScroll } from '../_hooks/useProjectListScroll';
import { useProjectSelection } from '../_hooks/useProjectSelection';
import { firstProject } from '../_lib/projects';
import { projects } from '../projects';
import ProjectList from './ProjectList';
import styles from './portfolio.module.css';

type PortfolioProps = Readonly<{
  initialProjectPath: string;
}>;

export default function Portfolio({ initialProjectPath }: PortfolioProps) {
  const currentProjectIndex = useProjectSelection(initialProjectPath);
  const {
    projectListRef,
    scrollProjectList,
    setProjectItemRef,
    showNewerPrompt,
    showOlderPrompt,
  } = useProjectListScroll(currentProjectIndex);
  const currentProject = projects[currentProjectIndex] ?? firstProject;

  return (
    <main className={styles.homeContainer}>
      <nav className={styles.homeNav} aria-label="Portfolio">
        <div>
          <p>evan.am</p>
          <p>editor, tokyo</p>
        </div>

        <ProjectList
          currentProjectIndex={currentProjectIndex}
          listRef={projectListRef}
          setProjectItemRef={setProjectItemRef}
          showNewerPrompt={showNewerPrompt}
          showOlderPrompt={showOlderPrompt}
          onScroll={scrollProjectList}
        />

        <div>
          <p>
            ig: <a href="https://instagram.com/evan.am_">@evan.am_</a>
          </p>
          <p>
            me: <a href="mailto:hello@evan.am">hello@evan.am</a>
          </p>
          <p>
            mgmt: <a href="mailto:naoko@nobodcr.com">naoko@nobodcr.com</a>
          </p>
        </div>
      </nav>

      <div className={styles.videoContainer}>
        <iframe
          title={currentProject.title}
          allow="autoplay; fullscreen"
          allowFullScreen
          src={currentProject.src}
          className={styles.iframe}
        />
      </div>
    </main>
  );
}
