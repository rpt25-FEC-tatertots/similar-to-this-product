const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/similarToThisProduct', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    console.log('CONNECTION TO DATABASE SUCCESSFUL');
    // init();
  });

// const init = () => {
//   const productSchema = new mongoose.Schema({
//     productNumber: {
//       type: Number,
//       unique: true,
//       index: true,
//       min: 0,
//       max: 101
//     },
//     associatedProductNumbers: [Number]
//   });

//   const Product = mongoose.model('Product', productSchema);
// };

const productSchema = new mongoose.Schema({
  productNumber: {
    type: Number,
    unique: true,
    index: true,
    min: 0,
    max: 101
  },
  associatedProductNumbers: [Number]
});

const Product = mongoose.model('Product', productSchema);

db.saveCollection = async (incomingEntries) => {
  await Product.create(incomingEntries)
  db.close();
}

db.getAssociatedProductNums = async (incomingProductNum) => {
  const entireRecord = await Product.find({productNumber: incomingProductNum}).exec();
  const {associatedProductNumbers} = entireRecord[0];
  return associatedProductNumbers;
}

module.exports = db;