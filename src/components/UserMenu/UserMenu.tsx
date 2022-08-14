import React, { Dispatch, SetStateAction } from 'react';
import './UserMenu.css';
import { authLogut, setUserStatusToAvailable } from '../../api/api';
import { useNavigate } from 'react-router-dom';

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const UserMenu = ({ setVisible }: Props) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authLogut();
    navigate('/login');
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
