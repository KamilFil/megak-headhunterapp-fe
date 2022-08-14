import React from 'react';
import { LoginForm } from '../../LoginForm/LoginForm';
import { Logo } from '../../common/Logo/Logo';
import './Login.css';

export const Login = () => {
  return (
    <div className='login-wrap'>
      <Logo />
      <LoginForm />
    </div>
  );
};
