var maxProfit = function (prices) {
  // 和最大子序列的思路类似
  let lowPrice = prices[0];
  let maxPrice = 0;
  for (let i = 1; i < prices.length; i++) {
    // 维护一个当前的最小值
    lowPrice = Math.min(lowPrice, prices[i]);
    // 当前的最大值
    maxPrice = Math.max(maxPrice, prices[i] - lowPrice);
  }
  return maxPrice;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
