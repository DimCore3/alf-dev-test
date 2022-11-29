export default interface ProductDataInterface {
    productName: string,
    articleCode: string,
    sizeList: number[],
    price: {
      oldPrice: number,
      discounts: number[],
    },
    rating: {
      commentsCount: number,
      productRate: number,
    }
    allImgSrc:string[],
    allStyleImgSrc: string[],
  }