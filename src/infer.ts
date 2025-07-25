export { }

// infer
// 用于在条件类型中推断类型，类似于占位符的概念
interface User {
    name: string
    age: number
}
// Promise可以接收一个泛型，infer推断这个泛型的类型
type Result = Promise<User>
// PromiseRes<T> 接收一个泛型T，T的类型为Result
type GetPromiseType<T> = T extends Promise<infer R> ? R : T
// 推断Result类型
type r = GetPromiseType<Result>

// 多层嵌套
type Results = Promise<Promise<Promise<User>>>
// 利用递归
type GetPromiseType2<T> = T extends Promise<infer R> ? GetPromiseType2<R> : T
type r1 = GetPromiseType2<Results>


// infer协变
let obj = {
    name: 'a',
    age: 18
}
type Bar<T> = T extends { name: infer A, age: infer B } ? [A, B] : T
type test1 = Bar<typeof obj>

// 如果把变量名定义成一样的，产生协变
type Foo<T> = T extends { name: infer U, age: infer U } ? U : T
// 返回联合类型，常用语对象属性
type test2 = Foo<typeof obj>


// infer逆变,出现在函数参数上
type Hdd<T> = T extends {
    a: (x: infer U) => void,
    b: (x: infer U) => void
} ? U : never

// 返回交叉类型
type test3 = Hdd<{
    a: (x: string) => void,
    b: (x: number) => void
}>
// 相当于
// type test3 = string & number // never

// 保持参数一致性
type test4 = Hdd<{
    a: (x: number) => void,
    b: (x: number) => void
}>

// 利用infer提取元素
// 提取头部元素
type Arr = ['a', 'b', 'c']
type First<T extends any[]> = T extends [infer First, ...any[]] ? First : []
type test5 = First<Arr>

// 提取尾部元素
type Last<T extends any[]> = T extends [...any[], infer Last,] ? Last : []
type test6 = Last<Arr>

// 剔除第一个元素 Shift
type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
type test7 = Shift<Arr>

// 剔除最后一个元素 Pop
type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
type test8 = Pop<Arr>



// 反转数组
type arr = [1, 2, 3, 4, 5]
// 利用递归
type MyReverseArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...MyReverseArr<Rest>, First] : T
type test9 = MyReverseArr<arr>

