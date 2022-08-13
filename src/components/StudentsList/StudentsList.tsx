import React, { Dispatch, useEffect, useState } from 'react';
import { Student } from '../Student/Student';
import './StudentsList.css';
import { StudentEntity } from 'types';
import { getAllStudents } from '../../api/api';

export const StudentsList = () => {
  const [students, setStudents] = useState<StudentEntity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getAllStudents();

      setStudents(res.data);
    })();

    setLoading(false);
    console.log(loading);
    console.log(students);
  }, [loading]);

  return (
    <div className='students-list-wrap'>
      <div className='students-list'>
        {students.map((student) => (
          <Student
            name={`${student.firstName} ${student.lastName.slice(0, 1)}.`}
            id={student.id}
            key={student.email}
            data={student}
            setLoading={setLoading}
          />
        ))}
      </div>
    </div>
  );
};
