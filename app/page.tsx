'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Baniere } from './_components/Baniere';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Skills } from './_components/Skills';
import { SoftSkills } from './_components/SoftSkills';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';

export default function Home() {
  useEffect(() => {
    // Initialisation de AOS (Animate On Scroll)
    AOS.init({
      duration: 2000, // durée de l'animation en millisecondes
      once: true, // si l'animation doit se produire qu'une seule fois
    });
  }, []);

  return (
    <main>
      {/* header  is now a top-level component */}
      <Header />
      <Spacing size='sm' />
      <div data-aos='zoom-in' id='hero'>
        <Hero />
      </div>
      <Spacing size='sm' />
      <Status />
      <Spacing size='sm' />
      <div data-aos='zoom-in' id='hero'>
        <Skills />
      </div>
      <Spacing size='sm' />
      <div data-aos='zoom-in' id='hero'>
        <SoftSkills />
      </div>
      <Spacing size='sm' />
      <Baniere />
      <Spacing size='sm' />
    </main>
  );
}
