import React from 'react';
import { Input } from '@mui/material';
import styles from './Search.module.scss';


const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className={styles.form}>
      <Input 
        onChange = {(e) => {
          setPageNumber(1);
          setSearch(e.target.value)
        }} 
        autoComplete =' true' 
        placeholder = 'Search by name' 
        type = 'text' 
        className = {styles.form__input} />
    </form>
  );
};

export default Search;
