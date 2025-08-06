// 安装两个库
// express 没有自己的声明文件，引入直接飘红，也没有代码提示
// axios 有声明文件


// 按住command点击axios会进入axios的声明文件，而不是源码
import axios from 'axios'

// 按住command点击express会进入express源码
import express from 'express'
// 尝试使用安装声明文件，下面这种格式是规范
// npm i --save-dev @types/express


// 冷门的库没有人维护声明文件，需手写声明文件
const app = express()


const router = express.Router()

app.use('/api', router)

router.get('/list', (req, res) => {
    res.json({
        code: 200
    })
})

app.listen(9001, () => {
    console.log(9001)
})

// aa = false //会有提示

import person1 from "./example/person1";
import person2 from "./example/person2";


person2
// 如果不指定 include，TypeScript 的默认行为是：

// 1. 没有 files 和 include 时：编译当前目录及所有子目录下的.ts、.tsx、.d.ts 文件
// 2. 相当于："include": ["**/*"]
// 3. 会排除：node_modules、bower_components、jspm_packages 和 < outDir > 目录

//   所以你之前不加 include 时，TypeScript 自动扫描整个项目目录，这就是为什么
// types11 / express.d.ts 仍然被识别的原因。




// 你在 types / person2.d.ts 中使用的方式不行，是因为：

// 同名声明文件（如 person2.d.ts 对应 person2.js）只有在同一目录下才会自动关联。

// 你的文件在不同目录：
// - JS 文件：src / example / person2.js
//     - 声明文件：types / person2.d.ts

// 解决方案：
// 1. 移动声明文件到 src / example / person2.d.ts（推荐）
// 2. 或者在 types / person2.d.ts 中使用模块声明：


