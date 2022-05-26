const Controller = require('../controllers/tango.controller');
 
module.exports = app => {
    app.get('/api/listing', Controller.findAll);
    app.get('/api/pirates/:id', Controller.findOneSingle);
    app.put('/api/pirates/:id', Controller.updateExisting);
    app.post('/api/listing', Controller.createNew);
    app.delete('/api/pirates/:id', Controller.deleteAnExisting);
}
