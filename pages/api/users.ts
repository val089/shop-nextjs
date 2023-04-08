import prisma from '@/prisma';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      // select: {
      //   id: true,
      //   name: true,
      // },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
