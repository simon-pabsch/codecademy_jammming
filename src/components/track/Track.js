import React from 'react';
import styles from './Track.module.css';

function Track() {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>Test</h3>
                <p>Testtext</p>
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