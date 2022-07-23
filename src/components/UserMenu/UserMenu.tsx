import React, {Dispatch, SetStateAction} from 'react';
import './UserMenu.css';

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const UserMenu = ({setVisible}: Props) => {
    const handleLogout = async () => {
        setVisible(false);
    };

    return (
        <div className='user-menu'>
            <a>Edytuj profil</a>
            <a onClick={handleLogout}>Wyloguj się</a>
        </div>
    );
};
