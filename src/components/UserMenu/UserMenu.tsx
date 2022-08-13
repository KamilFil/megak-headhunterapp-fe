import React, { Dispatch, SetStateAction, useContext } from 'react';
import './UserMenu.css';
import { AuthContext } from '../../auth/AuthContext';

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const UserMenu = ({ setVisible }: Props) => {
  const user = useContext(AuthContext);
  const handleLogout = async () => {
    setVisible(false);
  };

  return (
    <div className='user-menu'>
      {user?.auth?.roles ? <p>{user.auth.roles}</p> : <p>Brak</p>}
      <a>Edytuj profil</a>
      <a onClick={handleLogout}>Wyloguj się</a>
    </div>
  );
};
