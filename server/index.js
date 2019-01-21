require('dotenv').config()

const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const AuthCtrl=require('./Auth')
const nodemailer = require('nodemailer')

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, ACCESS_TOKEN, CLIENT_SECRET } = process.env

const app = express()
app.use(bodyParser.json())

//added bodyParser session and massive
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false
  }))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
})



// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile(__dirname + '/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), (auth) => {
      app.set('auth', auth)
  });
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
app.get('/files', listFiles)


function listFiles(req, response) {
    const auth = req.app.get('auth')
    const drive = google.drive({version: 'v3', auth});
    drive.files.list({
      pageSize: 175,
      fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res.data.files;
      if (files.length) {
        response.send(files).status(200)
      } else {
        console.log('No files found.');
      }
    });
  }



//Auth.js
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.getCurrentUser)

//Nodemailer
app.post('/email', async (req, response) => {
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'theclubstudio18@gmail.com',
    clientId: '434411378374-1er3ai6j485af1109lppqobrv3j9p9fb.apps.googleusercontent.com',
    clientSecret: CLIENT_SECRET,
    refreshToken: '1/u5Pi30_kQWqLaAyFwAyqSp396aEoAffLu-zsXLrgpH4',
    accessToken: ACCESS_TOKEN
  }
})
  try {
    let { text } = req.body
    var mailOptions = {
      from: 'The Club Studio',
      to: 'theclubstudio18@gmail.com',
      subject: 'Movie Request',
      text: text
    }
    
    transporter.sendMail(mailOptions, function(err, res){
      if(err){
        console.log('Error', err)
      } else {
        console.log('Email Sent')
        response.status(200).send('Email Sent')
      }
    })
  }catch(error) {
    console.log(error)
    response.status(500).send(error)
  }
})






app.listen(SERVER_PORT, () => {
    console.log('listening on port', SERVER_PORT)
})

