
module.exports=function(app,db){
  var collections = db.collections;
  
  app.get('/products', function (req, res) {
      res.send(collections.products);
      res.end();
  });

  app.get('/products/:id', function (req, res) {
      var product = collections.find(product => product.id === req.params.id);
      res.send(product);
      res.end();
  });
};







