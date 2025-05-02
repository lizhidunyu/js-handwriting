const info = {
    info:'1234',
    [Symbol.iterator]:function() {
        let index = 0
        return {
            next:() => {
                if (index < this.info.length) {
                    return {done: false,value: this.info[index++]}
                } else {
                    return {done: true, value: undefined}
                }
            }
        }
    }
}
const infoIterator = info[Symbol.iterator]()
// console.log(infoIterator.next());
// console.log(infoIterator.next());
// console.log(infoIterator.next());
// console.log(infoIterator.next());
// console.log(infoIterator.next());
// console.log(infoIterator.next());

// 应用
// 1.展开语法
// 2.解构
// 3.for...of...
// 4.某些对象的创建,或者是方法的调用API要求传入可迭代对象
// 本质上是拿到迭代器,进行迭代，拿到里面的value值

function* bar(x) {
    try {
        var b = 20
        console.log(b);
        yield 500
    } catch (err) {
        yield  5000
    }
}

// const generator = bar(4)
// console.log(generator.next());
// console.log(generator.throw(22));
// return 是在第一段代码 和 第二段代码 之间
// throw  实际上是在第一段代码中throw了一个错误

// promise和generator实现async / await
function getData(data) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}

function* getDatas() {
    const res1 = yield getData('why')
    console.log(res1);
    const res2 = yield getData(res1 + 'zzz')
    console.log(res2);
    const res3 = yield getData(res2 + 'aaa')
    console.log(res3);
    const res4 = yield getData(res3 + 'bbb')
    console.log(res4);
}

// let gene = getDatas()
// console.log(gene.next().value.then(res1 => {
//     gene.next(res1).value.then(res2 => {
//         gene.next(res2).value.then(res3 => {
//             gene.next(res3).value.then(res4 => {
//                 gene.next(res4)
//             })
//         })
//     })
// }));

const getDa =  async() => {
    const res1 = await getData('why')
    const res2 = await getData(res1 + 'aaa')
    const res3 = await getData(res2 + 'bbb')
    const res4 = await getData(res3 + 'ccc')
    console.log(res4);
    return 12
}
console.log(getDa().then(res => console.log(res)));