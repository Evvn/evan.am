import { projects } from '../projects';
import PageLogic from './PageLogic';

export default function Page({ params }: { params: { project: string } }) {
  return <PageLogic path={params.project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ project: project.path }));
}
