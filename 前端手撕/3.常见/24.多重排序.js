const sortData = (arr, rules) => {
    return arr.sort((a, b) => {
      for (const { key, asec } of rules) {
        if (a[key] === b[key]) {
          continue;
        }
        // 多重排序的核心：后面排序的规则只有在前面相等时候才启用
        if (typeof a[key] === "string") {
          return asec
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key]);
        } else {
          return asec ? a[key] - b[key] : b[key] - a[key];
        }
      }
    });
  };
  
  console.log(sortData(arr, rules));