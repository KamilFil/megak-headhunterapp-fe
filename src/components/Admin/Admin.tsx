import React from 'react';
import { AdminForm } from '../AdminForm/AdminForm';
import './Admin.css';
import { NavBar } from '../common/NavBar/NavBar';
import { ImportButton } from '../ImportButton/ImportButton';

export const Admin = () => {
  return (
    <>
      <NavBar />
      <div className='admin-wrap'>
        <AdminForm />
        <ImportButton />
      </div>
    </>
  );
};
