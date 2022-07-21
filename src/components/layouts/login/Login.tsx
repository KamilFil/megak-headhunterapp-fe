import { LoginForm } from '../../LoginForm/LoginForm';
import './Login.css';
import logo from '../../../img/logo.webp';

export const Login = () => {
  return (
    <div className='login-wrap'>
      <img src={logo} alt='Logo bootcampu MegaK' />
      <LoginForm />
    </div>
  );
};
