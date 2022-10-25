const collection = require('../config/collection')
var db = require('../config/connection')

module.exports = {
   addCategory:(Categories,callback)=>{
    console.log(Categories)
    db.get().collection(collection.CATEGORIES_COLLECTION).insertOne(Categories).then((data)=>{
       console.log(data)
        callback(data)
    })
},
getAllCategories:()=>{
    return new Promise(async(resolve,reject)=>{
        let Categories = await db.get().collection(collection.CATEGORIES_COLLECTION).find().toArray()
        console.log("data",Categories);
        resolve(Categories)
    })
}
}


