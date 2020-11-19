let express=require('express');

let router=express.Router()

let datas=require('./datas/data.json')

router.get("/searchBooks",(req,res)=>{
    let keyword=req.query.req;
    // 此处应用比较简单，如何在复杂情况下给变量赋值,通过"""+的形式
    let Reg=new RegExp(keyword);
    // 通过filter来判断data数组，返回符合正则表达式的值
    let data=datas.filter((item)=>{
        return Reg.test(item.title)
    })

    res.send(data)
})



module.exports=router