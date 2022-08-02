import React from 'react';
import {RedButton} from '../common/RedButton/RedButton';
import {UnFilledArrow} from '../common/UnFilledArrow/UnFilledArrow';
import {StudentEntityOneInfo} from '../StudentEntityOneInfo/StudentEntityOneInfo';
import './StudentEntity.css';

interface Props {
  name: string;
  id: string;
}

export const StudentEntity = ({name, id}: Props) => {
  const showHide = () => {
    const entityInfo: HTMLDivElement | null = document.querySelector(`.student-entity--info${id}`);
    const arrow: HTMLDivElement | null = document.querySelector(`.unfilled-arrow${id}`);
    entityInfo?.classList.toggle('student-entity--info--show');
    arrow?.classList.toggle('unfilled-arrow--rotate');
  };

  const handleClick = () => {
    console.log('CLICK');
  };

  return (
      <div className='student-entity'>
        <div className='student-entity--heading'>
          <p className='student-entity--heading-name'>{name}</p>
          <div className='student-entity--heading-marks'>
            <RedButton
                name='Zarezerwuj'
                type='button'
                additionalClass='red-button--smaller'
                handleClick={handleClick}
            />
            <div
                className={`student-entity--heading-marks__arrow-wrap student-entity--heading-marks__arrow-wrap${id}`}
                onClick={showHide}>
              <UnFilledArrow additionalClass={`unfilled-arrow${id}`}/>
            </div>
          </div>
        </div>
        <div className={`student-entity--info student-entity--info${id}`}>
          <div className='student-entity--info-content'>
            <StudentEntityOneInfo title='Ocena przejścia kursu' mainInfo='5' additionalInfo='/5'/>
            <StudentEntityOneInfo
                title='Ocena aktywności i zaangażowania na kursie'
                mainInfo='4'
                additionalInfo='/5'
            />
            <StudentEntityOneInfo
                title='Ocena kodu w projekcie własnym'
                mainInfo='4'
                additionalInfo='/5'
            />
            <StudentEntityOneInfo
                title='Ocena pracy w zespole Scrum'
                mainInfo='3'
                additionalInfo='/5'
            />
            <StudentEntityOneInfo title='Preferowane miejsce pracy' mainInfo='Biuro'/>
            <StudentEntityOneInfo
                title='Docelowe miasto, gdzie chce pracować kandydat'
                mainInfo='Warszawa'
            />
            <StudentEntityOneInfo title='Oczekiwany typ kontraktu' mainInfo='Umowa o pracę'/>
            <StudentEntityOneInfo
                title='Oczekiwane wynagrodzenie miesięczne netto'
                mainInfo='8 000 zł'
            />
            <StudentEntityOneInfo
                title='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                mainInfo='Tak'
            />
            <StudentEntityOneInfo
                title='Komercyjne doświadczenie w programowaniu'
                mainInfo='6 miesięcy'
            />
          </div>
        </div>
        <div className='student-entity--info-footer'/>
      </div>
  );
};
