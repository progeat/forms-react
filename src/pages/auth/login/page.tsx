import { useState, type FC } from 'react';
import { AuthLayout } from '../layout';
import { Signin } from '../../../modules/auth/components/sign-in';
import { Signup } from '../../../modules/auth/components/sign-up';

type Sex = 'male' | 'female';

type AuthFormValues = {
  name?: string;
  login?: string;
  email: string;
  sex?: Sex;
  password: string;
};

export const LoginPage: FC = () => {
  const [linkFlag, setLinkFlag] = useState<boolean>(true);

  const onSubmit = (values: AuthFormValues): void => {
    console.log(values);
  };

  const onLink = (): void => {
    setLinkFlag((prev) => !prev);
  };

  return (
    <AuthLayout>
      {linkFlag ? (
        <Signin onSubmit={onSubmit} onLink={onLink} />
      ) : (
        <Signup onSubmit={onSubmit} onLink={onLink} />
      )}
    </AuthLayout>
  );
};
