const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');


const Users = require('./models/usersModel');
const Vacations = require('./models/vacationsModel');
const Permissions = require('./models/permissionsModel');


const Sequelize = require('sequelize');
const sequelize = require('./utils/database');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const UsersRoute = require('./routes/usersRoute');
app.use('/users', UsersRoute);

const VacationsRoute = require('./routes/vacationsRoute');
app.use('/vacations', VacationsRoute);


app.use((req, res) => {
    res.send("Page NotFound");
})


sequelize.sync().then(result => {
    app.listen(5000);
}).catch(err => {
    // logger.log("error", "ERRR " + JSON.stringify(err))
})