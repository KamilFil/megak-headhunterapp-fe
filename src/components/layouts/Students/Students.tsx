import React, {useEffect, useState} from 'react';
import {ViewSelect} from '../../common/ViewSelect/ViewSelect';
import {NavBar} from '../../common/NavBar/NavBar';
import {SearchBar} from '../../common/SearchBar/SearchBar';
import {StudentsList} from '../../StudentsList/StudentsList';
import {ListFooter} from '../../ListFooter/ListFooter';
import './Students.css';
import {getAllStudents} from '../../../api/api';
import {StudentEntity} from 'types';

export const Students = () => {
    const [viewSelect, setViewSelect] = useState<'studentsList' | 'studentsInterviews'>(
        'studentsList',
    );
    const [students, setStudents] = useState([])
    const [pagesPagination, setPagesPagination] = useState(10);
    const [page, setPage] = useState(1);
    const [studentsAmount, setStudentsAmount] = useState(93);

    useEffect(() => {
        (async () => {
            const res = await getAllStudents()

            setStudents(res.data);
        })()
    }, [])

    return (
        <>
            <NavBar/>
            <div className='students-wrap'>
                <ViewSelect viewSelect={viewSelect} setViewSelect={setViewSelect}/>
                <SearchBar/>
                {viewSelect === 'studentsList' && <StudentsList data={students}/>}
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
