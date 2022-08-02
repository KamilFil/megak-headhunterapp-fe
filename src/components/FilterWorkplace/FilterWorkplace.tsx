import React from 'react';
import {GraphiteButton} from '../common/GraphiteButton/GraphiteButton';
import {FilterForm} from '../../types/filter';
import './FilterWorkplace.css';

interface Props {
    filterForm: FilterForm;
    setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterWorkplace = ({filterForm, setFilterForm}: Props) => {
    return (
        <label className='filter-menu--form-label'>
            <p className='filter-menu--form-label__text'>Preferowane miejsce pracy</p>
            <div className='filter-menu--form-label__workplace'>
                <GraphiteButton
                    fields='preferredRemoteWork'
                    name='Praca zdalna'
                    filterForm={filterForm}
                    setFilterForm={setFilterForm}
                />
                <GraphiteButton
                    fields='preferredOfficeWork'
                    name='Praca w biurze'
                    filterForm={filterForm}
                    setFilterForm={setFilterForm}
                />
            </div>
        </label>
    );
};
