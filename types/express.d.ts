// 手写express声明
declare module 'express' {
    interface Router {
        get(path: string, cb: (req: any, res: any) => void): void
    }
    interface App {

        use(path: string, router: any): void
        listen(port: number, cb?: () => void): void
    }
    interface Express {
        (): App
        Router(): Router,
        cc:cc

    }
    interface cc{}
    const express: Express
    export default express
}

// 扩充全局变量
declare var aa: number;