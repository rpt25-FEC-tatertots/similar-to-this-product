const express = require('express');
const db = require('../database/schema.js');
const mockData = require('../mockData.js');
const axios = require('axios');

const app = express();

// app.use('/:product_id', express.static('./public/dist'));
app.use('/:product_id', express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/similar/:product_id', async (req, res) => {
  const { product_id } = req.params;
  try {
    const associatedProductNumbers = await db.getAssociatedProductNums(product_id)
    const allInfo = await Promise.all(associatedProductNumbers.map(async (productNum) => {
      const overviewData = await axios.get(`http://3.16.235.27:5007/icons/${productNum}`)
      const titleData = await axios.get(`http://54.241.34.87:5005/title/${productNum}`)
      const imagesData = await axios.get(`http://54.241.34.87:5003/images/mainImages/${productNum}`)
      const inventoryData = await axios.get(`http://54.241.34.87:5004/inventory/${productNum}`)
      return {
        product_id: titleData.data.productID,
        iconsInfo: overviewData.data.icons,
        titleInfo: titleData.data,
        imagesInfo: imagesData.data,
        inventoryInfo: inventoryData.data
      };

    })
    )
    res.send(allInfo)
    } catch (error) {
      console.log('ERROR IN SERVER: ', error)
      res.send(404);
    }
})

app.listen(5008, function () {
  console.log('listening on port 5008!');
})