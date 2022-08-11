import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Students } from './components/layouts/Students/Students';
import { Login } from './components/layouts/Login/Login';
import { Cv } from './components/layouts/Cv/Cv';

export const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/students' element={<Students />} />
      <Route path='/cv/:id' element={<Cv />} />
      <Route path='/' element={<Navigate to='/students' />} />
    </Routes>
  );
};
