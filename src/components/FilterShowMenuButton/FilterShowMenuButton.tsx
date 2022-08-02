import React from 'react';
import filterImg from '../../img/filter-filled-tool-symbol-svgrepo-com.svg';
import './FilterShowMenuButton.css';

export const FilterShowMenuButton = () => {
    return (
        <div className='filter-show-menu-button--wrap'>
            <button className='filter-show-menu-button'>Filtrowanie</button>
            <img src={filterImg} alt='Ikona filtrowania' className='filter-show-menu-button--img'/>
        </div>
    );
};
