var db = require("../config/connections")
var objectId = require("mongodb").ObjectId




module.exports = {
    getData:()=>{
        return new Promise(async(resolve,reject)=>{
            let data =await db.get().collection("bets").find().toArray()
            
            resolve(data)

        })
        
    },
    getDataWithId:(betid)=>{
        return new Promise(async(resolve,reject)=>{
            let data =await db.get().collection("bets").findOne({_id:objectId(betid)})
            
            resolve(data)

        })

    }
}