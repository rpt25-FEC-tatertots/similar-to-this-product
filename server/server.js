const express = require('express');
const db = require('../database/schema.js');
const mockData = require('../mockData.js');
const axios = require('axios');

const app = express();

app.use(express.static('./public/dist'));
app.use('/:product_id', express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/similar/:product_id', async (req, res) => {
  const { product_id } = req.params;
  try {
    const associatedProductNumbers = await db.getAssociatedProductNums(product_id)
    // this sends a request through the proxy to the Overviews service to get overview icon information
    const { data } = await axios.get(`http://localhost:5000/overview/${product_id}`)
    console.log('OVERVIEW RESPONSE', data.icons)
    } catch (error) {
      console.log('ERROR IN SERVER: ', error)
    }
  // FOR DEV PURPOSES WE ARE JUST SENDING MOCK DATA SO I CAN BUILD OUT A FRONT END THAT WORKS
  res.send(mockData)
})

app.listen(5008, function () {
  console.log('listening on port 5008!');
})