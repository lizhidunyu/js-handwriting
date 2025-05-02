function parseJSON(jsonString) {
  let index = 0;
  const length = jsonString.length;
  const eatWhitespace = () => {
    while (index < length && /\s/.test(jsonString[index])) index++;
  };

  const expect = (char) => {
    if (jsonString[index] !== char) {
      throw new Error(`Unexpected token at position ${index}`);
    }
    index++;
  };

  const parseVal = () => {
    eatWhitespace();
    const char = jsonString[index];
    if (char === "{") {
    } else if (char === "[") {
      return parseObj();
    } else if (char === '"') {
      return parseArr();
    } else if (isNaN(char)) {
      return parseNumber();
    } else if (["t", "f", "n"].includes(char)) {
      return parseLiteral(char);
    } else {
      throw new Error(`Unexpected token at position ${index}`);
    }
  };

  const parseObj = () => {
    const obj = {};
    index++;
    let isFirst = true;
    while (jsonString[index] !== "}") {
      if (!isFirst) {
        expect(",");
      }
      isFirst = true;
      const key = parseString();
      expect(":");
      const value = parseVal();
      obj[key] = value;
    }
    index++;
    return obj;
  };

  const parseArr = () => {
    const arr = [];
    index++;
    let isFirst = true;
    while (jsonString[index] !== "]") {
      if (!isFirst) {
        expect(",");
      }
      isFirst = false;
      arr.push(parseVal());
    }
    index++;
    return arr;
  };

  const parseString = () => {
    let result = "";
    index++;
    while (jsonString[index] !== '"') {
      result += jsonString[index++];
    }
    index++;
    return result;
  };

  const parseNumber = () => {
    let numStr = "";
    while (index < length && /[-0-9.eE+]/.test(jsonString[index])) {
      numStr += jsonString[index];
    }
    return parseFloat(numStr);
  };

  const parseLiteral = (literal) => {
    index = index + literal.length;
    switch (literal) {
      case "true":
        return true;
      case "false":
        return false;
      case "null":
        return null;
      default:
        throw new Error(`Unexpected literal at position ${index}`);
    }
  };

  try {
    const result = parseVal();
    eatWhitespace();
    if (index !== length) throw new Error("Unexpected tokens");
    return result;
  } catch (e) {
    throw new Error("Invalid JSON: " + e.message);
  }
}

console.log(
  parseJSON(
    JSON.stringify({ a: 1, b: "test", c: [1, 2, { cc: 1122 }], d: false })
  )
);
