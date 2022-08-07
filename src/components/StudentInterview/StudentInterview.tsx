import React, { Dispatch, SyntheticEvent, useEffect, useState } from 'react';
import './StudentInterveiw.css';
import { RedButton } from '../common/RedButton/RedButton';
import { UnFilledArrow } from '../common/UnFilledArrow/UnFilledArrow';
import { StudentEntityOneInfo } from '../StudentEntityOneInfo/StudentEntityOneInfo';
import { StudentEntity } from 'types';
import avatar from '../../img/avatar.jpg';
import {
  getAllStudents,
  getAllStudentsToCall,
  setUserStatusToAvailable,
  setUserStatusToHired,
} from '../../api/api';

interface Props {
  name: string;
  id: string | undefined;
  data: StudentEntity;
  setLoading: Dispatch<boolean>;
}

export const StudentInterview = ({ name, id, data, setLoading }: Props) => {
  const showHide = () => {
    const entityInfo: HTMLDivElement | null = document.querySelector(`.student-entity--info${id}`);
    const arrow: HTMLDivElement | null = document.querySelector(`.unfilled-arrow${id}`);
    entityInfo?.classList.toggle('student-entity--info--show');
    arrow?.classList.toggle('unfilled-arrow--rotate');
  };

  const handleHired = async () => {
    setLoading(true);

    await setUserStatusToHired('1', data.id);
  };

  const handleAvailable = async () => {
    setLoading(true);

    await setUserStatusToAvailable('1', data.id);
  };

  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <>
      <div className='student-entity'>
        <div className='student-entity--heading'>
          <div className='student-entity--heading-data'>
            <div className='student-entity--heading-reservation'>
              <p>Rezerwacja do</p>
              <p>18.08.2022 r.</p>
            </div>
            <div className='student-entity--heading-user'>
              <img
                className='student-entity--heading-avatar'
                src={
                  !data.githubUsername ? avatar : `https://github.com/${data.githubUsername}.png`
                }
              />
              <p className='student-entity--heading-name'>{name}</p>
            </div>
          </div>
          <div className='student-entity--heading-marks'>
            <RedButton
              name='Pokaż CV'
              type='button'
              additionalClass='red-button--smaller'
              handleClick={handleClick}
            />
            <RedButton
              name='Brak Zainteresowania'
              type='button'
              additionalClass='red-button--smaller'
              handleClick={handleAvailable}
            />
            <RedButton
              name='Zatrudniony'
              type='button'
              additionalClass='red-button--smaller'
              handleClick={handleHired}
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
          <StudentEntityOneInfo
            title='Preferowane miejsce pracy'
            mainInfo={data.expectedTypeWork}
          />
          <StudentEntityOneInfo
            title='Docelowe miasto, gdzie chce pracować kandydat'
            mainInfo={data.targetWorkCity}
          />
          <StudentEntityOneInfo
            title='Oczekiwany typ kontraktu'
            mainInfo={data.expectedContractType}
          />
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
