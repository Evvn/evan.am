import Portfolio from './_components/Portfolio';
import { firstProject } from './_lib/projects';

export default function Home() {
  return <Portfolio initialProjectPath={firstProject.path} />;
}
