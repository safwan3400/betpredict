var db = require("../config/connections")
var objectId = require("mongodb").ObjectId





module.exports = {
    saveData: (data) => {

        return new Promise((resolve, reject) => {
            let data1 = {
                league: data.league,
                time: data.time,
                home: data.home,
                away: data.away,
                prediction: data.prediction,
                odd: data.odd,
                image: data.image,
                date: new Date



            }
            db.get().collection("bets").insertOne(data1).then((response) => {
                // console.log(response)
                resolve(response.insertedId)
            })

        })



        // db.get().collection("bets").insertOne(data)

        // callback(data._id)

    },
    editBets:(betid,data)=>{
        return new Promise((resolve, reject) => {
            
            db.get().collection("bets").updateOne({_id:objectId(betid)},{$set:{
                league: data.league,
                time: data.time,
                home: data.home,
                away: data.away,
                prediction: data.prediction,
                odd: data.odd,
                image: data.image,
                date: new Date

            }

            }).then((response)=>{
                resolve(response)})

        })


    },
    deleteBets:(id)=>{
        db.get().collection("bets").deleteOne({_id:objectId(id)})

    }





}