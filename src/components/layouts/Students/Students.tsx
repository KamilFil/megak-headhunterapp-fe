import React, { useEffect, useState } from 'react';
import { ViewSelect } from '../../common/ViewSelect/ViewSelect';
import { NavBar } from '../../common/NavBar/NavBar';
import { SearchBar } from '../../common/SearchBar/SearchBar';
import { StudentsList } from '../../StudentsList/StudentsList';
import { ListFooter } from '../../ListFooter/ListFooter';
import './Students.css';
import { StudentsInterviewsList } from '../../StudentsInterviewsList/StudentsInterviewsList';
import { UserEntity } from 'types';

interface Props {
  data: UserEntity | null;
}

export const Students = (props: Props) => {
  const [viewSelect, setViewSelect] = useState<'studentsList' | 'studentsInterviews'>(
    'studentsList',
  );
  const [pagesPagination, setPagesPagination] = useState(10);
  const [page, setPage] = useState(1);
  const [studentsAmount, setStudentsAmount] = useState(93);

  return (
    <>
      <NavBar data={props.data} />
      <div className='students-wrap'>
        <ViewSelect viewSelect={viewSelect} setViewSelect={setViewSelect} />
        <SearchBar />
        {viewSelect === 'studentsList' ? <StudentsList /> : <StudentsInterviewsList />}
        <ListFooter
          pagesPagination={pagesPagination}
          page={page}
          studentsAmount={studentsAmount}
          setPagesPagination={setPagesPagination}
          setPage={setPage}
        />
      </div>
    </>
  );
};
