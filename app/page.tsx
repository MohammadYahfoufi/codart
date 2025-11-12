import { Contact } from '@/components/main/contact';
import { Encryption } from '@/components/main/encryption';
import { Hero } from '@/components/main/hero';
import { Projects } from '@/components/main/projects';
import { Services } from '@/components/main/services';
import { Skills } from '@/components/main/skills';

export default function Home() {
  return (
    <main className="h-full w-full max-w-full overflow-x-hidden">
      <div className="flex flex-col gap-8 max-w-full">
        <Hero />
        <Skills />
        <Services />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
