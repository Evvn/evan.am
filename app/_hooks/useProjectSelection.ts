'use client';

import { usePathname } from 'next/navigation';
import {
  getProjectIndex,
  getProjectPathFromPathname,
} from '../_lib/projects';

export function useProjectSelection(initialProjectPath: string) {
  const pathname = usePathname();
  const pathnameProjectIndex = getProjectIndex(
    getProjectPathFromPathname(pathname),
  );
  const currentProjectIndex =
    pathnameProjectIndex >= 0
      ? pathnameProjectIndex
      : getProjectIndex(initialProjectPath);

  return currentProjectIndex;
}
