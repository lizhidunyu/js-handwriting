var maxProfit = function (prices) {
  // 维护一个当前最低价格的下标索引
  // 以及当前的一个所能卖出的最高价格
  let minPriceIndex = 0,
    maxPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[minPriceIndex]) {
      minPriceIndex = i;
    } else if (prices[i] - prices[minPriceIndex] > maxPrice) {
      maxPrice = prices[i] - prices[minPriceIndex];
    }
  }
  return maxPrice;
};
