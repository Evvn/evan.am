'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';

export function useProjectListScroll(initialProjectIndex: number) {
  const projectListRef = useRef<HTMLDivElement>(null);
  const projectItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const hasAlignedInitialProjectRef = useRef(false);
  const [showNewerPrompt, setShowNewerPrompt] = useState(false);
  const [showOlderPrompt, setShowOlderPrompt] = useState(false);

  const updateScrollState = useCallback(() => {
    const projectList = projectListRef.current;

    if (!projectList) {
      return;
    }

    const maxScrollTop = projectList.scrollHeight - projectList.clientHeight;
    const hasOverflow = maxScrollTop > 0;
    const isAtTop = projectList.scrollTop <= 0;
    const isAtBottom =
      projectList.scrollTop + projectList.clientHeight >=
      projectList.scrollHeight - 1;

    setShowNewerPrompt(hasOverflow && !isAtTop);
    setShowOlderPrompt(hasOverflow && !isAtBottom);
  }, []);

  const scrollProjectList = useCallback((direction: ScrollDirection) => {
    projectListRef.current?.scrollBy({
      top: direction === 'down' ? 100 : -100,
      behavior: 'smooth',
    });
  }, []);

  const setProjectItemRef = useCallback(
    (index: number, element: HTMLAnchorElement | null) => {
      projectItemRefs.current[index] = element;
    },
    [],
  );

  useEffect(() => {
    const projectList = projectListRef.current;
    const projectItem = projectItemRefs.current[initialProjectIndex];

    if (
      !projectList ||
      !projectItem ||
      hasAlignedInitialProjectRef.current
    ) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const targetScrollTop =
        projectItem.offsetTop +
        projectItem.offsetHeight -
        projectList.clientHeight;

      projectList.scrollTop = Math.max(0, targetScrollTop);
      hasAlignedInitialProjectRef.current = true;
      updateScrollState();
    });

    return () => cancelAnimationFrame(frame);
  }, [initialProjectIndex, updateScrollState]);

  useEffect(() => {
    const projectList = projectListRef.current;

    if (!projectList) {
      return;
    }

    updateScrollState();
    projectList.addEventListener('scroll', updateScrollState, {
      passive: true,
    });
    window.addEventListener('resize', updateScrollState);

    return () => {
      projectList.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  return {
    projectListRef,
    scrollProjectList,
    setProjectItemRef,
    showNewerPrompt,
    showOlderPrompt,
  };
}
