export { }
// 1. 字符串类型

//普通声明
let a: string = '123'
//也可以使用es6的字符串模板
let str: string = `aaa${a}`

// 2. 数字类型
let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制

// 3. 布尔类型
let booleand: boolean = true //可以直接使用布尔值
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值

// let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象 
let createdBoolean: Boolean = new Boolean(1)

// 4. 空值类型
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数

// void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数
function voidFn(): void {
    console.log('test void')
}

// void也可以定义undefined 和 null类型
let void1: void = undefined
let void2: void = null; //严格模式下报错


// 5. Null和undefined类型
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null


// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量

//这样是没问题的
let null1: null = null
let string1: string = "1"

string1 = null1

//这样是没问题的
let undefined2: undefined = undefined
let string2: string = "1"

string2 = undefined2

//  void类型不可以分给其他类型
let void3: void = undefined
let string3: string = "1"
// string3 = void3 //报错


// 6. 顶级类型 any unknown
// 没有强制限定哪种类型，随时切换类型都可以
// 我们可以对 any 进行任何操作，不需要检查类型
// 弊端如果使用any 就失去了TS类型检测的作用

let anys: any = 123
anys = '123'
anys = true

// 声明变量的时候没有指定任意类型默认为any
let anys1;
anys1 = '123'
anys1 = true


// TypeScript 3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给unknown
// unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow

//unknown 可以定义任何类型的值
let value: unknown;
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK

// any unknown区别1
//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
let unknown1: unknown = '123'
// let string11: string = unknown1 //报错

//这样就没问题 any类型是可以的
let names11: any = '123'
let names22: string = names11

//unknown可赋值对象只有unknown 和 any
let bbb: unknown = '123'
let aaa: any = '456'
aaa = bbb

// any unknown区别2
// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj11: any = { b: 1 }
obj11.a
 
 
// 如果是unknow 是不能调用属性和方法
let obj22: unknown = { b: 1, ccc: (): number => 213 }
// obj22.b // 报错
// obj22.ccc() // 报错
