const faker = require('faker');
const db = require('./schema.js');

// generate fake data to add to my database
/*
  example entries:

  {productNumber: 1,
  associatedProductNumbers: [2, 3, 4, 5]
  }

*/

// random number generator function generates a random number between 0 and 'num'
const randomNumberGenerator = (num) => {
  return faker.random.number(num)
};

const generateOneRecord = (newProductNumber, arrayOfProductNumbers) => {
  const newRecord = {
    productNumber: newProductNumber,
    associatedProductNumbers: arrayOfProductNumbers
  }
  return newRecord;
}

const generateAssociatedProductsArray = () => {
  const arrayOfAssociatedProductNumbers = [];
  for (i = 0; i < 10; i++) {
    const randomProductNumber = randomNumberGenerator(100);
    arrayOfAssociatedProductNumbers.push(randomProductNumber);
  }
  return arrayOfAssociatedProductNumbers;
}

generate100Records = () => {
  const arrayOf100Records = [];
  for ( let i = 1; i <= 100; i++) {
    const associatedProducts = generateAssociatedProductsArray();
    arrayOf100Records.push(generateOneRecord(i, associatedProducts));
  }
  return arrayOf100Records;
}


// generate 100 entries
const generatedData = generate100Records();

// when this file is ran, add all the data to the database
db.saveCollection(generatedData)
  .then(() => {
    console.log('SUCCESSFULLY SAVED ALL THE DATA TO THE DATABASE');
  })
  .catch(err => {
    console.log('ERROR IN FAKE DATA SAVE: ', err);
  })