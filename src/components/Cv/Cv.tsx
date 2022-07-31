import React from 'react';
import './Cv.css';
import { StudentEntity } from 'types';
import { CvProfile } from './CvProfile';
import { CvInfo } from './CvInfo';

export const Cv = () => {
  const student: StudentEntity[] = [
    {
      email: 'student@gmail.com',
      tel: 666777999,
      firstName: 'Kamil',
      lastName: 'Kamil',
      githubUsername: 'kamilgit',
      portfolioUrls: 'GitHubName.pl',
      projectUrls: 'GitHubName.project.pl',
      bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo',
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Poznań',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 3000,
      canTakeApprenticeship: 'nie',
      monthsOfCommercialExp: 0,
      education:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      workExperience:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      courses:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
