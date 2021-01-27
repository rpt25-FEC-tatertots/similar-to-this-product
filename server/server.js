const express = require('express');


const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/similar', (req, res) => {
  res.send(200)
})

app.listen(6008, function () {
  console.log('listening on port 3000!');
})