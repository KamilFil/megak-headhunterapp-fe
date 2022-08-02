import React from 'react';
import {NavBar} from './components/common/NavBar/NavBar';
import {Login} from './components/layouts/login/Login';
import {Admin} from './components/Admin/Admin';

export const App = () => {
    return (
        <>
            <NavBar/>
            <Admin/>
        </>
    );
};
