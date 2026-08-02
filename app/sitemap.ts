import type { MetadataRoute } from 'next';
import { projects } from './projects';
import { site } from './_lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    ...projects.map((project) => ({
      url: `${site.url}/${project.path}`,
    })),
  ];
}
