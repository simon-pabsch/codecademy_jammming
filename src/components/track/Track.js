import React from 'react';
import styles from './Track.module.css';

function Track(props) {
    const handleClick = () => {
        //alert(props.title+ " " +props.artist+" " +props.album);
        const trackObj = {title: props.title, artist: props.artist, album: props.album};
        if(props.icon === "+") {
            props.addTrack(trackObj);
        } else {
            props.deleteTrack(props.id);
        }
    }

    
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>{props.title}</h3>
                <p>{props.artist+" | "+props.album}</p>
            </div>
            <div className={styles.right} onClick={handleClick}>
                <span>{props.icon}</span>
            </div>
        </div>
        <hr />
        </div>      
    );
}

export default Track;