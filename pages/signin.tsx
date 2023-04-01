import { useEffect, useState, MouseEvent } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [signing, setSigning] = useState(false);
  const { data, status } = useSession();
  const router = useRouter();

  const handleGithubLogin = async (e: MouseEvent) => {
    setSigning(true);
    e.preventDefault();
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
      <button onClick={(e) => void handleGithubLogin(e)}>SIGN IN</button>
    </div>
  );
}
