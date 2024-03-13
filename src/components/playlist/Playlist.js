import React, {useEffect} from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist.js';
import {getURIList, getPlaylistTitle} from '../../modules/SpotifyAPI.js';

function Playlist(props) {

    const handleClick = (event) => {
        props.saveToSpotify(document.getElementById('playlistTitle').value, props.playlistData);
        console.log(getURIList());
        console.log(getPlaylistTitle());
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