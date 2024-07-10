/* eslint-disable @next/next/no-img-element */

import { Card } from '@/components/ui/card';
import { Section } from './Section';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const projects = [
  {
    title: 'BeginStack',
    description: 'BoilerPlate pour démarrer un projet FullStack en quelques minutes. Il est basé sur Next.js, Prisma, TailwindCSS, stripe, nextAuth.',
    link: 'https://www.beginstack.dev/',
    image: '/dev.webp',
  },
  {
    title: 'Les Pieds bots',
    description: "Site vitrine pour l'association Les Pieds Bots. Le site est responsive et accessible. Il a été réalisé avec Next.js et TailwindCSS.",
    link: 'https://www.lespiedsbots.org/',
    image: '/logo.jpg',
  },
];

export const Status = () => {
  return (
    <Section className='flex flex-col md:flex-row gap-2 w-full'>
      <div className='flex flex-col flex-grow md:flex-[2] '>
        <Card className='flex flex-col p-4 gap-2 h-full '>
          <p>Mes Projets</p>
          {projects.map((projet) => (
            <CardsTeamMembers key={projet.title} projet={projet} />
          ))}
        </Card>
      </div>

      <div className='flex flex-col flex-grow md:flex-1 gap-2'>
        <Card className='flex flex-col p-4 h-full gap-2'>
          <p>Formation</p>
          <div className='flex items-center space-x-4 py-2'>
            <Avatar className='h-6 w-6'>
              <AvatarImage src='/oclok.png' alt='o-caritatif' />
              <AvatarFallback>OC</AvatarFallback>
            </Avatar>
            <div className='space-y-1'>
              <p className='text-sm font-medium leading-none'>O-Clock</p>
              <p className='text-sm text-muted-foreground'>Formation FullStack JS Spécialité React</p>
            </div>
          </div>
          <div className='flex items-center space-x-4 py-2'>
            <Avatar className='h-6 w-6'>
              <AvatarImage src='/fromscratch.png' alt='from scratch' />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div className='space-y-1'>
              <p className='text-sm font-medium leading-none'>From Scratch</p>
              <p className='text-sm text-muted-foreground'>Parcours Complet : Mastering Front-End</p>
            </div>
          </div>
        </Card>
        {/* <Card className='flex flex-col p-4 h-full gap-2'>
          <p>Me Contacter</p>
          <ul className='flex justify-end gap-2 py-2'>
            <Link href='tel:+33610370967' className={cn(buttonVariants({ variant: 'outline' }), 'p-1 rounded')} aria-label='Call me'>
              <FaPhoneAlt size={20} />
            </Link>
            <Link href='mailto:jeanguillaume.campo@gmail.com' className={cn(buttonVariants({ variant: 'outline' }), 'p-1 rounded')} aria-label='Email me'>
              <FaEnvelope size={20} />
            </Link>
          </ul>
        </Card> */}
      </div>
    </Section>
  );
};

const CardsTeamMembers = ({ projet }: { projet: { title: string; description: string; link: string; image: string } }) => {
  return (
    <div className='flex items-center justify-between py-2 rounded-xl hover:bg-accent '>
      <div className='flex items-center space-x-4'>
        <Avatar className='h-10 w-10'>
          <AvatarImage src={projet.image} alt='o-caritatif' />
          <AvatarFallback>OC</AvatarFallback>
        </Avatar>
        <div>
          <p className='text-sm font-medium leading-none'>{projet.title}</p>
          <Link href={projet.link} target='_blank'>
            <p className='text-sm text-muted-foreground'>{projet.description}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
