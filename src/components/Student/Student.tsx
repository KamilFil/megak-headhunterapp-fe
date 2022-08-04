import React from 'react';
import { RedButton } from '../common/RedButton/RedButton';
import { UnFilledArrow } from '../common/UnFilledArrow/UnFilledArrow';
import { StudentEntityOneInfo } from '../StudentEntityOneInfo/StudentEntityOneInfo';
import './Student.css';
import {StudentEntity} from 'types';

interface Props {
  name: string;
  id: string | undefined;
  data: StudentEntity
}

export const Student = ({ name, id, data }: Props) => {
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
    <>
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
              <UnFilledArrow additionalClass={`unfilled-arrow${id}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={`student-entity--info student-entity--info${id}`}>
        <div className='student-entity--info-content'>
          <StudentEntityOneInfo title='Ocena przejścia kursu' mainInfo='5' additionalInfo='/5' />
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
          <StudentEntityOneInfo title='Preferowane miejsce pracy' mainInfo={data.expectedTypeWork} />
          <StudentEntityOneInfo
            title='Docelowe miasto, gdzie chce pracować kandydat'
            mainInfo={data.targetWorkCity}
          />
          <StudentEntityOneInfo title='Oczekiwany typ kontraktu' mainInfo={data.expectedContractType} />
          <StudentEntityOneInfo
            title='Oczekiwane wynagrodzenie miesięczne netto'
            mainInfo={data.expectedSalary !== null ? data.expectedSalary.toString() : null}
          />
          <StudentEntityOneInfo
            title='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
            mainInfo={data.canTakeApprenticeship === true ? 'Tak' : 'Nie'}
          />
          <StudentEntityOneInfo
            title='Komercyjne doświadczenie w programowaniu'
            mainInfo={`${data.monthsOfCommercialExp.toString()} miesięcy.`}
          />
        </div>
      </div>
      <div className='student-entity--info-footer' />
    </>
  );
};
