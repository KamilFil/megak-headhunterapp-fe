import React, { Dispatch, useEffect, useState } from 'react';
import { StudentEntity } from 'types';
import './StudentsInterviewsList.css';
import { StudentInterview } from '../StudentInterview/StudentInterview';
import { getAllStudentsToCall } from '../../api/api';

export const StudentsInterviewsList = () => {
  const [studentsInterviews, setStudentsInterviews] = useState<StudentEntity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getAllStudentsToCall('1');

      setStudentsInterviews(res.data);
    })();
    setLoading(false);
  }, [loading]);

  return (
    <div className='students-list-wrap'>
      <div className='students-list'>
        {studentsInterviews.map((student) => (
          <StudentInterview
            name={`${student.firstName} ${student.lastName}`}
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
