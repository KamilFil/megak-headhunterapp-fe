import './QABox.css';

interface Props {
  question: string;
  answer: string | number;
}

export const QABox = (props: Props) => {
  return (
    <>
      <div className='qa-box_item'>
        <p className='qa-box_item-title'>{props.question}</p>
        <p className='qa-box_item-answer'>{props.answer}</p>
      </div>
    </>
  );
};
