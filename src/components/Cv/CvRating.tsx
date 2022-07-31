import { StudentEntity } from 'types';
import { Rating } from '../common/Rating';
import './CvRating.css';
interface Props {
  title: string;
  data: StudentEntity[];
}

export const CvRating = (props: Props) => {
  return (
    <div className='coursant-rating'>
      <h2>{props.title}</h2>
      {props.data.map((student) => (
        <div key={student.email} className='coursant-rating-container'>
          <Rating ratingTitle='Ocena przejścia kursu' valueRating={0} quantityStars={5} />
          <Rating
            ratingTitle='Ocena aktywności i zaangażowania na kursie'
            valueRating={0}
            quantityStars={5}
          />
          <Rating ratingTitle='Ocena kodu w projekcie własnym' valueRating={2} quantityStars={5} />
          <Rating ratingTitle='Ocena pracy w zespole w Scrum' valueRating={5} quantityStars={5} />
        </div>
      ))}
    </div>
  );
};
