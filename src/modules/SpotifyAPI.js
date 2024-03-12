async function getAccessToken() {
// Your Spotify application credentials
const clientId = 'INSERT CLIENT-KEY here';
const clientSecret = 'INSERT CLIENT-SECRET here';

// Authenticate and get an access token
const authUrl = 'https://accounts.spotify.com/api/token';
const authData = new URLSearchParams();
authData.append('grant_type', 'client_credentials');
authData.append('client_id', clientId);
authData.append('client_secret', clientSecret);

let response = await fetch(authUrl, {
  method: 'POST',
  body: authData
})
.then(response => response.json())
.then(tokenResponse => tokenResponse.access_token)
.catch(error => console.log('Error fetching access token:', error));

return response;
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

export {getAccessToken, getSongs};