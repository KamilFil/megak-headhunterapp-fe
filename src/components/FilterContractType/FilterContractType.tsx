import React from 'react';
import {ContractTypeFilter, FilterForm} from '../../types/filter';
import {GraphiteButton} from '../common/GraphiteButton/GraphiteButton';
import './FilterContractType.css';

interface Props {
    filterForm: FilterForm;
    setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterContractType = ({filterForm, setFilterForm}: Props) => {
    const expectedContractTypes: ContractTypeFilter[] = [
        {filterName: 'Umowa o pracę', filterField: 'expectedEmploymentContract'},
        {filterName: 'B2B', filterField: 'expectedB2bContract'},
        {filterName: 'Umowa zlecenie', filterField: 'expectedMandateContract'},
        {filterName: 'Umowa o dzieło', filterField: 'expectedWorkContract'},
    ];

    return (
        <label className='filter-menu--form-label'>
            <p className='filter-menu--form-label__text'>Oczekiwany typ kontraktu</p>
            <div className='filter-menu--form-label__contract-type'>
                {expectedContractTypes.map((contractType) => {
                    return (
                        <GraphiteButton
                            fields={contractType.filterField}
                            name={contractType.filterName}
                            filterForm={filterForm}
                            setFilterForm={setFilterForm}
                            key={contractType.filterName}
                        />
                    );
                })}
            </div>
        </label>
    );
};
