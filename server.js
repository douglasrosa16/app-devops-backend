const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();
app.use(cors());
//var port = process.env.PORT || 8080;

app.get("/dados", (req, res) => {
  return res.json(data);
});

//app.listen(port);

app.listen(3333);