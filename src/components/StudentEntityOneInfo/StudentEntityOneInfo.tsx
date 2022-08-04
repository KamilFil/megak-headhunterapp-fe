import React from 'react';
import './StudentEntityOneInfo.css';

interface Props {
    title: string;
    mainInfo: string | null;
    additionalInfo?: string;
}

export const StudentEntityOneInfo = ({title, mainInfo, additionalInfo}: Props) => {
    return (
        <div className='student-entity-one-info'>
            <p className='student-entity-one-info__title'>{title}</p>
            <div className='student-entity-one-info__wrap'>
                <p className='student-entity-one-info__wrap-main'>{mainInfo}</p>
                <p className='student-entity-one-info__wrap-additional'>{additionalInfo}</p>
            </div>
        </div>
    );
};
