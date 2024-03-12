import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist.js';

function Playlist(props) {
    return (
        <div className={styles.container}>
            <input className={styles.title} type="text"></input>
            <Tracklist data={props.playlistData} deleteTrack={props.deleteTrack} icon={"-"}/>
            <button className={styles.button}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;