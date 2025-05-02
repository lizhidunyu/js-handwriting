const getNums = (n, m, arr) => {
  let count = 0,
    money = 0;
  const dp = new Array(m).fill(0);
  dp[1] = 1;
  console.log(dp);
  for (let i = 0; i < m; i++) {
    // dp[i] = Math.max(dp[i],dp[i-1])
    if (money < m) {
      dp[i] = Math.max(dp[i - 1], dp());
    }
  }
  // current = 1;
  //   for (let i = 1; i < arr[n - 1]; i++) {
  //     if (arr.includes(i)) {
  //       continue;
  //     }

  //     money += i;
  //     count++;
  //     if (money > m) {
  //       count--;
  //       break;
  //     }
  //     // console.log(`money=${money}, count=${count}, i=${i}`);
  //   }
  return count;
};
console.log(getNums(5, 16, [2, 5, 9, 10, 100]));
