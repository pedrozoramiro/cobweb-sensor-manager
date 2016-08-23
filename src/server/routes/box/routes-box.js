module.exports = function(app, db) {
    var collections = db.collections;

    app.get('/api/boxes', function(req, res) {
        res.send(collections.controlboxes);
        res.end();
    });

    app.get('/api/boxes/:idBox/sensor/:idSensor', function(req, res) {
        var idSensor = req.params.idSensor;
        var idBox=  req.params.idBox;
        var box = collections.controlboxes.filter(function(box){return idEqual(box,idBox);})[0];
        var sensor = box.sensors.filter(function(sensor){return idEqual(sensor,idSensor);})[0];
        res.send(sensor);
        res.end();
    });

    function idEqual(entity,id) {
       return entity.id == id;
    }
    
};