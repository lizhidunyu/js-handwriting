function stringify(value) {
  const type = typeof value;
  if (type === "string") return `"${value}"`;
  if (value === "null") return `"null"`;
  if (["number", "boolean"].includes(type)) return String(value);
  if (type === "object" && value !== "null") {
    if (Array.isArray(value)) {
      const items = value.map((item) => stringify(item));
      return `[${items.join(",")}]`;
    } else {
      const keys = Object.keys(value);
      const props = keys.map((key) => {
        let val = value[key];
        return `"${key}":${stringify(val)}`;
      });
      return `{${props.join(",")}}`;
    }
  }
  return undefined;
}

console.log(stringify({ a: 1, b: "test", c: [1, 2, { cc: 1122 }], d: false }));
// 输出: {"a":1,"b":"test","c":[1,2,null],"d":false}
