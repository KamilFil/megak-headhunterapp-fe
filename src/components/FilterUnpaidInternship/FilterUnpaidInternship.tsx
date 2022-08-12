import React from 'react';
import './FilterUnpaidInternship.css';
import {FilterForm} from '../../types/filter';

interface Props {
    filterForm: FilterForm;
    setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterUnpaidInternship = ({filterForm, setFilterForm}: Props) => {
    return (
        <label className='filter-menu--form-label'>
            <p className='filter-menu--form-label__text'>
                Zgoda na odbycie bezpłatnych praktyk/stażu na początek
            </p>
            <div className='filter-menu--form-label__internship'>
                <label
                    className='filter-menu--form-label__internship-label'
                    onClick={() => setFilterForm({...filterForm, agreementForUnpaidInternship: true})}>
          <span className='filter-menu--form-label__internship-label__input'>
            {filterForm.agreementForUnpaidInternship && (
                <span className='filter-menu--form-label__internship-label__input-checkmark'/>
            )}
          </span>
                    <p className='filter-menu--form-label__internship-label__text'>Tak</p>
                </label>
                <label
                    className='filter-menu--form-label__internship-label'
                    onClick={() => setFilterForm({...filterForm, agreementForUnpaidInternship: false})}>
          <span className='filter-menu--form-label__internship-label__input'>
            {!filterForm.agreementForUnpaidInternship && (
                <span className='filter-menu--form-label__internship-label__input-checkmark'/>
            )}
          </span>
                    <p className='filter-menu--form-label__internship-label__text'>Nie</p>
                </label>
            </div>
        </label>
    );
};
