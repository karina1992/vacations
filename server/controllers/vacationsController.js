const con = require('../utils/database')
const Vacations = require('../models/vacationsModel')

exports.createVacation = async (req, res) => {
    await Vacations.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error crate category" + JSON.stringify(err))
    })
}
