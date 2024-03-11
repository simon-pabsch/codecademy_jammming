import React, {useState, useEffect} from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../tracklist/Tracklist.js';

function SearchResults(props) {
    return(
        <div className={styles.container}>
            <h2>Results</h2>
            <Tracklist resultData={props.resultData} />
        </div>
    );
}

export default SearchResults;