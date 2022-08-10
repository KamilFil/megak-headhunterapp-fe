import React, { useContext } from 'react';
import filterImg from '../../img/filter-filled-tool-symbol-svgrepo-com.svg';
import './FilterShowMenuButton.css';
import { FilterFormContext } from '../../context/FilterFormContext';

export const FilterShowMenuButton = () => {
  const { filterForm, setFilterForm } = useContext(FilterFormContext);

  return (
    <div className='filter-show-menu-button--wrap'>
      <button
        className='filter-show-menu-button'
        onClick={() =>
          setFilterForm({ ...filterForm, visibleFilterMenu: !filterForm.visibleFilterMenu })
        }>
        Filtrowanie
      </button>
      <img src={filterImg} alt='Ikona filtrowania' className='filter-show-menu-button--img' />
    </div>
  );
};
