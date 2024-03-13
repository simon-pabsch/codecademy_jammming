import React, {useState} from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const defaultText = "Please enter song title";
    const [searchText, setsearchText] = useState(defaultText);
    const [clicked, setClicked] = useState(false);

    const handleChange = (event) => {
        setsearchText(event.target.value);
    }

    const handleClick = (event) => {
        if(!clicked) {
            setClicked(true);
            setsearchText("");
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(searchText === defaultText || searchText === "") {
            setsearchText(defaultText);
            setClicked(false);
        }
        //This line calls the function "search" of App.js
        props.onSearch(searchText);
        
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input id="searchTextfield" className={styles.textfield} type="text" value={searchText} onChange={handleChange} onClick={handleClick}></input>
            <button className={styles.button} type="submit">SEARCH</button>
        </form>
    );
}

export default SearchBar;