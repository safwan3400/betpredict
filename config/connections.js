const mongoClient = require("mongodb").MongoClient
const state = {
    db:null
}



module.exports.connect=function(done){

    var url = "mongodb://localhost:27017"
    var dbname = "betPredict"
    mongoClient.connect(url,(err,data)=>
    {if(err) return done(err)
        state.db = data.db(dbname)
        done()
        

    } 
    )
}
module.exports.get=function(){
    return state.db

}