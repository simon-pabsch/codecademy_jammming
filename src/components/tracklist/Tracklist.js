import React, {useState, useEffect} from 'react';
import styles from './Tracklist.module.css';
import Track from '../track/Track.js';

function Tracklist(props) {

    let tracklistHTML = null;
    if(props.resultData !== undefined) {
        tracklistHTML = (<div>
            {props.resultData.map((item, index) => (
            <Track id={"Track_"+index} title={item.title} artist={item.artist} album={item.album}/>
            ))}
          </div>);
    }
    
    return tracklistHTML;
}

export default Tracklist;