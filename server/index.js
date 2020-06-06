require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const public = path.join(__dirname, '../client/dist');

app.use(express.static(public));

app.listen(port, () => {
  console.log(`Meal Planner Connected on ${port}`);
});

app.get('/mains', (req, res) => {

});

app.get('/snacks', (req, res) => {

});

app.get('/sides', (req, res) => {

});

app.get('/shakes', (req, res) => {

});

app.post('/mains', (req, res) => {

});

app.post('/snacks', (req, res) => {

});

app.post('/sides', (req, res) => {

});

app.post('/shakes', (req, res) => {

});





