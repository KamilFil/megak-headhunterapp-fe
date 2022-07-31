interface Props {
  url: string;
}

export const CvProjectLink = (props: Props) => {
  return (
    <div className='coursant_projectbox-listlink'>
      <i className='fa-solid fa-paperclip-vertical'></i>
      <a href={props.url} className='coursant-projectbox_linklist-item'>
        Github
      </a>
    </div>
  );
};
