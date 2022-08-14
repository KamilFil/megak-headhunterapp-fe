import React, { useContext, useEffect, useState } from 'react';
import './Cv.css';
import { StudentEntity, UserEntity } from 'types';
import { CvProfile } from './CvProfile';
import { CvInfo } from './CvInfo';
import { NavBar } from '../common/NavBar/NavBar';
import { authGetUse, getStudentUser } from '../../api/api';
import { useParams } from 'react-router-dom';

interface Props {
  data: UserEntity | null;
}

export const Cv = (props: Props) => {
  const { id } = useParams();
  const [studentUser, setStudentUser] = useState<StudentEntity | null>(null);
  const [loading, setLoading] = useState(false);
  console.log(id);
  useEffect(() => {
    (async () => {
      if (id) {
        const res = await getStudentUser(id as string);
        setStudentUser(res.data);
        setLoading(false);
      } else if (props.data) {
        const res = await getStudentUser(props.data.id);
        setStudentUser(res.data);
        setLoading(false);
      }
    })();
  }, [loading]);

  if (studentUser === null) {
    return <p>Ładowanie zasobów</p>;
  }

  if (!props.data) {
    return null;
  }

  console.log(props.data.id);

  return (
    <>
      <NavBar data={props.data} />

      <section className='coursant'>
        <CvProfile data={studentUser} />
        <CvInfo data={studentUser} />
      </section>
    </>
  );
};
