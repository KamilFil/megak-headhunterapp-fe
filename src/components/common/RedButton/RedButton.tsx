import React from 'react';
import './RedButton.css';

interface Props {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  additionalClass?: string;
  handleClick: () => void;
}

export const RedButton = (props: Props) => {
  return (
      <button type={props.type} className='red-button' onClick={props.handleClick}>
        {props.name}
      </button>
  );
};
