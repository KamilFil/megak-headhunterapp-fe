import React from 'react';

interface StudentEntity {
  email: string;
  tel: number;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  projectUrls: string;
  bio: string;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
  active: number;
}

export const Cv = () => {
  const student: StudentEntity[] = [
    {
      email: 'Student1',
      tel: 666777999,
      firstName: 'ImieStudent',
      lastName: 'Nazwisko Student',
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
      <section>
        {student.map((el) => (
          <p key={el.email}>{el.email}</p>
        ))}
      </section>
    </>
  );
};
