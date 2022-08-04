import React from 'react';
import {Student} from '../Student/Student';
import './StudentsList.css';
import { StudentEntity } from 'types';


interface Props {
    data: StudentEntity[]
}

export const StudentsList = (props: Props) => {
  return (
      <div className='students-list-wrap'>
        <div className='students-list'>
            {props.data.map(student => (
                <Student name={`${student.firstName} ${student.lastName.slice(0, 1)}.`} id={student.id} key={student.email} data={student}/>
            ))}
        </div>
      </div>
  );
};
