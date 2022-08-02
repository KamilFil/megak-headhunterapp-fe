import React from 'react';
import searchMark from '../../img/loupe-svgrepo-com.svg';
import './SearchMark.css';

export const SearchMark = () => {
    return (
        <>
            <img src={searchMark} alt='Znak lupy' className='search-mark'/>
        </>
    );
};
