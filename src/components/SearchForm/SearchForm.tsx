import React, {FormEvent} from 'react';
import {SearchMark} from '../SearchMark/SearchMark';
import './SearchForm.css';

export const SearchForm = () => {
    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className='search-form' onSubmit={handleSearch}>
            <input type='text' placeholder='szukaj' className='search-form--input'/>
            <SearchMark/>
        </form>
    );
};
