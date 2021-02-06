const express = require('express');
const db = require('../database/schema.js');
const mockData = require('../mockData.js');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.static('./public/dist'));
app.use('/:product_id', express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());
// app.use(cors());

app.get('/similar/:product_id', async (req, res) => {
  const { product_id } = req.params;
  try {
    const associatedProductNumbers = await db.getAssociatedProductNums(product_id)
    // const allInfo = await Promise.all(associatedProductNumbers.map(async (productNum) => {
    //   const overviewData = await axios.get(`http://localhost:5007/overview/${productNum}`)
    //   // const titleData = await axios.get(`http://localhost:5000/title/${productNum}`)
    //   // const imagesData = await axios.get(`http://localhost:5000/images/mainImages/${productNum}`)
    //   // const inventoryData = await axios.get(`http://localhost:5000/inventory/${productNum}`)
    //   return {
    //     // product_id: titleData.data.productID,
    //     iconsInfo: overviewData.data.icons,
    //     // titleInfo: titleData.data,
    //     // imagesInfo: imagesData.data,
    //     // inventoryInfo: inventoryData.data
    //   };

    // })
    // )
    // console.log('ALL INFO 🥁🥁🥁🥁🥁🥁🥁', allInfo)
    // res.send(allInfo)
    } catch (error) {
      console.log('ERROR IN SERVER: ', error)
    }
  // FOR DEV PURPOSES WE ARE JUST SENDING MOCK DATA SO I CAN BUILD OUT A FRONT END THAT WORKS
  res.send(mockData)
})

app.listen(5008, function () {
  console.log('listening on port 5008!');
})