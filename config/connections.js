const mongoClient = require("mongodb").MongoClient
// const mongoose = require('mongoose')
const state = {
    db: null
}



module.exports.connect = function (done) {

    const url = "mongodb+srv://safwan34:Qwerty%402021@cluster0.p82fd.mongodb.net/betsdb?retryWrites=true&w=majority"

    dbname = "betsdb"

    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }
    mongoClient.connect(url,connectionParams,(err,data)=>
    {if(err) return done(err)
        state.db = data.db(dbname)
        done()


    } 
    )
    
}
module.exports.get = function () {
    return state.db

}







