import React, { useContext, useEffect, useState } from 'react';
import { TealButton } from '../common/TealButton/TealButton';
import { FilterStars } from '../FilterStars/FilterStars';
import { FilterForm, RatingFilter } from '../../types/filter';
import { FilterWorkplace } from '../FilterWorkplace/FilterWorkplace';
import { FilterContractType } from '../FilterContractType/FilterContractType';
import { FilterSalary } from '../FilterSalary/FilterSalary';
import { FilterUnpaidInternship } from '../FilterUnpaidInternship/FilterUnpaidInternship';
import { FilterExp } from '../FilterExp/FilterExp';
import { RedButton } from '../common/RedButton/RedButton';
import { BlackButton } from '../common/BlackButton/BlackButton';
import { FilterFormContext } from '../../context/FilterFormContext';
import './FilterMenu.css';
import { filterAllStudents } from '../../api/api';

export const FilterMenu = () => {
  const defaultFilterFormObj: FilterForm = {
    visibleFilterMenu: false,
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

  const [filterData, setFilterData] = useState({
    expectedTypeWork: null,
    expectedContractType: null,
    expectedSalary: null,
    canTakeApprenticeship: null,
    monthsOfCommercialExp: null,
    courseCompletion: null,
    courseEngagement: null,
    projectDegree: null,
    teamProjectDegree: null,
  });

  const { filterForm, setFilterForm } = useContext(FilterFormContext);

  const ratingFilters: RatingFilter[] = [
    { filterField: 'generalRating', filterSubject: 'Ocena przejścia kursu' },
    { filterField: 'activityRating', filterSubject: 'Ocena aktywności i zaangażowania na kursie' },
    { filterField: 'ownProjectRating', filterSubject: 'Ocena kodu w projekcie własnym' },
    { filterField: 'teamworkRating', filterSubject: 'Ocena pracy w zespole Scrum' },
  ];

  const refreshForm = () => {
    setFilterForm({ ...defaultFilterFormObj, visibleFilterMenu: true });
  };

  const hideFilterMenu = () => {
    setFilterForm({
      ...filterForm,
      visibleFilterMenu: false,
    });
  };
  console.log(filterForm);

  useEffect(() => {
    const body = document.querySelector('body');
    const background = document.querySelector('.filter-wrap');
    background?.classList.toggle('focus-filter');
    body?.classList.toggle('focus-filter-body');
  }, [filterForm.visibleFilterMenu]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFilterData({
      expectedTypeWork: null,
      expectedContractType: null,
      expectedSalary: null,
      canTakeApprenticeship: null,
      monthsOfCommercialExp: null,
      courseCompletion: null,
      courseEngagement: null,
      projectDegree: null,
      teamProjectDegree: null,
    });

    console.log(filterData);
    const res = await filterAllStudents(filterData);

    console.log(res.data);
  };

  const handleClick = () => {
    console.log('CLICK!');
  };

  return (
    <div className={`filter-menu${filterForm.visibleFilterMenu ? ' filter-menu--visible' : ''}`}>
      <div className='filter-menu--heading'>
        <h3 className='filter-menu--heading-text'>Filtrowanie</h3>
        <TealButton type='button' name='Wyczyść wszystkie' handleClick={refreshForm} />
      </div>
      <form className='filter-menu--form' onSubmit={handleSubmit}>
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
        <FilterWorkplace filterForm={filterForm} setFilterForm={setFilterForm} />
        <FilterContractType filterForm={filterForm} setFilterForm={setFilterForm} />
        <FilterSalary filterForm={filterForm} setFilterForm={setFilterForm} />
        <FilterUnpaidInternship filterForm={filterForm} setFilterForm={setFilterForm} />
        <FilterExp filterForm={filterForm} setFilterForm={setFilterForm} />
        <div className='filter-menu--footer'>
          <BlackButton name='Anuluj' type='button' />
          <RedButton name='Pokaż wyniki' type='submit' handleClick={handleClick} />
        </div>
      </form>
    </div>
  );
};
