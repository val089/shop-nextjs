import { NextApiHandler } from 'next';
import prisma from '@/prisma';

const handler: NextApiHandler = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Jan',
        email: 'jankowalski@gmail.com',
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
