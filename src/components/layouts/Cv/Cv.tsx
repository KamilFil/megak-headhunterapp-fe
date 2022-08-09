import React, { useEffect, useState } from 'react';
import './Cv.css';
import { StudentEntity } from 'types';
import { CvProfile } from './CvProfile';
import { CvInfo } from './CvInfo';
import { NavBar } from '../../common/NavBar/NavBar';
import { getStudentUser } from '../../../api/api';
import { useParams } from 'react-router-dom';

export const Cv = () => {
  const student: StudentEntity = {
    id: '',
    email: '',
    tel: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [],
    projectUrls: [],
    bio: '',
    expectedTypeWork: '',
    targetWorkCity: '',
    expectedContractType: '',
    expectedSalary: 0,
    canTakeApprenticeship: true,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
    isActive: true,
    hireStatus: '',
  };
  const [studentUser, setStudentUser] = useState(student);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getStudentUser(id as string);

      setStudentUser(res.data);
    })();
  }, []);

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
