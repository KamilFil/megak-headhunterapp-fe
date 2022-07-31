// import './CvRequirmentItem.css';

interface Props {
  question: string;
  answer: string | number;
}

export const CvRequirmentItem = (props: Props) => {
  return (
    <>
      <div className='coursant_requirment-item'>
        <p className='coursant_requirment_item-title'>{props.question}</p>
        <p className='coursant_requirment_item-answer'>{props.answer}</p>
      </div>
    </>
  );
};
