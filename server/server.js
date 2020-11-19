// express框架版本--自行搭建

const express=require('express')

// 创建服务应用程序，及路由
const app=express()
// 初始界面
app.get("/",(req,res)=>{
    res.send("加载成功")
})

// 引入及加载路由
const router=require('./router')
app.use(router)


// 监听
app.listen("3001",()=>{
    console.log("server is running");
})