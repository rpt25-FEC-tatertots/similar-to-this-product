const express = require('express');
const db = require('../database/schema.js');
const mockData = require('../mockData.js');
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
    } catch (error) {
      console.log('ERROR IN SERVER: ', error)
    }
  // FOR DEV PURPOSES WE ARE JUST SENDING MOCK DATA SO I CAN BUILD OUT A FRONT END THAT WORKS
  res.send(mockData)
})

// app.get('/title/', (req, res) => {
//   // res.send(mockData.mockTitleData)
//   console.log('HIT TITLE API')
//   res.send('SUCCESS IN TITLE API')
// })

// app.get('/inventory/', (req, res) => {
//     // res.send(mockData.mockInventoryData)
//     res.send(200)
// })

// app.get('overview/icons/', (req, res) => {
//   // res.send(mockData.mockIconData)
//   res.send(200)
// })

// app.get('/images/mainImages/', (req, res) => {
//     // res.send(mockData.mockImageData)
//     res.send(200)
// })

app.listen(6008, function () {
  console.log('listening on port 6008!');
})