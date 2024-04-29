import { Badge } from '@/components/ui/badge';
import { FaGraduationCap, FaQuestionCircle, FaUsers } from 'react-icons/fa';
import { Section } from './Section';

export const SoftSkills = () => {
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={'outline'}>SoftSkills</Badge>
      <h2
        className='scroll-m-20 border-b pb-2 text-3xl font-bold'
        style={{
          background: 'linear-gradient(to right, violet, cyan)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Je suis attaché à...
      </h2>
      <div className='flex flex-col items-top md:flex-row gap-4'>
        <div className='flex flex-col items-center md:items-start gap-2 md:w-1/3'>
          <FaUsers size={48} className='animate-logo-spin ' />
          <h3 className='text-xl font-bold'>Travail d&apos;équipe</h3>
          <p>
            Je sais que la collaboration et la communication efficace sont essentielles pour atteindre des objectifs communs. Je suis à l&apos;écoute des idées
            et des opinions des autres et je sais travailler avec les autres pour trouver des solutions créatives aux défis.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2 md:w-1/3'>
          <FaGraduationCap size={48} />
          <h3 className='text-xl font-bold'>Apprendre</h3>
          <p>
            Je suis passionné par l&apos;apprentissage de nouvelles technologies et de nouvelles compétences. J&apos;aime explorer de nouveaux langages de
            programmation, de nouveaux frameworks et de nouvelles bibliothèques pour améliorer mes compétences en développement.
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2 md:w-1/3'>
          <FaQuestionCircle size={48} />
          <h3 className='text-xl font-bold'>Remise en question</h3>
          <p>
            Je suis convaincu que la remise en question est essentielle pour progresser et s&apos;améliorer. Je suis toujours prêt à écouter les commentaires
            constructifs et à réfléchir à la façon dont je peux améliorer mon travail et mes compétences.{' '}
          </p>
        </div>
      </div>
    </Section>
  );
};
