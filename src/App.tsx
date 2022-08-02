import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Students} from './components/layouts/Students/Students';
import {Login} from './components/layouts/Login/Login';


export const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/' element={<Navigate to='/students'/>}/>
        </Routes>
    );
};
