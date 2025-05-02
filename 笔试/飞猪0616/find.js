var data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];

const find = (data) => {
  const _find = () => {};

  _find.where = (field, pattern) => {
    const filteredData = data.filter((item) => {
      for (const key in item) {
        if (key === field) {
          return pattern.test(item[key]);
        }
      }
    });

    const _order = () => {};
    _order.orderBy = (field, mode) => {
      filteredData.sort((a, b) => {
        if (mode === "desc") {
          return b[field] - a[field];
        } else {
          return a[field] - a[field];
        }
      });

      return filteredData;
    };

    return _order;
  };

  return _find;
};

var result = find(data).where("title", /\d$/).orderBy("userId", "desc");

console.log(result); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
