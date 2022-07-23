import {LoginForm} from '../../LoginForm/LoginForm';
import './Login.css';
import {Logo} from '../../common/Logo/Logo';

export const Login = () => {
  return (
      <div className='login-wrap'>
          <Logo/>
          <LoginForm/>
      </div>
  );
};
