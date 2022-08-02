import React from 'react';
import {SearchForm} from '../../SearchForm/SearchForm';
import {Filter} from '../Filter/Filter';
import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className='search-bar'>
            <SearchForm/>
            <Filter/>
        </div>
    );
};
