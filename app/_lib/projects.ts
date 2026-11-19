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

const GUMLET_WORKSPACE_ID = '6afe8591c7baea8324556de9';

export function getProjectEmbedUrl(project: Project): string {
  const { assetId } = project.video;
  return `https://play.gumlet.io/embed/${assetId}?autoplay=true`;
}

export function getProjectThumbnail(project: Project): string | undefined {
  const { assetId } = project.video;
  return `https://video.gumlet.io/${GUMLET_WORKSPACE_ID}/${assetId}/thumbnail-1-0.png?width=960&height=720&mode=crop&format=auto`;
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
