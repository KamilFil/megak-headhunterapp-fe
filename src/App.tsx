import React, { Fragment } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Students } from './components/layouts/Students/Students';
import { Login } from './components/layouts/Login/Login';
import { Cv } from './components/Cv/Cv';
import { AuthContextProvider } from './auth/AuthContext';
import { CvStudent } from './components/layouts/CvStudent/CvStudent';

export const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/students' element={<Students />} />
        <Route path='/coursant' element={<CvStudent />} />
        {/* <Route path='/students' element={<Students />} />*/}
        <Route path='/cv/:id' element={<Cv />} />
        <Route path='/' element={<Navigate to='/students' />} />
      </Routes>
    </AuthContextProvider>
  );
};
