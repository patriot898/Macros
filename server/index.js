require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const controller = require('../database/queries.js');

const port = process.env.PORT || 3001;
const public = path.join(__dirname, '../client/dist');

app.use(express.static(public));

app.listen(port, () => {
  console.log(`Meal Planner Connected on ${port}`);
});

app.get('/recipes', (req, res) => {
  controller.getRecipes((err, recipes) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(recipes);
    }
  })


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







