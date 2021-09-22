var express = require('express');
var router = express.Router();
var userhelpers = require("../helpers/userhelpers")


/* GET home page. */
router.get('/',async function(req, res, next) {
  let data = await userhelpers.getData()
  if(data[0]){
    let date = data[0].date
    res.render('user/home', { data,date });

  }else{
    res.render('user/home', { data });

  }
  
  
});



module.exports = router;
