import prisma from '@/prisma';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: 'clfy9hjvs0002v8p0titbt756',
      },
    });
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default handler;
