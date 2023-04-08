import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';

const createUser = async () => {
  const response = await fetch('/api/createUser');
  console.log(response);
};

const updateUser = async () => {
  const response = await fetch('/api/updateUser');
  console.log(response);
};

export default function Home() {
  const [signing, setSigning] = useState(false);

  const { status, data } = useSession();
  const router = useRouter();

  // if (status === 'unauthenticated') {
  //   router.push('/signin');
  // }

  const handleGithubLogin = async () => {
    setSigning(true);
    await signIn('github');
    setSigning(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-full border-b-slate-700 border-1">
        <div className="h-20 max-w-screen-xl px-5 mx-auto border-b-slate-200 border-b flex justify-between items-center">
          <h1 className="font-bold text-2xl">SHOP</h1>
          <div>
            {status === 'unauthenticated' && <Button onClick={handleGithubLogin}>Sign In</Button>}
            {status === 'authenticated' && <Button onClick={signOut}>Logout</Button>}
          </div>
        </div>
      </header>
      <main>
        <Button onClick={() => void createUser()}>CREATE USER</Button>
        <Button onClick={() => void updateUser()}>UPDATE USER</Button>
      </main>
    </>
  );
}
