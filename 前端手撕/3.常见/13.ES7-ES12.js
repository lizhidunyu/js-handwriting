/* 1.padStart */
var str = "yucuiwen";
// 第一个参数代码:str最终的长度
console.log(str.padStart(14, "****"));

/* 2.
Object.keys()
Object.values()
Object.entries()
 */
var obj = { name: "why", age: 20 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/* 3.flat/flatMap*/
/* Array.includes() */
var arr2 = [
  [1, 2],
  [11, 22],
  [111, 222],
];
var arr3 = ["23", "12", "23"];
console.log("arr2:", arr2.flat());
console.log(
  arr3.flatMap((item) => {
    return item.split("");
  })
);

/* 
4.trimEnd trimStart */
var str = "   ycw   ";
console.log(str.trimEnd(""), "21");

/* 5. ?? 空值合并操作符*/

/* 6.可选链 */

/* 7.BigInt */

/* 8. globalThis */

/* 9. for...in... */
