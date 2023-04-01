import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode | string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-sky-400 rounded-lg text-white hover:bg-sky-500 ease-in-out duration-300"
    >
      {children}
    </button>
  );
};
