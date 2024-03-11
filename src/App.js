import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar/SearchBar.js';
import SearchResults from './components/searchresults/SearchResults.js';
import Playlist from './components/playlist/Playlist.js';

function App() {
  //Mockdata
  const result = [
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

  return (
    <div className="App">
      <section className="input">
        <SearchBar />
      </section>
      <section className="results">
        <SearchResults />
        <Playlist />
      </section>
    </div>
  );
}

export default App;
