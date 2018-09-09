class A {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        // A 本身不处理 B，而是通过中介者来处理
        if (m) {
            m.setB()
        }
    }
}

class B {
    constructor() {
        this.number = 0
    }
    setNumber(num, m) {
        this.number = num
        // A 本身不处理 B，而是通过中介者来处理
        if (m) {
            m.setA()
        }
    }
}

// 中介者
class Mediator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    setA() {
        this.a.setNumber(this.b.number / 100)
    }
    setB() {
        this.b.setNumber(this.a.number /100)
    }

}


// test
let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(100, m)
console.log(a.number, b.number) // 100 1
b.setNumber(100, m)
console.log(a.number, b.number) // 1 100