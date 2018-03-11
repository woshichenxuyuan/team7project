const db=require('../db/')
const apiResult = require('../utils/apiResult.js')
const jwt = require('jsonwebtoken');


module.exports={
    register(app){
        
        //开启登录路由
        //获取客户端的用户名密码
        //根据用户名密码到数据库查找
        //如果查找成功，给客户端返回用户名，用sesstion存放用户名，登录成功信息
        //否者返回登录失败信息
        app.post('/login',(req,res)=>{
            let username=req.body.username;
            let password=req.body.password;
            console.log(username,password)
            db.mongodb.select('users',{username,password}).then((result)=>{
                var token='';
                console.log(result.length,result)
                var user={username}
                if(result.length>0){
                    token=jwt.sign(user,'secret',{
                        'expiresIn':1440
                    })
                }
                res.send(apiResult(result&&result.length>0,result));
            }).catch((error)=>{
                console.log(9999)
                res.send({status:false,error})
            })
        })
    }
} 