import React from 'react';
import Track from '../track/Track.js';

function Tracklist(props) {

    let tracklistHTML = null;
    
    if(props.data !== undefined) {
        tracklistHTML = (<div>
            {props.data.map((item, index) => (
            <Track key={"Track_"+index} id={index} data={item} addTrack={props.addTrack} deleteTrack={props.deleteTrack} icon={props.icon} />
            ))}
          </div>);
    }
    
    return tracklistHTML;
}

export default Tracklist;