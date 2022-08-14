import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import './UserMenu.css';
import { AuthContext } from '../../auth/AuthContext';
import { getStudentUser } from '../../api/api';
import { UserEntity } from 'types';

interface Props {
  // data: UserEntity | null;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const UserMenu = ({ setVisible }: Props) => {
  const handleLogout = async () => {
    setVisible(false);
  };

  // if (!props.data) {
  //   return null;
  // }

  return (
    <div className='user-menu'>
      {/* {props.data.roles ? <p>{props.data.roles}</p> : <p>Brak</p>}*/}
      <a>Edytuj profil</a>
      <a onClick={handleLogout}>Wyloguj się</a>
    </div>
  );
};
