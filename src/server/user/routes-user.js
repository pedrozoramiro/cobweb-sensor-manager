
module.exports=function(app,db){
  var collections = db.collections;
  
  app.get('/user/signin', function (req, res) {
      
      res.end();
  });
};







