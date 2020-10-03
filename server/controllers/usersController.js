const con = require('../utils/database')
const Users = require('../models/usersModel')

///////////////////////////////////////////////////
//Create New User & check if not exists  [REGISTER].
///////////////////////////////////////////////////
exports.createUser = async (req, res) => {
    let userName = req.body.userName;
    const Users1 = await Users.findOne({ where: { userName: userName } });
    if (Users1 === null) {
        Users.create(req.body).then(result => {
            res.send(result)
        }).catch(err => {
            res.send("error crate user" + JSON.stringify(err))
        });
    } else {
        res.send("error crate user");
    }
}
//////////////////////////////////////////
//[LOGIN], check the username & password
/////////////////////////////////////////
exports.login = async (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log("query:", req.body);
    await Users.findOne({ where: { userName: userName, password: password } }).then(result => {

        res.send(result);
        console.log(result)
    }).catch(err => {
        res.send("login error" + JSON.stringify(err))
    })

}