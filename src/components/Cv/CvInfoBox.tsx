interface Props {
  title: string;
  answer: string;
}

export const CvInfoBox = (props: Props) => {
  return (
    <div className='coursant-infobox'>
      <h2 className='coursant_infobox-title'>{props.title}</h2>
      <div className='coursant_infobox-item'>
        <p className='coursant_infobox_item-answer'>{props.answer}</p>
      </div>
    </div>
  );
};
