import React, { useEffect, useState } from 'react';
import { FilledArrow } from '../FilledArrow/FilledArrow';
import { UserMenu } from '../UserMenu/UserMenu';
import avatar from '../../img/avatar.jpg';
import './UserLabel.css';
import { UserEntity } from 'types';

interface Props {
  data: UserEntity | null;
}

export const UserLabel = (props: Props) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    const userMenu: HTMLDivElement | null = document.querySelector('.user-menu');
    const filledArrow: HTMLDivElement | null = document.querySelector('.filled-arrow');
    const userLabel: HTMLDivElement | null = document.querySelector('.user-label--wrap');
    userMenu?.classList.toggle('user-menu--visible');
    filledArrow?.classList.toggle('filled-arrow--rotate');
    userLabel?.classList.toggle('user-label--wrap--visible');
  }, [visibleMenu]);

  if (!props.data) {
    return <p>Ładowanie</p>;
  }
  console.log(props.data.id);
  return (
    <div className='user-label' tabIndex={0} onBlur={() => setVisibleMenu(false)}>
      <div
        className='user-label--wrap'
        onClick={() => {
          setVisibleMenu(!visibleMenu);
        }}>
        <img
          src={
            !props.data.githubUsername
              ? '/img/logo-test.png'
              : `https://github.com/${props.data.githubUsername}.png`
          }
          alt='Zdjęcie użytkownika'
        />
        <p>{props.data.email}</p>
        <FilledArrow />
      </div>
      <UserMenu setVisible={setVisibleMenu} />
    </div>
  );
};
