'use client';
import { Section } from '@/app/_components/Section';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('Envoi en cours...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const { error } = await res.json();
    if (error) {
      setStatus(error);
    } else {
      setStatus('Message envoyé avec succès!');
      form.reset();
    }
  };

  return (
    <Section>
      <Card className='p-6 min-w-96 '>
        <h3 className='text-2xl md:text-3xl font-bold mb-4 text-center'>Me Contacter</h3>
        <p className='text-center  mb-4'>
          Prêt à concrétiser votre projet web ? Demandez un devis personnalisé et laissez-moi transformer vos idées en réalité digitale !
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button type='submit' className='w-24'>
                Envoyer
              </Button>
            </div>
          </form>
        </Form>
        {status && <p className='mt-4 text-center'>{status}</p>}
      </Card>
    </Section>
  );
};

export default ContactForm;
