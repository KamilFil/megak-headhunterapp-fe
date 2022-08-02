import React, {ChangeEvent} from 'react';
import {FilledArrow} from '../FilledArrow/FilledArrow';
import {FilterForm} from '../../types/filter';
import './FilterExp.css';

interface Props {
  filterForm: FilterForm;
  setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterExp = ({filterForm, setFilterForm}: Props) => {
  const max = 120;

  const setExp = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === -1 || e.target.value === '') {
      setFilterForm({...filterForm, monthsExperience: undefined});
      return;
    }
    if (isNaN(Number(e.target.value))) {
      return;
    } else {
      const newMonthsExperience = Number(e.target.value) >= max ? max : Number(e.target.value);
      setFilterForm({...filterForm, monthsExperience: newMonthsExperience});
    }
  };

  const incExp = () => {
    const oldExp = filterForm.monthsExperience !== undefined ? filterForm.monthsExperience : -1;
    if (oldExp < max) {
      setFilterForm({...filterForm, monthsExperience: oldExp + 1});
    }
  };

  const decExp = () => {
    const oldExp = filterForm.monthsExperience ? filterForm.monthsExperience : 0;
    if (oldExp > 0) {
      setFilterForm({...filterForm, monthsExperience: oldExp - 1});
    } else if (oldExp === 0) {
      setFilterForm({...filterForm, monthsExperience: undefined});
    }
  };

  return (
      <label className='filter-menu--form-label'>
        <p className='filter-menu--form-label__text'>
          Ilość miesięcy komercyjnego doświadczenia kandydata w programowaniu
        </p>
        <div className='filter-menu--form-label__wrap' onClick={(e) => e.preventDefault()}>
          <input
              className='filter-menu--form-label__wrap-input'
              type='text'
              placeholder='np. 5 miesięcy'
              value={filterForm.monthsExperience !== undefined ? filterForm.monthsExperience : ''}
              onChange={setExp}
          />
          <div className='filter-menu--form-label__wrap-input-wrap-top' onClick={incExp}>
            <FilledArrow additionalClass='filter-menu--form-label__wrap-input-wrap-top-arrow'/>
          </div>
          <div className='filter-menu--form-label__wrap-input-wrap-bottom' onClick={decExp}>
            <FilledArrow additionalClass='filter-menu--form-label__wrap-input-wrap-bottom-arrow'/>
          </div>
        </div>
      </label>
  );
};
