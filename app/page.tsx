import { Baniere } from './_components/Baniere';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Skills } from './_components/Skills';
import { SoftSkills } from './_components/SoftSkills';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';

export default function Home() {
  return (
    <main>
      {/* header  is now a top-level component */}
      <Header />
      <Spacing size='sm' />
      <Hero />
      <Spacing size='sm' />
      <Status />
      <Spacing size='sm' />
      <Skills />
      <Spacing size='sm' />
      <SoftSkills />
      <Spacing size='sm' />
      <Baniere />
      <Spacing size='sm' />
    </main>
  );
}
