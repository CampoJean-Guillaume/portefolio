/* eslint-disable @next/next/no-img-element */
import { Section } from './Section';

const data = {
  description: `Je suis développeur web de formation fullstack en recherche de challenge. Je maîtrise Javascript, Node.js, React et Next.js. Je suis passionné par le développement web et je suis toujours à la recherche de nouveaux projets pour lesquels je pourrais apporter mon expertise.`,
};

export const Hero = () => {
  return (
    <Section className='flex  max-md:flex-col-reverse gap-2 items-center md:items-start '>
      <div className='flex flex-col  flex-[2] gap-2'>
        <h2 className='font-caption font-bold text-3xl md:text-4xl text-primary'>Campo Jean-Guillaume</h2>
        <h3 className='text-2xl md:text-3xl font-caption '>Développeur Web </h3>
        <p className=' text-justify'>{data.description}</p>
      </div>
      <div className='flex flex-col flex-1 items-center'>
        <img src='logocampo.png' alt='campo logo' className='w-48 md:w-96h-auto  rounded-full mb-8 md:mb-0 ' />
      </div>
    </Section>
  );
};
