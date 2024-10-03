// /pages/api/guest.ts

import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let guestId = req.cookies['guest_user_id'];

  if (!guestId) {
    guestId = uuidv4();
    res.setHeader('Set-Cookie', `guest_user_id=${guestId}; Path=/; HttpOnly`);
  }

  let guestUser = await prisma.user.findUnique({ where: { id: guestId } });

  if (!guestUser) {
    guestUser = await prisma.user.create({
      data: {
        id: guestId,
        isGuest: true, // Use this field to differentiate guest users from regular users
      },
    });
  }

  res.status(200).json({ guestId });
}
