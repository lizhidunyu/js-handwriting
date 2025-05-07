(function () {
  const globalRegistry = {};
  let id = 0;
  function MySymbol(description) {
    if (this instanceof MySymbol) {
      throw new Error("Symbol is not a constructor");
    }
    return `@@symbol_${description}_${id++}`;
  }
  MySymbol.for = function (key) {
    if (globalRegistry[key]) {
      return globalRegistry[key];
    } else {
      const symbol = `@@symbol_for_${key}`;
      globalRegistry[key] = symbol;
      return symbol;
    }
  };
  globalThis.MySymbol = MySymbol;
})();

/*test*/
const a1 = MySymbol("foo");
const a2 = MySymbol.for("foo");
const a3 = MySymbol.for("foo");

console.log(a1, a2, a3);
console.log(a1 === a2); // false
console.log(a2 === a3); // true
