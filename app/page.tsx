import { redirect } from 'next/navigation';
import { projects } from './projects';

export default function Home() {
  redirect(`/${projects[0].path}`);
}
