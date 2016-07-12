
module.exports=function(app){
  
  var products = [   {id:1, product:"Pasta",price:"24.50"},
                        {id:2, product:"Oil",price:"15.78"},
                        {id:3, product:"Tomato",price:"2.24"},
                        {id:4, product:"Potato",price:"1.35"},
                        {id:5, product:"Banana",price:"0.50"},
                        {id:6, product:"Bread",price:"1.50"},
                        {id:7, product:"Rice",price:"12,75"},
                        {id:8, product:"Bean",price:"4.35"},
                        {id:9, product:"Egg",price:"5.50"},
                        {id:10, product:"Meat",price:"45.87"},
                        {id:11, product:"Carrot",price:"10.45"},];

  app.get('/api/products', function (req, res) {
      res.send(products);
      res.end();
  });

  app.get('/api/products/:id', function (req, res) {
      var product = products.find(product => product.id === req.params.id);
      res.send(product);
      res.end();
  });
};







