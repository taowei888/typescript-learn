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

