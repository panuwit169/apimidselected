const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require("cors")
var firebase = require('firebase');
var config = {
    apiKey: 'AIzaSyDQrZ0d7YIm036NTdrt_MM5fXAS7zw_xsE',
    authDomain: 'test-64357.firebaseapp.com',
    databaseURL: 'https://test-64357.firebaseio.com',
    storageBucket: 'test-64357.appspot.com',
    messagingSenderId: '696747911221' 
}
firebase.initializeApp(config);
app.use(cors())
app.use(bodyParser.json())
var database = firebase.database();

app.get('/', async function(req, res) {
    let province = []
    await database.ref('highwayvehicles').once('value').then(function(snapshot) {
        province = snapshot.val()
    })
    res.send(province)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))