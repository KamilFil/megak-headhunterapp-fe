import React, { FormEvent, useEffect, useState } from 'react';
import { LoginInput } from '../LoginInput/LoginInput';
import { Route, Router, useNavigate } from 'react-router-dom';

import { RedButton } from '../common/RedButton/RedButton';
import './LoginForm.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pwd }),
      });
      const data = await res.json();

      if (data.roles === 'hr') {
        navigate('/students');
      } else if (data.roles !== 'hr') {
        navigate('/brak');
      }

      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <></>
      ) : (
        <form>
          <LoginInput type='email' placeholder='E-mail' value={email} setValue={setEmail} />
          <LoginInput type='password' placeholder='Hasło' value={pwd} setValue={setPwd} />
          <a className='forgotten-password'>Zapomniałeś hasła?</a>
          <div className='submit-wrap'>
            <p>
              <span>Nie masz konta?</span> <a>Zarejestruj się</a>
            </p>
            {/* <RedButton name='Zaloguj się' type='submit' handleClick={handleClick} />*/}
            <button type='submit' onClick={handleClick}>
              Zaloguj dsie
            </button>
          </div>
        </form>
      )}
    </>
  );
};
