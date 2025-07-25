export { }

// Partial
// 将类型的所有属性变为可选属性
interface User {
    name: string;
    age: number;
}

type test1 = Partial<User>
// 相当于
type test2 = {
    name?: string | undefined;
    age?: number | undefined;
}

// Partial的实现
type MyPartial<T> = {
    // 遍历使用中括号，类似于forin
    [P in keyof T]?: T[P]
}
type test3 = MyPartial<User> //严格模式与非严格模式下表现有所不同



// Required
// 将可选属性变为必选属性

interface User2 {
    name?: string;
    age?: number;
}
type test4 = Required<User2>


// Required的实现
type MyRequired<T> = {
    // 减掉问号 So funny
    [P in keyof T]-?: T[P]
}
type test5 = MyRequired<User2>


// Pick
// 用于从一个类型中选取指定的属性
interface User3 {
    name?: string;
    age?: number;
}
type test6 = Pick<User, 'age'>

// Pick实现
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type test7 = MyPick<User, 'age'>



// Exclude
// 从一个类型的属性集合中排除指定的属性
type test8 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

// Exclude实现
type MyExclude<T, K> = T extends K ? never : T
type test9 = MyExclude<'a' | 'b' | 'c', 'a'>


// 为什么用never
type test10 = 'a' | 'b' | 'c' | never
// 观察test10，never在联合类型中会被排除
// test9实际上是把a替换成never

// Omit
// 用于创建一个新类型，该新类型从原始类型中排除指定的属性
interface User4 {
    address?: string;
    name?: string;
    age?: number;
}
type test11 = Omit<User4, 'age'>

// Omit 实现
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
type test12 = MyOmit<User4, 'age'>


// Record 
// 约束对象的key和value
type Key = "c" | "x" | "k";

type Value = '唱' | '跳' | 'rap' | '篮球'

// 属性必须都要存在，值无吊所谓
let obj: Record<Key, Value> = {
    "c": '唱',
    "x": '跳',
    "k": 'rap'
}
// 套娃
let obj2: Record<Key, Record<Key, Value>> = {
    "c": {
        "c": '唱',
        "x": '跳',
        "k": '篮球'
    },
    "x": {
        "c": '唱',
        "x": '跳',
        "k": 'rap'
    },
    "k": {
        "c": '唱',
        "x": '跳',
        "k": '篮球'
    }
}

// Record实现
type ObjKey = keyof any // string | number | symbol
// 属性值只能为ObjKey
type MyRecord<T extends ObjKey, K> = {
    [P in T]: K
}
let obj3: MyRecord<Key, Value> = {
    "c": '唱',
    "x": '跳',
    "k": 'rap'
}


// ReturnType
// 获取 函数 的返回值类型
const fn = () => ['a', 1, true]
type test13 = ReturnType<typeof fn>

// ReturnType 实现
// 利用infer提取函数返回值类型
type MyReturnType<F extends Function> = F extends (...args: any) => infer R ? R : never
// typeof fn 将具体函数转换为类型，相当于
// type fn = () => ['a', 1, true]
type test14 = MyReturnType<typeof fn>
