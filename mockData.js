//need mock data for: title, inventory, icons, images

const mockTitleData = {
  productID: 2,
  title: "Men's Classic Synchilla® Fleece Vest",
  category: "Men’s Fleece"
};

const mockIconData = {};

const mockImageData = {
  product_id: 2,
  main_images: [
    'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc052f874/images/hi-res/86210_BLK_OM1.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6',
    'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw3be464ca/images/hi-res/85350_FRE_AH1.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6',
    'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw44ad31c3/images/hi-res/48380_COI_MR2.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6'
  ]
};

const mockInventoryData = {
  productID: 2,
  Colors: {
    industrialGreen: '546B3F',
    bleachedStone: 'C9B491'
  }
};

module.exports = {mockTitleData, mockImageData, mockInventoryData, mockIconData};