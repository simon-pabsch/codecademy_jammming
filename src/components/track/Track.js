import React from 'react';
import styles from './Track.module.css';

function Track(props) {
    const handleClick = () => {
        if(props.icon === "+") {
            props.addTrack(props.data);
        } else {
            props.deleteTrack(props.id);
        }
    }

    return (
        <div>
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>{props.data.name}</h3>
                <p>{props.data.artists[0].name+" | "+props.data.album.name}</p>
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