// require syntax
const Unsplash = require('unsplash-js').default;
const fetch = require('node-fetch');
const ASSESS_TOKEN = '7a96a77d719e9967f935da53784d6a3eb58a4fb174dda25e89ec69059e46c815'
module.exports = {
  fetch: fetch,
  unsplash: new Unsplash({ accessKey: ASSESS_TOKEN })
}
$http.defaults.headers.common['Authorization'] = `Client-ID ${ASSESS_TOKEN}`;
