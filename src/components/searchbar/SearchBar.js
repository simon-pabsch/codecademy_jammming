import React from 'react';
import styles from './SearchBar.module.css';


function SearchBar(props) {
    return (
        <form className={styles.form}>
            <input className={styles.textfield} type="text"></input>
            <button className={styles.button} type="submit">Search</button>
        </form>
    );
}

export default SearchBar;