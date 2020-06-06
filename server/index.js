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