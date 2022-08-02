import {Context, createContext, Dispatch} from 'react';
import {FilterForm} from '../types/filter';

const filterForm: FilterForm = {
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

/* eslint-disable */
const setFilterForm = (filterForm: FilterForm) => {
};

export const FilterFormContext: Context<{
  filterForm: FilterForm;
  setFilterForm: Dispatch<FilterForm>;
}> = createContext({
  filterForm,
  setFilterForm,
});
