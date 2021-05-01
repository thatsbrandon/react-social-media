import RegistartionForm from '../forms/RegistartionForm';
import LoginForm from '../forms/LoginForm';

export enum AuthFormType {
  Login,
  Register
}

interface IAuthFormProps {
  type: AuthFormType 
}

const AuthForm = (props: IAuthFormProps) => {
  switch (props.type) {
    case AuthFormType.Register:
      return (
        <RegistartionForm />
      );
    case AuthFormType.Login:
      return (
        <LoginForm />     
      );
  }
};

export default AuthForm;