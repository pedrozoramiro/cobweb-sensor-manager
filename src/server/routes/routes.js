
module.exports=function(app){
  
  app.get('/products', function (req, res) {
      var listRequest = [{product:"Pasta",price:"24.50"},
                        {product:"Oil",price:"15.78"},
                        {product:"Tomato",price:"2.24"},
                        {product:"Potato",price:"1.35"},
                        {product:"Banana",price:"0.50"},
                        {product:"Bread",price:"1.50"},
                        {product:"Rice",price:"12,75"},
                        {product:"Bean",price:"4.35"},
                        {product:"Egg",price:"5.50"},
                        {product:"Meat",price:"45.87"},
                        {product:"Carrot",price:"10.45"},];

      res.send(listRequest);
      res.end();
  });
};







