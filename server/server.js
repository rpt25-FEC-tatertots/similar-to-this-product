const express = require('express');
const db = require('../database/schema.js');
const axios = require('axios');

const app = express();

// app.use('/:product_id', express.static('./public/dist'));
app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/similar', async (req, res) => {
  const { product_id } = req.query;
  try {
    const associatedProductNumbers = await db.getAssociatedProductNums(product_id)
    //for each productNumber in the array, it needs to collect all the necessary data from the other apis
    const allProductData = associatedProductNumbers.map(async (productNumber) => {
      try {
        const titleInfo = await axios.get(`/title/?product_id=${productNumber}`)
        const inventoryInfo = await axios.get(`/inventory/?product_id=${productNumber}`)
        const iconInfo = await axios.get(`overview/icons/?product_id=${productNumber}`)
        const imagesInfo = await axios.get(`/images/mainImages/?product_id=${productNumber}`)
      } catch (err) {
        console.log('ERROR INSIDE CATCH BLOCK OF SERVER DISTRIBUTION: ', err)
      }
    })

    console.log('ALL PRODUCT DATA:', allProductData)
  } catch (error) {
    console.log('ERROR IN SERVER: ', error)
  }
  //needs to then send all this information back to be rendered
  // res.send(200)
})

app.get('/title/', (req, res) => {
  // res.send(mockTitleData)
  console.log('HIT TITLE API')
  res.send(200)
})

app.get('/inventory/', (req, res) => {
    // res.send(mockInventoryData)
    res.send(200)
})

app.get('overview/icons/', (req, res) => {
  // res.send(mockIconData)
  res.send(200)
})

app.get('/images/mainImages/', (req, res) => {
    // res.send(mockImageData)
    res.send(200)
})

app.listen(6008, function () {
  console.log('listening on port 3000!');
})