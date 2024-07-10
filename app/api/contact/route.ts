import transporter from '@/lib/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
