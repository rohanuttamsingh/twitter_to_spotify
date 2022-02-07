const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3001;
app.listen(PORT, () => console.log('Listening on port ' + PORT));

const twitter_base_url = 'https://api.twitter.com/2/'

/**
 * With a valid Twitter username, sends corresponding account's Twitter ID. Sends '-1' for any invalid username.
 */
app.get('/api/username_to_id/:username', (req, res) => {
  console.log(req);
  axios.get(twitter_base_url + 'users/by/username/' + req.params['username'], {
    headers: {'Authorization': 'Bearer ' + process.env.TWITTER_BEARER_TOKEN}
  })
    .then(response => {
      if (response.data.errors) {
        res.send('-1');
      } else {
        res.send(response.data.data.id)
      }
    })
    .catch(err => console.log(err));
})