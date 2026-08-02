import { projects, type Project } from '../projects';

export const firstProject = projects[0];
export const projectPaths = projects.map(({ path }) => path);

const projectsByPath = new Map<string, Project>(
  projects.map((project) => [project.path, project]),
);

export function getProject(path: string): Project | undefined {
  return projectsByPath.get(path);
}

export function getRecentProjects(
  excludedPath: string,
  limit = 2,
): readonly Project[] {
  return projects
    .filter((project) => project.path !== excludedPath)
    .slice(0, limit);
}

export function getProjectThumbnail(src: string): string | undefined {
  try {
    const url = new URL(src);
    const videoId = url.pathname.split('/').filter(Boolean).at(-1);

    if (!url.hostname.endsWith('streamable.com') || !videoId) {
      return undefined;
    }

    return `https://cdn-cf-east.streamable.com/image/${videoId}.jpg`;
  } catch {
    return undefined;
  }
}

export function getProjectIndex(path: string): number {
  return projects.findIndex((project) => project.path === path);
}

export function getProjectPathname(path: string): string {
  return `/${path}`;
}

export function getProjectPathFromPathname(pathname: string): string {
  return pathname.split('/').filter(Boolean).at(-1) ?? '';
}
