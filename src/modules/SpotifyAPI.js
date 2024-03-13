let uriList = [];
let playlistTitle = "";

// Insert client ID here.
const clientId = 'Enter Client-ID here';
// Have to add this to your accepted Spotify redirect URIs on the Spotify API.
const redirectUri = 'Enter redirectUri here';

function getAccessToken(accessToken) {

  if (accessToken) {
    return accessToken;
  }

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
    return accessToken;
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  }
}

async function getSongs(accessToken, searchText) {
  let response = await fetch(`https://api.spotify.com/v1/search?q=${searchText}&type=track`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  return response;
}

function setSpotifyData(title, array) {
  playlistTitle = title;
  uriList = array.map(item => item.uri);
}

async function savePlaylistToSpotify(accessToken, title, array) {
  setSpotifyData(title, array);
  
  const headers = { Authorization: `Bearer ${accessToken}` };
  let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistTitle})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: uriList})
        });
      });
    });
}

export {getAccessToken, getSongs, savePlaylistToSpotify};