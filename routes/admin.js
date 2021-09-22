var express = require('express');
var router = express.Router();
var adminhelpers = require("../helpers/adminhelpers")
var userhelpers = require("../helpers/userhelpers")

/* GET users listing. */
router.get('/',async function(req, res, next) {
  let data = await userhelpers.getData()
  if(data[0]){
    let date = data[0].date
  res.render('user/home', { data,date,admin:true });

  }else{
    res.render('user/home', { data,admin:true });

  }
  
  
  
});

router.get('/addBets', function(req, res, next) {
  res.render('admin/addBets', { admin:true });
});

router.post('/addBets', function(req, res, next) {
  
  adminhelpers.saveData(req.body).then((id)=>{
    // console.log(id)
    res.redirect('/admin/addBets');
      
    
  })
    

  
  
});

router.get('/editbets/:id',async function(req, res, next) {
  let id = req.params.id
  console.log(id)
  let data = await userhelpers.getDataWithId(id)
  console.log(data)
  res.render('admin/editbets', { data,admin:true });
});


router.post("/editbets/:id",(req,res)=>{
  let id = req.params.id

  adminhelpers.editBets(id,req.body).then((response)=>{
    if(req.files){
      let image = req.files.image
      image.mv("./public/images/"+id+".jpg",(err)=>
    {if(!err) res.redirect("/admin");
    else console.log(err)}
  
  
  

    )
    }else{
      res.redirect("/admin")

    }
    

  })

  
})

router.get('/deletebets/:id',async function(req, res, next) {
  let id = req.params.id
  
  adminhelpers.deleteBets(id)
  
  res.redirect('/admin');
});



module.exports = router;
