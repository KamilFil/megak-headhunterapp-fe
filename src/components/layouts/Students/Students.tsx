import React, { useEffect, useState } from 'react';
import { ViewSelect } from '../../common/ViewSelect/ViewSelect';
import { NavBar } from '../../common/NavBar/NavBar';
import { SearchBar } from '../../common/SearchBar/SearchBar';
import { StudentsList } from '../../StudentsList/StudentsList';
import { ListFooter } from '../../ListFooter/ListFooter';
import './Students.css';
import { getAllStudents, getAllStudentsToCall } from '../../../api/api';
import { StudentsInterviewsList } from '../../StudentsInterviewsList/StudentsInterviewsList';

export const Students = () => {
  const [viewSelect, setViewSelect] = useState<'studentsList' | 'studentsInterviews'>(
    'studentsList',
  );
  const [students, setStudents] = useState([]);
  const [studentsInterviews, setStudentsInterviews] = useState([]);
  const [pagesPagination, setPagesPagination] = useState(10);
  const [page, setPage] = useState(1);
  const [studentsAmount, setStudentsAmount] = useState(93);

  useEffect(() => {
    (async () => {
      const res = await getAllStudents();

      setStudents(res.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getAllStudentsToCall('1');

      setStudentsInterviews(res.data);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <div className='students-wrap'>
        <ViewSelect viewSelect={viewSelect} setViewSelect={setViewSelect} />
        <SearchBar />
        {viewSelect === 'studentsList' ? (
          <StudentsList data={students} />
        ) : (
          <StudentsInterviewsList data={studentsInterviews} />
        )}
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
