import React from 'react';
import {Logo} from '../Logo/Logo';
import {UserLabel} from '../../UserLabel/UserLabel';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='nav-bar-wrap'>
            <div className='nav-bar'>
                <Logo width='70px' margin='auto 0'/>
                <UserLabel/>
            </div>
        </div>
    );
};
