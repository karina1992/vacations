const con = require('../utils/database')
const Users = require('../models/usersModel')

exports.createUser = async (req, res) => {
    await Users.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error crate category" + JSON.stringify(err))
    })
}
