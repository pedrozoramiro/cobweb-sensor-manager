module.exports=function(app,db){
  var collections = db.collections;
  
  app.get('/api/boxes', function (req, res) {
      res.send(collections.controlboxes);
      res.end();
  });

};







