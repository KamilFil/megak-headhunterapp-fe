import React, {FormEvent, useEffect} from 'react';
import {
    ExpectedContractTypeNames,
    FilterButtonFormFields,
    FilterForm,
    PreferredWorkplaceNames,
} from '../../../types/filter';
import './GraphiteButton.css';

interface Props {
    fields: FilterButtonFormFields;
    name: PreferredWorkplaceNames | ExpectedContractTypeNames | undefined;
    filterForm: FilterForm;
    setFilterForm: (newFilterForm: FilterForm) => void;
}

export const GraphiteButton = ({fields, name, filterForm, setFilterForm}: Props) => {
    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        setFilterForm({
            ...filterForm,
            [fields]: !filterForm[fields],
        });
    };

    useEffect(() => {
        const element: HTMLDivElement | null = document.querySelector(
            `.graphite-button${name?.split(' ').join('')}`,
        );
        element?.classList.toggle('graphite-button--active');
    }, [filterForm[fields]]);

    return (
        <div
            className={`graphite-button graphite-button${name?.split(' ').join('')}`}
            onClick={handleClick}>
            {name}
        </div>
    );
};
