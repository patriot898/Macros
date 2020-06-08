require('dotenv').config();
require('../database/index.js')
const express = require('express');
const app = express();
const path = require('path');
const controller = require('../database/queries.js');
const $ = require('jquery');

const port = process.env.PORT || 3001;
const public = path.join(__dirname, '../client/dist');
const edamam= require('../edamam.config.js');

app.use(express.static(public));

app.listen(port, () => {
  console.log(`Meal Planner Connected on ${port}`);
});

app.get('/recipes', (req, res) => {
  console.log('Responding to get request');
  controller.getRecipes((err, recipes) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(recipes);
    }
  });


});

app.post('/nutrition', (req, res) => {
  const data = req.body;
  data.app_id = edamam.ID;
  data.app_key = edamam.KEY;
  $.ajax({
    method: 'post',
    url: `${edamam.URL}?app_id=${edamam.ID}&app_key=${edamam.KEY}`,
    data,
    dataType: 'json',
    contentType: 'application/json',
    success: (responseData) => {
      console.log(responseData);
      res.status(200).send(responseData);
    },
    error: (err) => {
      console.log(err);
      res.status(500).send(err);
    }
  });

});

app.post('/recipes', (req, res) => {
  controller.addRecipe(req.body, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.sendStatus(400);
    }
  });
});







