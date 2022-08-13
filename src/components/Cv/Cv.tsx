import React, { useEffect, useState } from 'react';
import './Cv.css';
import { StudentEntity } from 'types';
import { CvProfile } from './CvProfile';
import { CvInfo } from './CvInfo';
import { NavBar } from '../common/NavBar/NavBar';
import { getStudentUser } from '../../api/api';
import { useParams } from 'react-router-dom';

export const Cv = () => {
  const [studentUser, setStudentUser] = useState<StudentEntity | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getStudentUser(id as string);
      console.log(res);
      // const data = await res.json();
      setStudentUser(res.data);
    })();
  }, []);

  if (studentUser === null) {
    return <p>Ładowanie zasobów</p>;
  }

  return (
    <>
      <NavBar />
      <section className='coursant'>
        <CvProfile data={studentUser} />
        <CvInfo data={studentUser} />
      </section>
    </>
  );
};
