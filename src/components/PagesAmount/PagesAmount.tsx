import React, {Dispatch, SetStateAction, SyntheticEvent} from 'react';
import './PagesAmount.css';

interface Props {
    studentsAmount: number;
    setVisible: Dispatch<SetStateAction<boolean>>;
    setPagesPagination: (newPagesPagination: number) => void;
    setPage: (newPage: number) => void;
}

export const PagesAmount = ({studentsAmount, setVisible, setPagesPagination, setPage}: Props) => {
    const handleClick = (e: SyntheticEvent) => {
        setPagesPagination(Number(e.currentTarget.id));
        setPage(1);
        setVisible(false);
    };

    return (
        <div className='pages-amount'>
            <a onClick={handleClick} id={'10'}>
                10
            </a>
            <a onClick={handleClick} id={'20'}>
                20
            </a>
            <a onClick={handleClick} id={String(studentsAmount)}>
                {studentsAmount}
            </a>
        </div>
    );
};
