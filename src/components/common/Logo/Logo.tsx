import React from 'react';
import logo from '../../../img/logo.webp';
import './Logo.css';

interface Props {
  width?: string;
  margin?: string;
}

export const Logo = ({width = '100px', margin = '0 auto 30px'}: Props) => {
  return <img src={logo} alt='Logo bootcamp MegaK' style={{width: width, margin: margin}}/>;
};
