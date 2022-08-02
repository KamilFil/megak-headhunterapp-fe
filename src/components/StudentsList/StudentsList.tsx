import React from 'react';
import {StudentEntity} from '../StudentEntity/StudentEntity';
import './StudentsList.css';

export const StudentsList = () => {
  return (
      <div className='students-list-wrap'>
        <div className='students-list'>
          <StudentEntity name='Karol P.' id='1'/>
          <StudentEntity name='Karol P.' id='3'/>
          <StudentEntity name='Karol P.' id='4'/>
          <StudentEntity name='Karol P.' id='5'/>
          <StudentEntity name='Karol P.' id='6'/>
          <StudentEntity name='Karol P.' id='7'/>
        </div>
      </div>
  );
};
