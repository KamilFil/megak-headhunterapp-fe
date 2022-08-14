import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Students } from './components/layouts/Students/Students';
import { Login } from './components/layouts/Login/Login';
import { Cv } from './components/Cv/Cv';
import { AuthContextProvider } from './auth/AuthContext';
import { UserEntity } from 'types';
import { Admin } from './components/Admin/Admin';

export const App = () => {
  // const auth = useContext(AuthContext);
  const [data, setData] = useState<UserEntity | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/auth/profile', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const data = await res.json();
      setData(data);
      setLoading(false);
    })();
  }, [loading]);

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/students' element={<Students data={data} />} />
        <Route path='/coursant' element={<Cv data={data} />} />
        {/* <Route path='/students' element={<Students />} />*/}
        <Route path='/cv/:id' element={<Cv data={data} />} />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/admin' element={<Admin data={data} />} />
      </Routes>
    </AuthContextProvider>
  );
};
