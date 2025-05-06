const arr = [1,2,2,2,4,3,3,3]
// 原地修改数组为 [2,3]

const transformArr = (arr) => {
    let index = 0, currentIndex = 0;
    const len = arr.length;
    while(index < len) {
        if (index === len - 1) break
        // 借助变量，控制只有控制的数字才能被加到目标数组
        let duplicate = false
        if (arr[index] !== arr[index+1]) {
            index++
        }
        while(arr[index] === arr[index+1]) {
            duplicate = true
            index++
        }
       if (duplicate) {
        arr[currentIndex++] = arr[index]
       }
    }
    // 学到了，这样可以直接截断到目标位置
    arr.length = currentIndex
    return arr
}

console.log(transformArr(arr));
