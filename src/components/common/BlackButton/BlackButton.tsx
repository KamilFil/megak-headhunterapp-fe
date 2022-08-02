import React from 'react';
import './BlackButton.css';

interface Props {
    name: string;
    type: 'button' | 'submit' | 'reset' | undefined;
}

export const BlackButton = ({name, type}: Props) => {
    return (
        <button type={type} className='black-button'>
            {name}
        </button>
    );
};
