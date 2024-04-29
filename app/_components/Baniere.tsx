import { Section } from './Section';

export const Baniere = () => {
  return (
    <Section className='flex justify-center items-center w-full'>
      <div className='w-full max-w-2xl'>
        <img src='/dev.png' alt='Baniere' className='transition duration-200 ease-in-out transform hover:scale-110' />
      </div>
    </Section>
  );
};
