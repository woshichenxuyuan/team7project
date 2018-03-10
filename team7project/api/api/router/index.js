const express=require('express');
const session=require('express-session');

var app=express();
const http=require('http').Server(app);
const io=require('socket.io')(http);

const bp=require('body-parser');
const path=require('path');

const usersRouter=require('./users');
// const productsRouter=require('./products');
// const orderRouter=require('./order');
// const ioserver=require('./ioserver');


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use(express.static(path.join(path.resolve(__dirname, '../../'), '/web')));
app.use(bp.urlencoded({extended: false}));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

module.exports={
    start(_port){
        usersRouter.register(app);
        // productsRouter.register(app);
        // orderRouter.register(app);
        ioserver.startws(io);
        http.listen(_port||8080)
    }
    
}