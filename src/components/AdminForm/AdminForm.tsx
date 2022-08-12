import React, { SyntheticEvent, useEffect, useState } from 'react';
import './AdminForm.css';
import { RedButton } from '../common/RedButton/RedButton';

export const AdminForm = () => {
  const [hrUser, setHrUser] = useState({
    email: '',
    fullName: '',
    company: '',
    maxReservedStudents: '',
  });

  console.log(hrUser);

  const handleSubmit = () => {
    console.log('Click!');
  };

  return (
    <div className='admin-form'>
      <h1>Formularz dodawania HR</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={hrUser.email}
          onChange={(e) => setHrUser({ ...hrUser, email: e.target.value })}
        />
        <input
          type='text'
          name='fullName'
          placeholder='Imię i Nazwisko'
          value={hrUser.fullName}
          onChange={(e) => setHrUser({ ...hrUser, fullName: e.target.value })}
        />
        <input
          type='text'
          name='company'
          placeholder='Nazwa Firmy'
          value={hrUser.company}
          onChange={(e) => setHrUser({ ...hrUser, company: e.target.value })}
        />
        <input
          type='number'
          name='maxReservedStudents'
          placeholder='Maksymalna liczba osób'
          value={hrUser.maxReservedStudents}
          onChange={(e) => setHrUser({ ...hrUser, maxReservedStudents: e.target.value })}
        />
        <div className='submit-wrap'>
          <RedButton name='Wyślij' type='submit' handleClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};
