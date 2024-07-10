// app/api/users/route.ts

import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Traitez les requêtes POST ici
  res.status(201).json({ message: 'User created' });
}
