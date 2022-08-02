import React from 'react';
import { NavBar } from './components/common/NavBar/NavBar';
import { Login } from './components/layouts/login/Login';
import { Cv } from './components/Cv/Cv';

export const App = () => {
  return (
    <>
      <NavBar />
      <Cv />
    </>
  );
};
