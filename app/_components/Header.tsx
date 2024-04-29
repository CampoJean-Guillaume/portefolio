import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ModeToggle } from './DarkTheme';
import { Section } from './Section';

export const Header = () => {
  return (
    <header className='sticky top-0 py-4 bg-background z-50'>
      <Section className='flex items-center gap-2'>
        <h1
          className='text-2xl font-bold text-primary uppercase'
          style={{
            background: 'linear-gradient(to right, violet, cyan)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          jeanguillaume-campo.fr
        </h1>
        <div className='flex-1' />
        <ul className='flex items-center gap-2'>
          <Link href='https://github.com/CampoJean-Guillaume' target='_blank' className={cn(buttonVariants({ variant: 'outline' }), 'p-1 rounded')}>
            <FaGithub size={24} />
          </Link>
          <Link href='https://www.linkedin.com/in/jeanguillaume-campo' target='_blank' className={cn(buttonVariants({ variant: 'outline' }), 'p-1 rounded')}>
            <FaLinkedin size={24} />
          </Link>
          <ModeToggle />
        </ul>
      </Section>
    </header>
  );
};
