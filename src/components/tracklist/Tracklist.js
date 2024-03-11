import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../track/Track.js';

function Tracklist() {
    return (
        <div>
            <Track />
            <Track />
        </div>      
    );
}

export default Tracklist;