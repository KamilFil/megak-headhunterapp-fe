import React from 'react';
import { Logo } from '../Logo/Logo';
import { UserLabel } from '../../UserLabel/UserLabel';
import './NavBar.css';
import { UserEntity } from 'types';

interface Props {
  data: UserEntity | null;
}

export const NavBar = (props: Props) => {
  return (
    <div className='nav-bar-wrap'>
      <div className='nav-bar'>
        <Logo width='70px' margin='auto 0' />
        <UserLabel data={props.data} />
      </div>
    </div>
  );
};
