//need mock data for: title, inventory, icons, images

const mockData = [
  // {
  //   product_id: 35,
  //   mockTitleData: {
  //     product_id: 35,
  //     title: "Men's Classic Synchilla® Fleece Vest",
  //     category: "Men’s Fleece"
  //   },
  //   mockImageData: {
  //     product_id: 35,
  //     main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc052f874/images/hi-res/86210_BLK_OM1.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6']
  //   },
  //   mockInventoryData: {
  //     productID: 35,
  //     Colors: {
  //       industrialGreen: '546B3F',
  //       bleachedStone: 'C9B491'
  //     },
  //     price: '$55'
  //   }
  // },
  // {
  //   product_id: 15,
  //   mockTitleData: {
  //     product_id: 15,
  //     title: 'Title for Product 15',
  //     category: 'Category for Product 15'
  //   },
  //   mockImageData: {
  //     product_id: 15,
  //     main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw3be464ca/images/hi-res/85350_FRE_AH1.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6']
  //   },
  //   mockInventoryData: {
  //     productID: 15,
  //     Colors: {
  //       industrialGreen: '546B3F',
  //       bleachedStone: 'C9B491'
  //     },
  //     price: '$75'
  //   }
  // },
  // {
  //   product_id: 22,
  //   mockTitleData: {
  //     product_id: 22,
  //     title: 'Title for Product 22',
  //     category: 'Category for Product 22'
  //   },
  //   mockImageData: {
  //     product_id: 22,
  //     main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw44ad31c3/images/hi-res/48380_COI_MR2.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6']
  //   },
  //   mockInventoryData: {
  //     productID: 22,
  //     Colors: {
  //       industrialGreen: '546B3F',
  //       bleachedStone: 'C9B491'
  //     },
  //     price: '$588'
  //   }
  // },
  {
    product_id: 31,
    mockTitleData: {
      product_id: 31,
      title: 'Title for Product 31',
      category: 'Category for Product 31'
    },
    mockImageData: {
      product_id: 31,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw6d4d8d82/images/hi-res/47971_CMPG.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 31,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$122'
    }
  },
  {
    product_id: 40,
    mockTitleData: {
      product_id: 40,
      title: 'Title for Product 40',
      category: 'Category for Product 40'
    },
    mockImageData: {
      product_id: 40,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwbb26def7/images/hi-res/50150_BCW.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 40,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$654'
    }
  },
  {
    product_id: 42,
    mockTitleData: {
      product_id: 42,
      title: 'Title for Product 42',
      category: 'Category for Product 42'
    },
    mockImageData: {
      product_id: 42,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwdd7f89e0/images/hi-res/82280_FGE.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 42,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$88'
    }
  },
  {
    product_id: 65,
    mockTitleData: {
      product_id: 65,
      title: 'Title for Product 65',
      category: 'Category for Product 65'
    },
    mockImageData: {
      product_id: 65,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2465c443/images/hi-res/88385_BLK.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 65,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$895'
    }
  },
  {
    product_id: 70,
    mockTitleData: {
      product_id: 70,
      title: 'Title for Product 70',
      category: 'Category for Product 70'
    },
    mockImageData: {
      product_id: 70,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwfdbec6d7/images/hi-res/79385_OWBR.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 70,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$65'
    }
  },
  {
    product_id: 75,
    mockTitleData: {
      product_id: 75,
      title: 'Title for Product 75',
      category: 'Category for Product 75'
    },
    mockImageData: {
      product_id: 75,
      main_images: ['https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw192e21a1/images/hi-res/61375_CCRL.jpg?sw=350&sh=350&sfrm=png&q=95&bgcolor=f6f6f6']
    },
    mockInventoryData: {
      productID: 75,
      Colors: {
        industrialGreen: '546B3F',
        bleachedStone: 'C9B491'
      },
      price: '$87'
    }
  },
]

module.exports = mockData;