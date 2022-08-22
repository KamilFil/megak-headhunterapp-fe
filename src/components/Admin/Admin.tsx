import React from 'react';
import { AdminForm } from '../AdminForm/AdminForm';
import './Admin.css';
import { NavBar } from '../common/NavBar/NavBar';
import { ImportButton } from '../ImportButton/ImportButton';
import { UserEntity } from 'types';

interface Props {
  data: UserEntity | null;
}

export const Admin = (props: Props) => {
  return (
    <>
      <NavBar data={props.data} />
      <div className='admin-wrap'>
        <AdminForm />
      </div>
    </>
  );
};
