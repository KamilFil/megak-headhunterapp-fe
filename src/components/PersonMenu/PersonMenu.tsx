import {Dispatch, SetStateAction} from 'react';
import './PersonMenu.css';

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const PersonMenu = ({setVisible}: Props) => {
    const handleLogout = async () => {
        setVisible(false);
    };

    return (
        <div className='person-menu'>
            <a onClick={handleLogout}>Wyloguj się</a>
            <a onClick={handleLogout}>Wyloguj się</a>
            <a onClick={handleLogout}>Wyloguj się</a>
            <a onClick={handleLogout}>Wyloguj się</a>
        </div>
    );
};
