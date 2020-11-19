// 教程中的koa框架使用版本
let Koa=require('koa');
let KoaRouter=require("koa-router");

// 生成应用及路由器实例
const app=new Koa();
const router=new KoaRouter()

// 核心代码.koa中使用ctx
router.get("/",(ctx,next)=>{
    // 1.获取请求的参数

    // 2.根据请求的地址和参数处理数据

    // 3. 响应数据
    ctx.body="服务器返回的数据"
})

// 搜索图书的接口

// 引入数据
let datas=require("./datas/data.json")
router.get("/searchBooks",(ctx,next)=>{
    // 1.获取请求的参数
    let req=ctx.query.req;
    console.log("获取请求参数",req);
    // 2.根据请求的地址和参数处理数据
    let booksArr=datas
    // 3. 响应数据
    ctx.body=booksArr
})


// 使用路由器及路由
app
.use(router.routes()) //声明使用路由
.use(router.allowedMethods) //允许使用路由的方法

// 监听端口
app.listen("3000",()=>{
    console.log("服务器启动成功");
})