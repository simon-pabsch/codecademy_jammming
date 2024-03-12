import React, {useState, useEffect} from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../tracklist/Tracklist.js';

function SearchResults(props) {
    return(
        <div className={styles.container}>
            <h2>Results</h2>
            <Tracklist data={props.resultData} addTrack={props.addTrack} icon={"+"} />
        </div>
    );
}

export default SearchResults;