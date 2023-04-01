import { useEffect, useState, MouseEvent } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [signing, setSigning] = useState(false);
  const { data, status } = useSession();
  const router = useRouter();

  const handleGithubLogin = async () => {
    setSigning(true);
    await signIn('github');
    setSigning(false);
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [data, status]);

  if (signing) {
    return <p>Signing...</p>;
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={handleGithubLogin}>SIGN IN</button>
    </div>
  );
}
