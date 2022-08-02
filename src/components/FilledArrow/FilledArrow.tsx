import React from 'react';
import './FilledArrow.css';

interface Props {
  additionalClass?: string;
}

export const FilledArrow = ({additionalClass = ''}: Props) => {
  return <div className={additionalClass + ' filled-arrow'}/>;
};
