import React from 'react';
import { StudentEntity } from 'types';
import './CvInfo.css';

interface Props {
  data: StudentEntity[];
}

export const CvInfo = (props: Props) => {
  return (
    <>
      {props.data.map((student) => (
        <div key={student.email} className='coursant-info'>
          <div className='coursant-degree'>
            <h2>Oceny:</h2>
            <div className='coursant_degree-item'>
              <p className='coursant_degree_item-title'>Oceny przejścia kursu:</p>
              <div className='coursant_degree_item-stars'>
                <p>5/5</p>
                <i>stars</i>
              </div>
            </div>
          </div>
          <div className='coursant-requirment'>
            <h2 className='coursant_requirment-title'>Oczekiwanie w stosunku do zatrudnienia:</h2>
            <div className='coursant_requirment-item'>
              <p className='coursant_requirment_item-title'>Typ umowy</p>
              <p className='coursant_requirment_item-answer'>B2B</p>
            </div>
          </div>
          <div className='coursant-infobox'>
            <h2 className='coursant_infobox-title'>Edukacja</h2>
            <div className='coursant_infobox-item'>
              <p className='coursant_infobox_item-answer'>Lorem ipsum lorem ispum</p>
            </div>
          </div>
          <div className='coursant-projectbox'>
            <h2 className='coursant_projectbox-title'>Portfolio</h2>
            <div className='coursant_projectbox-listlink'>
              <a href='/' className='coursant-projectbox_linklist-item'>
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
