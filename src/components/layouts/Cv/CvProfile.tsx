import React from 'react';
import { StudentEntity } from 'types';
import './CvProfile.css';
import { RedButton } from '../../common/RedButton/RedButton';
import { setUserStatusToAvailable, setUserStatusToHired } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: StudentEntity;
}

export const CvProfile = (props: Props) => {
  const navigate = useNavigate();

  const handleHired = async () => {
    await setUserStatusToHired('1', props.data.id);

    navigate('/students');
  };

  const handleAvailable = async () => {
    await setUserStatusToAvailable('1', props.data.id);

    navigate('/students');
  };

  return (
    <div className='coursant-profile'>
      <div key={props.data.email} className='coursant-profile_item'>
        <img
          src={
            !props.data.githubUsername
              ? '/img/logo-test.png'
              : `https://github.com/${props.data.githubUsername}.png`
          }
          alt='avatar'
        />
        <p className='coursant_profile-item_title'>
          {props.data.firstName} {props.data.lastName}
        </p>
        <div className='coursant_profile-item_github'>
          <i className='fa-brands fa-github'></i>
          <a
            className='coursant_profile-item_github-link'
            href={`https://github.com/${props.data.githubUsername}`}>
            {props.data.githubUsername}
          </a>
        </div>
        <div className='coursant-profile_item-contact'>
          <div className='coursant-profile_item-contact_mail'>
            <i className='fa-solid fa-phone'></i>
            <a href={`tel:${props.data.tel}`}>+48 {props.data.tel}</a>
          </div>
          <div className='coursant-profile_item-contact_phone'>
            <i className='fa-solid fa-envelope'></i>
            <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
          </div>
        </div>
        <div className='coursant-profile_item-bio'>
          <p className='coursant-profile-item_bio-title'>O mnie:</p>
          <p>{props.data.bio}</p>
        </div>
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
      </div>
    </div>
  );
};
