const express = require('express');


const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());


app.listen(3000, function () {
  console.log('listening on port 3000!');
})