const helpers = {
  calculateDiscountedPrice: (price, discountPercentage) => {
    const discountPrice = price - (price * discountPercentage / 100)
    return !isNaN(discountPrice) ? discountPrice : 0
  },
  getPriceWithCurrency: (price) => {
    return `$${price ?? 0}`
  }
};
export default helpers;