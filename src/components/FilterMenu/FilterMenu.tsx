import React, {useState} from 'react';
import {TealButton} from '../common/TealButton/TealButton';
import {FilterStars} from '../FilterStars/FilterStars';
import {FilterForm, RatingFilter} from '../../types/filter';
import {FilterWorkplace} from '../FilterWorkplace/FilterWorkplace';
import {FilterContractType} from '../FilterContractType/FilterContractType';
import {FilterSalary} from '../FilterSalary/FilterSalary';
import {FilterUnpaidInternship} from '../FilterUnpaidInternship/FilterUnpaidInternship';
import {FilterExp} from '../FilterExp/FilterExp';
import {RedButton} from '../common/RedButton/RedButton';
import {BlackButton} from '../common/BlackButton/BlackButton';
import './FilterMenu.css';

export const FilterMenu = () => {
  const defaultFilterFormObj: FilterForm = {
    generalRating: 0,
    activityRating: 0,
    ownProjectRating: 0,
    teamworkRating: 0,
    preferredRemoteWork: false,
    preferredOfficeWork: false,
    expectedEmploymentContract: false,
    expectedB2bContract: false,
    expectedMandateContract: false,
    expectedWorkContract: false,
    expectedMinNetSalary: undefined,
    expectedMaxNetSalary: undefined,
    agreementForUnpaidInternship: false,
    monthsExperience: undefined,
  };

  const ratingFilters: RatingFilter[] = [
    {filterField: 'generalRating', filterSubject: 'Ocena przejścia kursu'},
    {filterField: 'activityRating', filterSubject: 'Ocena aktywności i zaangażowania na kursie'},
    {filterField: 'ownProjectRating', filterSubject: 'Ocena kodu w projekcie własnym'},
    {filterField: 'teamworkRating', filterSubject: 'Ocena pracy w zespole Scrum'},
  ];

  const [filterForm, setFilterForm] = useState<FilterForm>(defaultFilterFormObj);

  const refreshForm = () => {
    setFilterForm(defaultFilterFormObj);
  };

  return (
      <div className='filter-menu'>
        <div className='filter-menu--heading'>
          <h3 className='filter-menu--heading-text'>Filtrowanie</h3>
          <TealButton type='button' name='Wyczyść wszystkie' handleClick={refreshForm}/>
        </div>
        <form className='filter-menu--form'>
          {ratingFilters.map((oneFilter) => {
            return (
                <FilterStars
                    filterField={oneFilter.filterField}
                    filterSubject={oneFilter.filterSubject}
                    filterForm={filterForm}
                    setFilterForm={setFilterForm}
                    key={oneFilter.filterField}
                />
            );
          })}
          <FilterWorkplace filterForm={filterForm} setFilterForm={setFilterForm}/>
          <FilterContractType filterForm={filterForm} setFilterForm={setFilterForm}/>
          <FilterSalary filterForm={filterForm} setFilterForm={setFilterForm}/>
          <FilterUnpaidInternship filterForm={filterForm} setFilterForm={setFilterForm}/>
          <FilterExp filterForm={filterForm} setFilterForm={setFilterForm}/>
          <div className='filter-menu--footer'>
            <BlackButton name='Anuluj' type='button'/>
            <RedButton name='Pokaż wyniki' type='button'/>
          </div>
        </form>
      </div>
  );
};
