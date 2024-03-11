import React from 'react';
import styles from './Track.module.css';

function Track(props) {
    
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>{props.title}</h3>
                <p>{props.artist+" | "+props.album}</p>
            </div>
            <div className={styles.right}>
                <span>+</span>
            </div>
        </div>
        <hr />
        </div>      
    );
}

export default Track;