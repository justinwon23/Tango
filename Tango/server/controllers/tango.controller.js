const Model = require('../models/markers.model')
 
module.exports.findAll = (req, res) => {
    Model.find({"name" : {"$exists": true}}).sort({'name' : 1})
        .then(allEntries => res.json( allEntries ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// module.exports.findAll = (req, res) => {
//     Model.find()
//         .then(allEntries => res.json( allEntries ))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
 
module.exports.findOneSingle = (req, res) => {
    Model.findOne({ _id: req.params.id })
        .then(oneSingle => res.json(oneSingle ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNew = (req, res) => {
    Model.create(req.body)
        .then(newlyCreated => res.json(newlyCreated ))
        .catch(err => res.status(400).json(err));
}
// module.exports.createNew = (req, res) => {
//     Model.create(req.body)
//         .then(newlyCreated => res.json(newlyCreated ))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
 
module.exports.updateExisting = (req, res) => {
    Model.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json(err));
}
 
// module.exports.updateExisting = (req, res) => {
//     Model.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updated => res.json(updated))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
 
module.exports.deleteAnExisting = (req, res) => {
    Model.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
