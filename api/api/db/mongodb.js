const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
let db;

client.connect('mongodb://10.3.136.63:27017', (_error, _db) => {
    if(_error){
        console.error(_error);
        return false;
    }
    db = _db;
});

module.exports={
    select:(_collection,_condition)=>{
       
        if(db){
            return new Promise((resolve, reject) => {
                db.db('team7').collection(_collection).find(_condition || {}).toArray((_error, _data) => {
                    if(_error){
                        reject(_error)
                        console.log(999)
                    } else {
                        resolve(_data);
                    }
                })
            })
            
        }
    },


    insert:(_collection,_data)=>{
        if(db){
            return new Promise((resolve,reject)=>{
                db.db('team7').collection(_collection).insert(_data).then((result,error)=>{
                    resolve(result);
                })
            })
        }
    },

    update:(_collection,oid,_newdata)=>{
        if(db){
            return new Promise((resolve,reject)=>{
                db.db('team7').collection(_collection).update(oid,{$set:_newdata}).then((result,error)=>{
                    resolve(result);
                }) 
            })
        }
    },
    
    remove:(_collection,_condition)=>{
     
        if(db){
            return new Promise((resolve,reject)=>{
                db.db('team7').collection(_collection).remove(_condition).then((result,error)=>{
                    resolve(result);
                });
            })
        }
    },
    check:(_collection,condition)=>{
        
        var reg= new RegExp(condition)
        if(db){
            return new Promise((resolve,reject)=>{
                db.db('team7').collection(_collection).find({"title":{$regex:reg}}).toArray((error,data)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(data)
                    }
                })
            })
        }

    },

    objectid: (_id) => {
        return _id ? new ObjectID(_id) : new ObjectID();
    }
}