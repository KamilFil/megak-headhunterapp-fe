import React from 'react';
import './Cv.css';
import { StudentEntity } from 'types';
import { CvProfile } from './CvProfile';
import { CvInfo } from './CvInfo';

export const Cv = () => {
  const student: StudentEntity[] = [
    {
      email: 'Student1',
      tel: 666777999,
      firstName: 'Imie',
      lastName: 'Nazwisko',
      githubUsername: 'GitHubName',
      portfolioUrls: 'GitHubName.pl',
      projectUrls: 'GitHubName.project.pl',
      bio: 'Lorem ipsumd lorem ipsum lorem ipsum',
      expectedTypeWork: 'Miejsce pracy',
      targetWorkCity: 'Docelowe miasto',
      expectedContractType: 'Typ kontatraktu',
      expectedSalary: 3,
      canTakeApprenticeship: 'tak',
      monthsOfCommercialExp: 0,
      education: 'Edukacja',
      workExperience: 'Przebieg doświadczenia',
      courses: 'Kursy i certyfikaty ',
      active: 1,
    },
  ];

  return (
    <>
      <section className='coursant'>
        <CvProfile data={student} />
        <CvInfo data={student} />
      </section>
    </>
  );
};
