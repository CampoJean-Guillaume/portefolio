import { Badge } from '@/components/ui/badge';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Section } from './Section';

export const Skills = () => {
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={'outline'}>Skills</Badge>
      <h2
        className='scroll-m-20 border-b pb-2 text-3xl font-bold'
        style={{
          background: 'linear-gradient(to right, violet, cyan)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        J&apos;aime travaillé avec...
      </h2>
      <div className='flex flex-col items-top md:flex-row gap-4'>
        <div className='flex flex-col items-center md:items-start gap-2  md:w-1/3 '>
          <FaReact size={48} className='animate-spin-slow ' />
          <h3 className='text-xl font-bold'>React</h3>
          <p className='text-left'>
            J&apos;adore utilisé React et Next.js pour le frontend. J&apos;apprécie la flexibilité et la puissance de React pour créer des interfaces
            utilisateur dynamiques et réactives. J&apos;utilise également des bibliothèques telles que Zustand pour gérer l&apos;état global de mes
            applications.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2 md:w-1/3 '>
          <SiTailwindcss size={48} />
          <h3 className='text-xl font-bold'>Tailwind</h3>
          <p className='text-left'>
            J&apos;utilise tailwind et shadcn pour un style moderne et design. Tailwind me permet de créer des designs modernes et personnalisés en utilisant
            des classes utilitaires prédéfinies. J&apos;aime également utiliser des bibliothèques telles que Shadcn pour étendre les fonctionnalités de Tailwind
            et accélérer mon processus de développement.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2  md:w-1/3 '>
          <FaNodeJs size={48} />
          <h3 className='text-xl font-bold'>Node.Js</h3>
          <p className='text-left'>
            J&apos;utilise Node.js pour créer des applications backend robustes et évolutives. J&apos;apprécie la facilité avec laquelle je peux utiliser
            JavaScript côté serveur et intégrer des bases de données telles que PostgreSQL pour stocker et récupérer des données.{' '}
          </p>
        </div>
      </div>
    </Section>
  );
};
