import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Portfolio from '../_components/Portfolio';
import {
  getProject,
  getProjectEmbedUrl,
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
  const thumbnail = getProjectThumbnail(project);
  const socialImage = thumbnail
    ? {
        url: thumbnail,
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

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `PT${minutes}M${remainingSeconds}S`;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectPath } = await params;
  const project = getProject(projectPath);

  if (!project) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: project.title,
    description: getProjectDescription(
      project.title,
      getRecentProjects(project.path).map((recent) => recent.title),
    ),
    thumbnailUrl: getProjectThumbnail(project),
    embedUrl: getProjectEmbedUrl(project),
    uploadDate: '2026-11-19',
    duration: formatDuration(project.video.duration),
    author: {
      '@id': `${site.url}/#evan`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <Portfolio initialProjectPath={project.path} />
    </>
  );
}

export function generateStaticParams() {
  return projectPaths.map((project) => ({ project }));
}
