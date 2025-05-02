function JSONParse(str) {
  let index = 0;

  function parseValue() {
    const char = str[index];

    if (char === "{") {
      return parseObject();
    } else if (char === '"') {
      return parseString();
    } else {
      return parseNumber();
    }
  }

  function parseObject() {
    const obj = {};
    index++; // Skip '{'

    while (str[index] !== "}") {
      const key = parseString();
      index++; // Skip ':'
      const value = parseValue();
      obj[key] = value;
      if (str[index] === ",") {
        index++; // Skip ','
      }
    }
    index++; // Skip '}'
    return obj;
  }

  function parseString() {
    let result = "";
    index++; // Skip opening '"'

    while (str[index] !== '"') {
      result += str[index];
      index++;
    }
    index++; // Skip closing '"'
    return result;
  }

  function parseNumber() {
    let result = "";
    while (
      (str[index] >= "0" && str[index] <= "9") ||
      str[index] === "." ||
      str[index] === "-"
    ) {
      result += str[index];
      index++;
    }
    return parseFloat(result);
  }

  return parseValue();
}

// 示例
const data = '{"name":"Alice","age":30}';
console.log(JSONParse(data)); // 输出: { name: 'Alice', age: '30' }
console.log(JSONParse(data)); // 输出: { name: 'Alice', age: '30' }
