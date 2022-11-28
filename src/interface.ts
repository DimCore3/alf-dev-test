export default interface ProductDataInterface {
    productName: string,
    articleCode: string,
    sizeList: number[],
    price: {
      oldPrice: number,
      discounts: number[],
    },
    commentsCountRate: number,
    allStyleImgSrc: string[],
  }