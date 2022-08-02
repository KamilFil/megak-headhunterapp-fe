import React from 'react';
import './UnFilledArrow.css';

interface Props {
  additionalClass?: string;
}

export const UnFilledArrow = ({additionalClass}: Props) => {
  return <div className={`unfilled-arrow ${additionalClass}`}/>;
};
