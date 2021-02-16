const { google } = require('googleapis');
const config = require('config');
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(config.client_email, null, config.private_key, scopes)

const view_id = '224048666';

// hit view_id (public) -> get data --> not effeciant
// 

console.log(config.private_key);

async function getData() {
  const response = await jwt.authorize()
  const result = await google.analytics('v3').data.ga.get({
    'auth': jwt,
    'ids': 'ga:' + view_id,
    'start-date': '30daysAgo',
    'end-date': 'today',
    'metrics': 'ga:pageviews'
  })

  console.dir(result)
}

getData()