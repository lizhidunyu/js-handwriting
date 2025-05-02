// 1.字面量增强
// 2.数组和对象的解构(重写属性名、设置默认值)
// 3.let /const
// 3.1 基本使用 - const不可修改 / let,const不可重复定义
// 3.2 没有作用域提升
// 3.3 和window的关系
// 3.4 块级作用域
for (var i = 0; i < 10; i++) {
  (function (i) {
    btns[i].onclick = function () {
      console.log(`点击的是第${i}个元素`);
    };
  })(i);
}

// 3.5 暂时性死区
// 4.模板字符串和标签模板字符串
// 5.函数的默认参数和剩余参数
// 6.箭头函数
// 7.展开语法(实际上是一种浅拷贝)
// 8.Symbol和Set/Map WeakSet/WeakMap
/* 数组去重 */
var arr = [1, 2, 3, 4, 5, 6, 2];
var arrSet = Array.from(new Set(arr));
console.log(arrSet);
