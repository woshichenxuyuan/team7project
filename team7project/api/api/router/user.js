const db=require('../db/')
const apiResult = require('../utils/apiResult.js')


module.exports={
    register(app){
        
        //开启登录路由
        //获取客户端的用户名密码
        //根据用户名密码到数据库查找
        //如果查找成功，给客户端返回用户名，用sesstion存放用户名，登录成功信息
        //否者返回登录失败信息
        app.post('/login',(req,res)=>{
            let name=req.body.username;
            let password=req.body.password;
            db.mongodb.select('users',{name}).then((result)=>{
                if(result.length>0){
                    req.session.username = name;
                }
                res.send(apiResult(result&&result.length>0));
            }).catch((error)=>{
                res.send({status:false,error})
            })
        })
    }
} 