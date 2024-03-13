import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchbar/SearchBar.js';
import SearchResults from './components/searchresults/SearchResults.js';
import Playlist from './components/playlist/Playlist.js';
import {getAccessToken, getSongs, savePlaylistToSpotify} from './modules/SpotifyAPI.js';

function App() {
  const [result, setResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(getAccessToken(accessToken));
  },[]);
  
  const search = (searchText) => {
    if(searchText !== "" && searchText !== "Please enter song title") {
      getSongs(accessToken, searchText).then(response => {
        setResult(response.tracks.items);
    });
  }
}
  const saveToSpotify = (title, playlistArray) => {
    savePlaylistToSpotify(accessToken, title, playlistArray);
  }

  const addTrackToPlaylist = (trackObj) => {
    setPlaylist([...playlist, trackObj]);
  }

  const deleteTrackFromPlaylist = (index) => {
    setPlaylist(playlist => {return playlist.filter((_, i) => i !== index)});
  }
  
  return (
    <div className="App">
      <section className="input">
        <SearchBar onSearch={search} token={accessToken}/>
      </section>
      <section className="results">
        <SearchResults resultData={result} addTrack={addTrackToPlaylist}/>
        <Playlist playlistData={playlist} deleteTrack={deleteTrackFromPlaylist} saveToSpotify={saveToSpotify} />
      </section>
    </div>
  );
}

export default App;
