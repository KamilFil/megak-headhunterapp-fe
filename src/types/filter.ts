export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type PreferredWorkplaceNames = 'Praca zdalna' | 'Praca w biurze';
export type ExpectedContractTypeNames =
    | 'Umowa o pracę'
    | 'B2B'
    | 'Umowa zlecenie'
    | 'Umowa o dzieło';
export type ExpectedMinNetSalary = number;
export type ExpectedMaxNetSalary = number;
export type AgreementForUnpaidInternship = boolean;
export type MonthsExperience = number;

export interface FilterForm {
  visibleFilterMenu: boolean;
  generalRating: Rating | undefined;
  activityRating: Rating | undefined;
  ownProjectRating: Rating | undefined;
  teamworkRating: Rating | undefined;
  preferredRemoteWork: boolean;
  preferredOfficeWork: boolean;
  expectedEmploymentContract: boolean;
  expectedB2bContract: boolean;
  expectedMandateContract: boolean;
  expectedWorkContract: boolean;
  expectedMinNetSalary: ExpectedMinNetSalary | undefined;
  expectedMaxNetSalary: ExpectedMaxNetSalary | undefined;
  agreementForUnpaidInternship: AgreementForUnpaidInternship | undefined;
  monthsExperience: MonthsExperience | undefined;
}

export type FilterRatingFormFields =
    | 'generalRating'
    | 'activityRating'
    | 'ownProjectRating'
    | 'teamworkRating';

export type FilterRatingFormSubjects =
    | 'Ocena przejścia kursu'
    | 'Ocena aktywności i zaangażowania na kursie'
    | 'Ocena kodu w projekcie własnym'
    | 'Ocena pracy w zespole Scrum';

export interface RatingFilter {
  filterField: FilterRatingFormFields;
  filterSubject: FilterRatingFormSubjects;
}

export type PreferredWorkplace = 'preferredRemoteWork' | 'preferredOfficeWork';

export type ExpectedContractType =
    | 'expectedEmploymentContract'
    | 'expectedB2bContract'
    | 'expectedMandateContract'
    | 'expectedWorkContract';

export type FilterButtonFormFields =
    | 'preferredRemoteWork'
    | 'preferredOfficeWork'
    | 'expectedEmploymentContract'
    | 'expectedB2bContract'
    | 'expectedMandateContract'
    | 'expectedWorkContract';

export interface ContractTypeFilter {
  filterField: ExpectedContractType;
  filterName: ExpectedContractTypeNames;
}
