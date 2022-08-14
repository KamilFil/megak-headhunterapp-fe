import React from 'react';
import './Rating.css';

interface Props {
  ratingTitle: string;
  valueRating: number;
  quantityStars: number;
}

export const Rating = (props: Props) => {
  const itemsRating: any[] = [].map((el) => el);
  for (let i = 0; i < props.quantityStars; i++) {
    if (i < props.valueRating) {
      itemsRating.push(
        React.createElement(
          'i',
          {
            key: `star${i}`,
            className: 'fa-solid fa-star active',
          },
          '',
        ),
      );
    } else {
      itemsRating.push(
        React.createElement(
          'i',
          {
            key: `star${i}`,
            className: 'fa-solid fa-star',
          },
          '',
        ),
      );
    }
  }

  return (
    <div className='rating-item'>
      <p className='rating_item-title'>{props.ratingTitle}</p>
      <div className='rating_item-stars'>
        <p>
          {props.valueRating}/{props.quantityStars}
        </p>
        <p>{itemsRating}</p>
      </div>
    </div>
  );
};
