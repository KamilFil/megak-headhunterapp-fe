import React, { useState } from 'react';
import './AdminForm.css';
import { createHrByAdmin } from '../../api/api';
import {ImportButton} from '../ImportButton/ImportButton';

export const AdminForm = () => {
  const [hrUser, setHrUser] = useState({
    email: '',
    fullName: '',
    company: '',
    maxReservedStudents: 0,
  });

  console.log(hrUser);

  const handleSubmit = () => {
    try {
      createHrByAdmin(hrUser);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div className='admin-form'>
      <label className='admin-form--label'>Formularz dodawania HR</label>
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
          onChange={(e) => setHrUser({ ...hrUser, maxReservedStudents: Number(e.target.value) })}
        />
        <input type='submit' className='admin-form--submit' value='Wyślij' />
      </form>
      <ImportButton/>
    </div>
  );
};
