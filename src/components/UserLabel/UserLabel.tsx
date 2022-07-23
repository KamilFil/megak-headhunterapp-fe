import React, {useEffect, useState} from 'react';
import {FilledArrow} from '../common/FilledArrow/FilledArrow';
import {UserMenu} from '../UserMenu/UserMenu';
import womanImage from '../../img/woman-svgrepo-com.svg';
import './UserLabel.css';

export const UserLabel = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);

    useEffect(() => {
        const userMenu: HTMLDivElement | null = document.querySelector('.user-menu');
        const filledArrow: HTMLDivElement | null = document.querySelector('.filled-arrow');
        const userLabel: HTMLDivElement | null = document.querySelector('.user-label--wrap');
        userMenu?.classList.toggle('user-menu--visible');
        filledArrow?.classList.toggle('filled-arrow--rotate');
        userLabel?.classList.toggle('user-label--wrap--visible');
    }, [visibleMenu]);

    return (
        <div className='user-label' tabIndex={0} onBlur={() => setVisibleMenu(false)}>
            <div
                className='user-label--wrap'
                onClick={() => {
                    setVisibleMenu(!visibleMenu);
                }}>
                <img src={womanImage} alt='Zdjęcie użytkownika'/>
                <p>Anna Kowalska</p>
                <FilledArrow/>
            </div>
            <UserMenu setVisible={setVisibleMenu}/>
        </div>
    );
};
