const con = require('../utils/database')
const Vacations = require('../models/vacationsModel')

//Get All Vacations
exports.getAllVacations = async (req, res) => {
    await Vacations.findAll().then(result => {
        res.send(result);
        console.log("result- all vacations:", result)
    }).catch(err => {
        res.send("error get all vacations, try again.." + JSON.stringify(err))
    })
}

//Create New Vacation 
exports.createVacation = async (req, res) => {
    await Vacations.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error crate category" + JSON.stringify(err))
    })
}

//Delete Vacation By ID 
exports.deleteVacation = async (req, res) => {
    let ID = req.query.id;
    await Vacations.destroy({ where: { id: ID } }).then(result => {
        let error = '';
        error = result == 0 ? "Not Found" : "";
        console.log(req.query)
        res.send({ status: result })

    }).catch(err => {
        res.send({ code: 0, error: err })
    })
}

//Edit Vacation
exports.updateVacation = async (req, res) => {
    let ID = req.body.id;
    await Vacations.update(req.body, { where: { id: ID } }).then(result => {
        console.log(req.body)
        res.send({ status: result })

    }).catch(err => {
        res.send("error update", JSON.stringify(err))
    })
}