import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist.js';
//Enter playlisttitle textfield above Tracklist
function Playlist() {
    return (
        <div className={styles.container}>
            <input className={styles.title} type="text"></input>
            <Tracklist />
            <button className={styles.button}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;