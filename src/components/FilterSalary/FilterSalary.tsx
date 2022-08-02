import React, {ChangeEvent} from 'react';
import {FilterForm} from '../../types/filter';
import './FilterSalary.css';

interface Props {
  filterForm: FilterForm;
  setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterSalary = ({filterForm, setFilterForm}: Props) => {
  const max = 50000;
  const setMinNetSalary = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 0) {
      setFilterForm({...filterForm, expectedMinNetSalary: undefined});
    } else if (
        Number(e.target.value) <= Number(filterForm.expectedMaxNetSalary) ||
        filterForm.expectedMaxNetSalary === undefined
    ) {
      if (Number(e.target.value) > max) {
        setFilterForm({...filterForm, expectedMinNetSalary: max});
        return;
      }
      setFilterForm({...filterForm, expectedMinNetSalary: Number(e.target.value)});
    } else {
      setFilterForm({...filterForm, expectedMinNetSalary: filterForm.expectedMaxNetSalary});
    }
  };

  const setMaxNetSalary = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 0) {
      setFilterForm({...filterForm, expectedMaxNetSalary: undefined});
    } else if (
        Number(e.target.value) >= Number(filterForm.expectedMinNetSalary) ||
        filterForm.expectedMinNetSalary === undefined
    ) {
      if (Number(e.target.value) > max) {
        setFilterForm({...filterForm, expectedMaxNetSalary: max});
        return;
      }
      setFilterForm({...filterForm, expectedMaxNetSalary: Number(e.target.value)});
    } else {
      setFilterForm({...filterForm, expectedMaxNetSalary: filterForm.expectedMinNetSalary});
    }
  };

  return (
      <label className='filter-menu--form-label'>
        <p className='filter-menu--form-label__text'>
          Oczekiwane wynagrodzenie miesięczne netto w PLN
        </p>
        <div className='filter-menu--form-label__salary'>
          <label className='filter-menu--form-label__salary-label'>
            <p className='filter-menu--form-label__salary-label__text'>Od</p>
            <input
                className='filter-menu--form-label__salary-label__input'
                type='number'
                placeholder='np. 1000 zł'
                min={-1}
                max={50000}
                value={
                  filterForm.expectedMinNetSalary !== undefined ? filterForm.expectedMinNetSalary : ''
                }
                onChange={setMinNetSalary}
            />
          </label>
          <label className='filter-menu--form-label__salary-label'>
            <p className='filter-menu--form-label__salary-label__text'>Do</p>
            <input
                className='filter-menu--form-label__salary-label__input'
                type='number'
                placeholder='np. 10000 zł'
                min={-1}
                max={50000}
                value={
                  filterForm.expectedMaxNetSalary !== undefined ? filterForm.expectedMaxNetSalary : ''
                }
                onChange={setMaxNetSalary}
            />
          </label>
        </div>
      </label>
  );
};
