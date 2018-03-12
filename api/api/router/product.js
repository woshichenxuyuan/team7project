const db =require('../db');
const apiRouter =require('../utils/apiResult');
const filter=require('../utils/fiter');

module.exports= {
    register(app){
        
        app.post('/products',(req,res)=>{
            // let id=req.body.id;
            // console.log(id)
            db.mongodb.select('products',{}).then((result)=>{
                if(result&&result.length>0){
                    res.send(apiRouter(true,result))
                }else{
                    res.send(apiRouter(false))
                }
            })
        }),
        app.post('/addPro',(req,res)=>{
            let title=req.body.title;
            let brand=req.body.brand;
            let standards=req.body.standards;
            let shop=req.body.shop;
            let price=req.body.price;
            let hot=req.body.hot;
            let family=req.body.family;
            let discount=req.body.discount;
            let url=req.body.url;
            let type=req.body.type;
            let units=req.body.units;
            db.mongodb.insert('products',{title,brand,standards,shop,price,hot,family,discount,url,type,units}).then((result)=>{

                res.send(apiRouter(true,result))
            })
        }),
        app.post('/page',(req,res)=>{
            var page=req.body.page;
            // console.log(page,'page')
            var arr=[];
            db.mongodb.select('products',{}).then((result)=>{
                if(page){
                    for(var i=8*(page-1);i<8*page;i++){
                        arr.push(result[i]);
                    }

                // console.log(arr);
            var lgt=result.length
                res.send({arr,lgt});
                }
                else{
                    res.send(false)
                }
            })
        }),
        app.post('/del',(req,res)=>{
            var _id=req.body.id;
            var rot=req.body.rot;
            var oid=db.mongodb.objectid(_id);
            db.mongodb.remove(rot,{_id:oid}).then((result)=>{
                res.send({status:'删除成功'})
            })

        }),
        app.post('/check',(req,res)=>{
            var key=req.body.key;
            db.mongodb.check('products',key).then((result)=>{
                var arr=result;
                var lgt=result.length;
                res.send({arr,lgt})
            })
        })
    }
}