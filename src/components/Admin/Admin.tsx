import React from 'react';
import {AdminForm} from '../AdminForm/AdminForm';
import './Admin.css'
import {NavBar} from '../common/NavBar/NavBar';

export const Admin = () => {
    return (
        <>
            <NavBar/>
            <div className='admin-wrap'>
                <AdminForm/>
            </div>
        </>
    )
}