import './ProjectLink.css';

interface Props {
  url: string[];
}

export const ProjectLink = (props: Props) => {
  return (
    <>
      {props.url.map((url) => (
        <div key={url} className='listlink'>
          <i className='fa-solid fa-paperclip'></i>
          <a href={url} className='linklist-item'>
            {url}
          </a>
        </div>
      ))}
    </>
  );
};
