import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../tracklist/Tracklist.js';

function SearchResults() {
    return(
        <div className={styles.container}>
            <h2>Results</h2>
            <Tracklist />
        </div>
    );
}

export default SearchResults;