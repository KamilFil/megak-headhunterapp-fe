import React from 'react';

import {NavBar} from './components/common/NavBar/NavBar';
import {Login} from './components/layouts/login/Login';

export const App = () => {
    return (
        <>
            <NavBar/>
            <Login/>
        </>
    );
};
