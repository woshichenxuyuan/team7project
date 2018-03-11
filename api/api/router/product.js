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
        })
    }
}