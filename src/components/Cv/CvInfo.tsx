import React from 'react';
import { StudentEntity } from 'types';
import './CvInfo.css';
import { CvRating } from './CvRating';
import { CvRequirment } from './CvRequirment';
import { AnswerBox } from '../common/AnswerBox';
import { CvProjectBox } from './CvProjectBox';

interface Props {
  data: StudentEntity;
}

export const CvInfo = (props: Props) => {
  return (
    <>
      <div key={props.data.email} className='coursant-info'>
        <CvRating data={props.data} title='Oceny' />
        <CvRequirment data={props.data} title='Oczekiwania w stosunku do pracy' />
        <AnswerBox title='Edukacja' answer={props.data.education} />
        <AnswerBox title='Kursy' answer={props.data.courses} />
        <AnswerBox title='Doświadczenie zawodowe' answer={props.data.workExperience} />
        <CvProjectBox title='Portfolio' data={props.data.projectUrls} />
        <CvProjectBox title='Projekt w zespole Scrumowym' data={props.data.portfolioUrls} />
        <CvProjectBox title='Projekt na zaliczenie' data={props.data.projectUrls} />
      </div>
    </>
  );
};
