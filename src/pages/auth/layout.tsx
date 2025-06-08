import type { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Формы</h1>
      {children}
    </div>
  );
};
