
module.exports=function(app){
  
  var products = [   {id:1, name:"Pasta",price:"24.50"},
                        {id:2, name:"Oil",price:"15.78"},
                        {id:3, name:"Tomato",price:"2.24"},
                        {id:4, name:"Potato",price:"1.35"},
                        {id:5, name:"Banana",price:"0.50"},
                        {id:6, name:"Bread",price:"1.50"},
                        {id:7, name:"Rice",price:"12,75"},
                        {id:8, name:"Bean",price:"4.35"},
                        {id:9, name:"Egg",price:"5.50"},
                        {id:10, name:"Meat",price:"45.87"},
                        {id:11, name:"Carrot",price:"10.45"},];

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







