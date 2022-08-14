import { NavBar } from '../../common/NavBar/NavBar';
import { StudentForm } from '../../StudentForm/StudentForm';

export const StudentsFormEdit = () => {
  return (
    <>
      <NavBar />
      <div className='students-wrap'>
        <StudentForm />
      </div>
    </>
  );
};
