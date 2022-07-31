import React from 'react';
import { StudentEntity } from 'types';
import './CvInfo.css';
import { CvRating } from './CvRating';
import { CvRequirment } from './CvRequirment';
import { CvInfoBox } from './CvInfoBox';
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
          <CvInfoBox title='Edukacja' answer={student.education} />
          <CvInfoBox title='Kursy' answer={student.courses} />
          <CvInfoBox title='Doświadczenie zawodowe' answer={student.workExperience} />
          <CvProjectBox title='Portfolio' data={props.data} />
          <CvProjectBox title='Projekt w zespole Scrumowym' data={props.data} />
          <CvProjectBox title='Projekt na zaliczenie' data={props.data} />
        </div>
      ))}
    </>
  );
};
