import React, {useEffect, useState} from 'react';
import {FilledArrow} from '../FilledArrow/FilledArrow';
import {UnFilledArrow} from '../common/UnFilledArrow/UnFilledArrow';
import {PagesAmount} from '../PagesAmount/PagesAmount';
import './ListFooter.css';

interface Props {
  pagesPagination: number;
  page: number;
  studentsAmount: number;
  setPagesPagination: (newPagesAmount: number) => void;
  setPage: (newPage: number) => void;
}

export const ListFooter = ({
                             pagesPagination,
                             page,
                             studentsAmount,
                             setPagesPagination,
                             setPage,
                           }: Props) => {
  const [visiblePages, setVisiblePages] = useState(false);

  const handleIncPage = () => {
    if (pagesPagination * page < studentsAmount) {
      setPage(page + 1);
    }
  };

  const handleDecPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const pagesAmount: HTMLDivElement | null = document.querySelector('.pages-amount');
    const arrow: HTMLDivElement | null = document.querySelector(
        '.list-footer--pagination-input__arrow',
    );
    pagesAmount?.classList.toggle('pages-amount--visible');
    arrow?.classList.toggle('filled-arrow--rotate');
  }, [visiblePages]);

  return (
      <div className='list-footer'>
        <label className='list-footer--pagination' tabIndex={0} onBlur={() => setVisiblePages(false)}>
          <p className='list-footer--pagination-text'>Ilość elementów</p>
          <div
              className='list-footer--pagination-input'
              onClick={(e) => {
                e.currentTarget.scrollIntoView();
                setVisiblePages(!visiblePages);
              }}>
            <p className='list-footer--pagination-input__text'>{pagesPagination}</p>
            <FilledArrow additionalClass='list-footer--pagination-input__arrow filled-arrow--small'/>
          </div>
          <PagesAmount
              studentsAmount={studentsAmount}
              setVisible={setVisiblePages}
              setPagesPagination={setPagesPagination}
              setPage={setPage}
          />
        </label>
        <label className='list-footer--page'>
          <p className='list-footer--page-text'>
            {pagesPagination * page < studentsAmount ? pagesPagination * page : studentsAmount} z{' '}
            {studentsAmount}
          </p>
          <div
              className={`list-footer--page-back ${page <= 1 && 'list-footer--page--deactivate'}`}
              onClick={handleDecPage}>
            <UnFilledArrow additionalClass={'list-footer--page-back__arrow'}/>
          </div>
          <div
              className={`list-footer--page-next ${
                  pagesPagination * page >= studentsAmount && 'list-footer--page--deactivate'
              }`}
              onClick={handleIncPage}>
            <UnFilledArrow additionalClass={'list-footer--page-next__arrow'}/>
          </div>
        </label>
      </div>
  );
};
