const Sequelize = require('sequelize');
const sequelizeDBConnection = require('../utils/database')

const Users = sequelizeDBConnection.define('tblUsers', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userType: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

module.exports = Users;
