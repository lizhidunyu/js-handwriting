// function solveMonicaMusicProblem(musicString, k) {
//   // 统计初始音长
//   const noteLengths = {
//     A: 0,
//     B: 0,
//     C: 0,
//     D: 0,
//     E: 0,
//     F: 0,
//     G: 0,
//   };
//   for (let char of musicString) {
//     noteLengths[char]++;
//   }

//   // 制定操作策略：每次选择当前长度最短的音符进行操作
//   const operations = [];
//   while (k > 0) {
//     let minLength = Infinity;
//     let minNote = null;
//     for (let note in noteLengths) {
//       if (noteLengths[note] < minLength) {
//         minLength = noteLengths[note];
//         minNote = note;
//       }
//     }

//     // 对最短音符进行操作
//     noteLengths[minNote]++;
//     operations.push({ note: minNote, index: operations.length + 1 }); // 注意：这里的index是模拟的，实际可能需要更复杂的逻辑来确定具体操作的音符位置
//     k--;
//   }

//   // 输出操作信息（这里简化输出，只包含音符和操作的次数，不包含具体索引）
//   for (let op of operations) {
//     console.log(op.index, op.note); // 注意：这里的输出格式需要根据题目要求进行调整
//   }

//   // 输出最终每个音符和对应的长度
//   let result = "";
//   for (let note in noteLengths) {
//     if (result.length > 0) {
//       result += " ";
//     }
//     result += `${note}(${noteLengths[note]})`;
//   }
//   console.log(result);
// }

// // 示例输入
// const musicString = "CCABCC"; // 示例音乐字符串
// const k = 3; // 示例操作次数

// // 调用函数解答问题
// solveMonicaMusicProblem(musicString, k);

var arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function () {
    return i;
  });
  console.log(arr[i]());
}

arr.forEach(function (arr) {
  console.log(arr());
});
console.log(i);
