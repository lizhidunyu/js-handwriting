var maxProfit = function (prices) {
  let lowPrice = prices[0],
    maxPrice = 0;
  for (let i = 1; i < prices.length; i++) {
    lowPrice = Math.min(lowPrice, prices[i]);
    maxPrice = Math.max(maxPrice, prices[i] - lowPrice);
  }
  return maxPrice;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
