import React, { useState } from 'react';
import { ViewSelect } from '../../common/ViewSelect/ViewSelect';
import { NavBar } from '../../common/NavBar/NavBar';
import { SearchBar } from '../../common/SearchBar/SearchBar';
import { StudentsList } from '../../StudentsList/StudentsList';
import { ListFooter } from '../../ListFooter/ListFooter';
import { FilterFormContext } from '../../../context/FilterFormContext';
import { FilterForm } from '../../../types/filter';
import { FilterMenu } from '../../FilterMenu/FilterMenu';
import './Students.css';

export const Students = () => {
  const [viewSelect, setViewSelect] = useState<'studentsList' | 'studentsInterviews'>(
    'studentsList',
  );
  const [pagesPagination, setPagesPagination] = useState(10);
  const [page, setPage] = useState(1);
  const [studentsAmount, setStudentsAmount] = useState(93);

  const [filterForm, setFilterForm] = useState<FilterForm>({
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
  });

  return (
    <FilterFormContext.Provider value={{ filterForm: filterForm, setFilterForm: setFilterForm }}>
      <div className='filter-wrap'>
        <NavBar />
        <div className='students-wrap'>
          <ViewSelect viewSelect={viewSelect} setViewSelect={setViewSelect} />
          <SearchBar />
          {viewSelect === 'studentsList' && <StudentsList />}
          <ListFooter
            pagesPagination={pagesPagination}
            page={page}
            studentsAmount={studentsAmount}
            setPagesPagination={setPagesPagination}
            setPage={setPage}
          />
        </div>
      </div>
      <FilterMenu />
    </FilterFormContext.Provider>
  );
};
