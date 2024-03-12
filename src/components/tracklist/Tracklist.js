import React, {useState, useEffect} from 'react';
import styles from './Tracklist.module.css';
import Track from '../track/Track.js';

function Tracklist(props) {
    let tracklistHTML = null;
    if(props.data !== undefined) {
        tracklistHTML = (<div>
            {props.data.map((item, index) => (
            <Track name={"Track_"+index} id={index} title={item.title} artist={item.artist} album={item.album} addTrack={props.addTrack} deleteTrack={props.deleteTrack} icon={props.icon} />
            ))}
          </div>);
    }
    
    return tracklistHTML;
}

export default Tracklist;