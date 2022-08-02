import React from 'react';
import {FilterOneStar} from '../FilterOneStar/FilterOneStar';
import {FilterForm, FilterRatingFormFields, Rating} from '../../types/filter';
import './FilterStars.css';

interface Props {
    filterSubject: string;
    filterField: FilterRatingFormFields;
    filterForm: FilterForm;
    setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterStars = ({filterSubject, filterField, filterForm, setFilterForm}: Props) => {
    const rating: Rating[] = [1, 2, 3, 4, 5];
    return (
        <label className='filter-menu--form-label'>
            <p className='filter-menu--form-label__text'>{filterSubject}</p>
            <div className='filter-menu--form-label__stars-wrap'>
                {rating.map((val) => {
                    return (
                        <FilterOneStar
                            rating={val}
                            filterField={filterField}
                            filterForm={filterForm}
                            setFilterForm={setFilterForm}
                            key={val}
                        />
                    );
                })}
            </div>
        </label>
    );
};
