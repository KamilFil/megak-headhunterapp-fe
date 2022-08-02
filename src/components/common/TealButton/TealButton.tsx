import React from 'react';
import './TealButton.css';

interface Props {
    name: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    handleClick: () => void;
}

export const TealButton = ({name, handleClick}: Props) => {
    return (
        <>
            <button className='teal-button' onClick={handleClick}>
                {name}
            </button>
        </>
    );
};
