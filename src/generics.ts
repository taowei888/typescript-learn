export {}
// https://www.tslang.cn/docs/handbook/generics.html
// 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

// 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。


// 函数功能一致，接受参数类型和返回值类型不一致
function num(a: number, b: number): Array<number> {
    return [a, b];
}
num(1, 2)
function str(a: string, b: string): Array<string> {
    return [a, b];
}
str('a', 'b')

// 定义泛型函数
function Add<T>(a: T, b: T): Array<T> {
    return [a, b]
}

Add<number>(1, 2)
Add<string>('1', '2')


// 定义泛型接口
interface MyInter<T> {
    (arg: T): T
}
function fn<T>(arg: T): T {
    return arg
}
let result: MyInter<number> = fn
result(123)

// 对象字面量泛型
let foo: { <T>(arg: T): T }

foo = function <T>(arg: T): T {
    return arg
}

foo(123)

// 泛型约束
interface Len {
    length: number
}

// 约束其为具有length属性的类型
function getLegnth<T extends Len>(arg: T) {
    return arg.length
}
getLegnth<string>('123')


// keyof操作符获取T类型的所有键，返回的是联合类型
// extends约束泛型为T的键
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let o = { a: 1, b: 2, c: 3 }
prop(o, 'a')
// prop(o, 'd') //报错，不是对象的属性


// 泛型类
class Sub<T> {
    attr: T[] = [];
    add(a: T): T[] {
        return [a]
    }
}

let ins2 = new Sub<number>()
ins2.attr = [1, 2, 3]
ins2.add(123)

let ins = new Sub<string>()
ins.attr = ['1', '2', '3']
ins.add('123')
