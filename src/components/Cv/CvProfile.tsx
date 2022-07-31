import React from 'react';
import { StudentEntity } from 'types';
import './CvProfile.css';

interface Props {
  data: StudentEntity[];
}

export const CvProfile = (props: Props) => {
  return (
    <div className='coursant-profile'>
      {props.data.map((student) => (
        <div key={student.email} className='coursant-profile_item'>
          <img src='/img/logo-test.png' alt='ALT' />
          <p className='coursant_profile-item_title'>
            {student.firstName} {student.lastName}
          </p>
          <div className='coursant_profile-item_github'>
            <i className='fa-brands fa-github'></i>
            <a
              className='coursant_profile-item_github-link'
              href={`https://github.com/${student.githubUsername}`}>
              {student.githubUsername}
            </a>
          </div>
          <div className='coursant-profile_item-contact'>
            <div className='coursant-profile_item-contact_mail'>
              <i className='fa-solid fa-phone'></i>
              <a href={`tel:${student.tel}`}>+48 {student.tel}</a>
            </div>
            <div className='coursant-profile_item-contact_phone'>
              <i className='fa-solid fa-envelope'></i>
              <a href={`tel:${student.email}`}>{student.email}</a>
            </div>
          </div>
          <div className='coursant-profile_item-bio'>
            <p className='coursant-profile-item_bio-title'>O mnie:</p>
            <p>{student.bio}</p>
          </div>
          <div>
            <p className='coursant-profile_item-action'>Brak zainteresowania</p>
          </div>
          <div>
            <p className='coursant-profile_item-action'>Zatrudniony</p>
          </div>
        </div>
      ))}
    </div>
  );
};
