import React, {useContext, useEffect, useState} from 'react';
import './BlackButton.css';
import {FilterFormContext} from '../../../context/FilterFormContext';

interface Props {
    name: string;
    type: 'button' | 'submit' | 'reset' | undefined;
}

export const BlackButton = ({name, type}: Props) => {
    const {filterForm, setFilterForm} = useContext(FilterFormContext);
    const [oldFilterForm, setOldFilterForm] = useState(filterForm);

    useEffect(() => {
        setOldFilterForm(filterForm);
    }, [filterForm.visibleFilterMenu]);

    return (
        <button
            type={type}
            className='black-button'
            onClick={() => {
                setFilterForm({
                    ...oldFilterForm,
                    visibleFilterMenu: false,
                });
            }}>
            {name}
        </button>
    );
};
