import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Students } from './components/layouts/Students/Students';
import { Login } from './components/layouts/Login/Login';
import { Cv } from './components/layouts/Cv/Cv';
import { StudentsFormEdit } from './components/layouts/StudentFormEdit/StudentFormEdit';

export const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/students' element={<Students />} />
      <Route path='/cv/:id' element={<Cv />} />
      <Route path='/' element={<Navigate to='/students' />} />
      <Route path='/cv/edit' element={<StudentsFormEdit />} />
    </Routes>
  );
};
