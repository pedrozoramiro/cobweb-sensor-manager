module.exports = function(app) {
    var jsonfileservice = require('./utils/jsonfileservice')();
    var collections = {};

    collections.products = jsonfileservice.getJsonFromFile('/../../data/products.json');
    collections.controlboxes = jsonfileservice.getJsonFromFile('/../../data/controlboxes.json');
    collections.users = jsonfileservice.getJsonFromFile('/../../data/users.json');


    return {
        collections: collections
    };
};