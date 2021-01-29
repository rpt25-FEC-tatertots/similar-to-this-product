const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/similarToThisProduct', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
  console.log('CONNECTION TO DATABASE SUCCESSFUL');
  });

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

const firstTestProduct = new Product({
  productNumber: 1,
  associatedProductNumbers: [2, 3, 4, 5, 6]
})

firstTestProduct.save(function(err) {
  if (err) console.log('ERROR SAVING INTO DB');
})

Product.find(function (err, products) {
  if (err) console.log('ERROR RETURNING FROM DB');
  console.log('RETRIEVED FROM DB: ', products);
});
