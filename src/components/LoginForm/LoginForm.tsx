import React, {FormEvent, useState} from 'react';
import {LoginInput} from '../LoginInput/LoginInput';
import {RedButton} from '../common/RedButton/RedButton';
import './LoginForm.css';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleLogin}>
            <LoginInput type='email' placeholder='E-mail' value={email} setValue={setEmail}/>
            <LoginInput type='password' placeholder='Hasło' value={password} setValue={setPassword}/>
            <a className='forgotten-password'>Zapomniałeś hasła?</a>
            <div className='submit-wrap'>
                <p>
                    <span>Nie masz konta?</span> <a>Zarejestruj się</a>
                </p>
        <RedButton name='Zaloguj się' type='submit' />
      </div>
    </form>
  );
};
