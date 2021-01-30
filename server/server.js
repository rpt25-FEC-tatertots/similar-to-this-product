const express = require('express');


const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/similar', (req, res) => {
  // needs to get the product numbers (array) related to the current product number
  //for each productNumber in the array, it needs to collect all the necessary data from the other apis
  //needs to then send all this information back to be rendered
  res.send(200)
})

// need to add routes for the following:

// title API to get color info, pricing, and product names
// overviewAPI to get icon information
// photo API to get photos for eact product

app.listen(6008, function () {
  console.log('listening on port 3000!');
})