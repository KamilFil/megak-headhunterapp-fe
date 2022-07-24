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
          <p>
            {student.firstName} {student.lastName}
          </p>
          <div>
            <i></i>{' '}
            <a href={`https://github.com/${student.githubUsername}`}>{student.githubUsername}</a>
          </div>
          <div className='coursant-profile_item-contact'>
            <i></i>
            <p>{student.email}</p>
            <i></i> <p>+48 {student.tel}</p>
          </div>
          <div className='coursant-profile_item-bio'>
            <p>{student.bio}</p>
          </div>
          <div>
            <p>Brak zainteresowania</p>
          </div>
          <div>
            <p>Zatrudniony</p>
          </div>
        </div>
      ))}
    </div>
  );
};
