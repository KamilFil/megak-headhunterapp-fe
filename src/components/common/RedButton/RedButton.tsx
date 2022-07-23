import React from 'react';
import './RedButton.css';

interface Props {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const RedButton = (props: Props) => {
  return <button type={props.type}>{props.name}</button>;
};
