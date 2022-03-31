const db = require('../models');
const User = db.User;

exports.findAll = (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.messagem || "Some error while post data"
            })
        });
}