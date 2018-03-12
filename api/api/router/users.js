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
            let pwd=req.body.pwd;
            console.log(username,pwd)
            db.mongodb.select('users',{username,pwd}).then((result)=>{
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
        }),
        app.post('/clients',(req,res)=>{
            var page=req.body.page;
            var arr=[];

            db.mongodb.select('clients',{}).then((result)=>{
                if(page){
                    for(var i=8*(page-1);i<8*page;i++){
                        arr.push(result[i]);
                    }
                    var lgt=result.length
                    res.send({arr,lgt});  
                }
                else{
                    res.send(false)
                }
                // res.send(result)
            })
        })
        app.post('/auth',(req,res)=>{
            var page=req.body.page;
            var arr=[];

            db.mongodb.select('users',{}).then((result)=>{
                if(page){
                    for(var i=8*(page-1);i<8*page;i++){
                        arr.push(result[i]);
                    }
                    var lgt=result.length
                    res.send({arr,lgt});  
                }
                else{
                    res.send(false)
                }
                // res.send(result)
            })
        }) 
    }
}

