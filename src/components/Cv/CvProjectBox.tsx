import { StudentEntity } from 'types';
import { ProjectLink } from '../common/ProjectLink';

interface Props {
  title: string;
  data: string[];
}

export const CvProjectBox = (props: Props) => {
  return (
    <div className='coursant-projectbox'>
      <h2 className='coursant_projectbox-title'>{props.title}</h2>
      <div key={props.title} className='coursant-projectbox_container'>
        <ProjectLink url={props.data} />
      </div>
    </div>
  );
};
