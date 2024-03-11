import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/searchbar/SearchBar.js';
import SearchResults from './components/searchresults/SearchResults.js';
import Playlist from './components/playlist/Playlist.js';

function App() {
  //Mockdata
  const [result, setResult] = useState([]);
  const mockData = [
    {title: 'Songtitle1',
    artist: 'Artist1',
    album: 'Album1'},
  
    {title: 'Songtitle2',
    artist: 'Artist2',
    album: 'Album2'},
  
    {title: 'Songtitle3',
    artist: 'Artist3',
    album: 'Album3'}
  ]

  
  
  const search = (searchText) => {
    if(searchText === "" || searchText === "Please enter song title") {
      setResult([]);
    } else {
      setResult(mockData);
    }
  }
  
  return (
    <div className="App">
      <section className="input">
        <SearchBar onSearch={search}/>
      </section>
      <section className="results">
        <SearchResults resultData={result} />
        <Playlist />
      </section>
    </div>
  );
}

export default App;
