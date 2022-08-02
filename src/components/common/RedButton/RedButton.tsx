import React from 'react';
import './RedButton.css';

interface Props {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  additionalClass?: string;
}

export const RedButton = (props: Props) => {
  return (
      <button type={props.type} className='red-button'>
        {props.name}
      </button>
  );
};
