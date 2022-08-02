import React from 'react';
import './ViewSelect.css';

interface Props {
    viewSelect: 'studentsList' | 'studentsInterviews';
    setViewSelect: (newViewSelect: 'studentsList' | 'studentsInterviews') => void;
}

export const ViewSelect = ({viewSelect, setViewSelect}: Props) => {
    return (
        <div className='view-select--wrap'>
            <a
                className={
                    viewSelect === 'studentsList' ? 'view-select view-select--active' : 'view-select'
                }
                onClick={() => setViewSelect('studentsList')}>
                Dostępni kursanci
            </a>
            <a
                className={
                    viewSelect === 'studentsInterviews' ? 'view-select view-select--active' : 'view-select'
                }
                onClick={() => setViewSelect('studentsInterviews')}>
                Do rozmowy
            </a>
        </div>
    );
};
