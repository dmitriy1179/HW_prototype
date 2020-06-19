//1.1
String.prototype.reverse = function () {
    let str = ""
    for (let i = this.length-1; i >= 0; i--) {
        str += this[i]
    }
    return str
}

console.log("hello".reverse())

//1.2
String.prototype.isPolindrom = function () {
    let str = ""
    for (let i = this.length-1; i >= 0; i--) {
        str += this[i]
    }
    if (this == str) {
        return true
    }
    return false
}

console.log("hello".isPolindrom())
console.log("helleh".isPolindrom())

//1.3
String.prototype.map = function (func) {
    let str = ""
    for (let i = 0; i < this.length; i++) {
        str += func(this[i])
    }
    return str
}

console.log("hello".map(n => n+n))

//2.1
Array.prototype.filter = function (f) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (f(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr
}

console.log([1, 2, 3, 45].filter(n => n % 2))

//2.2
Array.prototype.reduce = function (func, initval) {
    let k, acc
    initval === undefined ? (acc = this[0], k = 1) : (acc = initval, k = 0)
    for (let i = k; i < this.length; i++) {
        acc = func(acc, this[i], i, this);
    }
    return acc
}

console.log([1, 4, 15, 30].reduce(((a, b) => a + b), 20))

//2.3
Array.prototype.map = function (func) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr[i] = func(this[i])
    }
    return arr
}

console.log([1, 4, 15, 30].map(n => n * 2))

//2.4
Array.prototype.push = function(...num) {
    for (let i = 0; i < num.length; i++) {
        this[this.length] = num[i]
    }
    return this.length
}
const arr1 = [1, 4, 15, 30]
console.log(arr1.push(40, 50))
console.log(arr1)

//2.5
Array.prototype.unshift = function(...values) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + values.length] = this[i]
    }
    for (let i = 0; i < values.length; i++) {
        this[i] = values[i]
    }
    return this.length
}

const arr = [1, 4, 15, 30]
console.log(arr.unshift(40, 50))
console.log(arr)

