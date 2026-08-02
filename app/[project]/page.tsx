import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Portfolio from '../_components/Portfolio';
import {
  getProject,
  getProjectThumbnail,
  getRecentProjects,
  projectPaths,
} from '../_lib/projects';
import { getProjectDescription, site } from '../_lib/site';

type ProjectPageProps = Readonly<{
  params: Promise<{ project: string }>;
}>;

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project: projectPath } = await params;
  const project = getProject(projectPath);

  if (!project) {
    return {};
  }

  const recentProjectTitles = getRecentProjects(project.path).map(
    (recentProject) => recentProject.title,
  );
  const description = getProjectDescription(project.title, recentProjectTitles);
  const title = `${site.name} – ${project.title}`;
  const pathname = `/${project.path}`;
  const thumbnail = getProjectThumbnail(project.src);
  const socialImage = thumbnail
    ? {
        url: thumbnail,
        width: 960,
        height: 720,
        alt: site.socialImage.alt,
      }
    : site.socialImage;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: 'website',
      locale: site.locale,
      url: pathname,
      siteName: site.name,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectPath } = await params;
  const project = getProject(projectPath);

  if (!project) {
    notFound();
  }

  return <Portfolio initialProjectPath={project.path} />;
}

export function generateStaticParams() {
  return projectPaths.map((project) => ({ project }));
}
