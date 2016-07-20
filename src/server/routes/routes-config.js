module.exports=function(app){
    var db = require('./../data/database')();
    require('./box/routes-box.js')(app,db);
    require('./product/routes-product.js')(app,db);
    var app;
}