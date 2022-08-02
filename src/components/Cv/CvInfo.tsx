import React from 'react';
import { StudentEntity } from 'types';
import './CvInfo.css';
import { CvRating } from './CvRating';
import { CvRequirment } from './CvRequirment';
import { AnswerBox } from '../common/AnswerBox';
import { CvProjectBox } from './CvProjectBox';

interface Props {
  data: StudentEntity[];
}

export const CvInfo = (props: Props) => {
  return (
    <>
      {props.data.map((student) => (
        <div key={student.email} className='coursant-info'>
          <CvRating data={props.data} title='Oceny' />
          <CvRequirment data={props.data} title='Oczekiwania w stosunku do pracy' />
          <AnswerBox title='Edukacja' answer={student.education} />
          <AnswerBox title='Kursy' answer={student.courses} />
          <AnswerBox title='Doświadczenie zawodowe' answer={student.workExperience} />
          <CvProjectBox title='Portfolio' data={student.projectUrls} />
          <CvProjectBox title='Projekt w zespole Scrumowym' data={student.portfolioUrls} />
          <CvProjectBox title='Projekt na zaliczenie' data={student.projectUrls} />
        </div>
      ))}
    </>
  );
};
