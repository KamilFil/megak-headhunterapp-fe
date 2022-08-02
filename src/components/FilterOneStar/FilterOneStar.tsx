import React, {useEffect} from 'react';
import {FilterForm, FilterRatingFormFields, Rating} from '../../types/filter';
import './FilterOneStar.css';

interface Props {
  rating: Rating;
  filterField: FilterRatingFormFields;
  filterForm: FilterForm;
  setFilterForm: (newFilterForm: FilterForm) => void;
}

export const FilterOneStar = ({rating, filterField, filterForm, setFilterForm}: Props) => {
  const handleClick = () => {
    if (filterForm[filterField] === rating) {
      rating = 0;
    }
    setFilterForm({
      ...filterForm,
      [filterField]: rating,
    });
  };

  useEffect(() => {
    const element: HTMLLinkElement | null = document.querySelector(
        `.filter-menu--form-label__button${filterField}${rating}`,
    );

    if (rating <= Number(filterForm[filterField])) {
      if (!element?.classList.contains('filter-menu--form-label__button--active')) {
        element?.classList.add('filter-menu--form-label__button--active');
      }
    } else {
      if (element?.classList.contains('filter-menu--form-label__button--active')) {
        element?.classList.remove('filter-menu--form-label__button--active');
      }
    }
  }, [filterForm[filterField]]);

  return (
      <a
          className={`filter-menu--form-label__button filter-menu--form-label__button${filterField}${rating}`}
          onClick={handleClick}>
        <div className='filter-menu--form-label__button-rating'>{rating}</div>
        <div className='fa fa-star filter-menu--form-label__button-star'/>
      </a>
  );
};
