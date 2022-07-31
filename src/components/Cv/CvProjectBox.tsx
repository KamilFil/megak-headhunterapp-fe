import { StudentEntity } from 'types';
import { CvProjectLink } from './CvProjectLink';

interface Props {
  title: string;
  data: StudentEntity[];
}

export const CvProjectBox = (props: Props) => {
  return (
    <div className='coursant-projectbox'>
      <h2 className='coursant_projectbox-title'>{props.title}</h2>
      {props.data.map((student) => (
        <>
          <CvProjectLink url={student.projectUrls} />
        </>
      ))}
    </div>
  );
};
