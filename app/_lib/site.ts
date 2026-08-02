export const site = {
  name: 'evan.am',
  personName: 'Evan',
  title: 'evan.am',
  description:
    'evan, offline editor in tokyo. working worldwide.\ncommercials, music videos, and films.',
  url: 'https://evan.am',
  locale: 'en_US',
  email: 'hello@evan.am',
  instagram: 'https://www.instagram.com/evan.am_/',
  socialImage: {
    url: '/social-preview.png',
    width: 1200,
    height: 630,
    alt: 'evan.am – work by evan, offline editor. tokyo, worldwide',
  },
} as const;

export function getProjectDescription(
  projectTitle: string,
  recentProjectTitles: readonly string[],
) {
  const recentProjects = recentProjectTitles.join('; ');

  return `${projectTitle} – evan.am, editor\nwork: ${recentProjects}`;
}
