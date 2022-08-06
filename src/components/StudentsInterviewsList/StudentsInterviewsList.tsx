import React from 'react';
import { StudentEntity } from 'types';
import './StudentsInterviewsList.css';
import { StudentInterview } from '../StudentInterview/StudentInterview';

interface Props {
  data: StudentEntity[];
}

export const StudentsInterviewsList = ({ data }: Props) => {
  return (
    <div className='students-list-wrap'>
      <div className='students-list'>
        {data.map((student) => (
          <StudentInterview
            name={`${student.firstName} ${student.lastName}`}
            id={student.id}
            key={student.email}
            data={student}
          />
        ))}
      </div>
    </div>
  );
};
