

console.log(myInstanceof(new String('123'), String));

function myInstanceof(left, right) {
    if (typeof left != 'object' || left == null) return false
    let prototype = Object.getPrototypeOf(left)
    while (true) {
        if (prototype === null) return false
        if (prototype === right.prototype) return true
        prototype = Object.getPrototypeOf(prototype)
    }
}
