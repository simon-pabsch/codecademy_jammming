import React from 'react';
import Tracklist from '../tracklist/Tracklist.js';
import styles from './Playlist.module.css';

function Playlist(props) {
    
    const handleClick = (event) => {
        //This line calls the function "saveToSpotify" of App.js
        props.saveToSpotify(document.getElementById('playlistTitle').value, props.playlistData);
    }

    return (
        <div className={styles.container}>
            <input id="playlistTitle" className={styles.title} type="text"></input>
            <Tracklist data={props.playlistData} deleteTrack={props.deleteTrack} icon={"-"}/>
            <button className={styles.button} onClick={handleClick}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;