import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '../LoginInput/LoginInput';
import './LoginForm.css';

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, pwd }),
      });
      const data = await res.json();
      if (data.roles === 'student') {
        navigate('/coursant');
      } else if (data.roles === 'hr') {
        navigate('/students');
      } else if (data.roles === 'admin') {
        navigate('/admin');
      } else {
        navigate('/login');
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form>
        <LoginInput type='email' placeholder='E-mail' value={email} setValue={setEmail} />
        <LoginInput type='password' placeholder='Hasło' value={pwd} setValue={setPwd} />
        <button type='submit' onClick={handleLogin}>
          Zaloguj się
        </button>
        <div className='submit-wrap'>
          <a className='forgotten-password'>Zapomniałeś hasła?</a>
          <p>
            <span>Nie masz konta?</span> <a>Zarejestruj się</a>
          </p>
          {/* <RedButton name='Zaloguj się' type='submit' handleClick={handleClick} />*/}

        </div>
      </form>
    </>
  );
};
