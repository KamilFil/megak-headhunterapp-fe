import React, {ChangeEvent, FormEvent} from 'react';
import {FilledArrow} from '../FilledArrow/FilledArrow';
import './FilterExp.css';
import {FilterForm} from '../../types/filter';

interface Props {
  filterForm: FilterForm;
  setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterExp = ({filterForm, setFilterForm}: Props) => {
  const setExp = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) === -1) {
      setFilterForm({...filterForm, monthsExperience: undefined});
    } else {
      setFilterForm({...filterForm, monthsExperience: Number(e.target.value)});
    }
  };

  const incExp = (e: FormEvent<HTMLDivElement>) => {
    const oldExp = filterForm.monthsExperience !== undefined ? filterForm.monthsExperience : -1;
    if (oldExp < 120) {
      setFilterForm({...filterForm, monthsExperience: oldExp + 1});
    }
  };

  const decExp = (e: FormEvent<HTMLDivElement>) => {
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
              type='number'
              placeholder='0 miesięcy'
              min={-1}
              max={120}
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
