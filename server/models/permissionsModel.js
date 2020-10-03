const Sequelize = require('sequelize');
const sequelizeDBConnection = require('../utils/database')


const Permissions = sequelizeDBConnection.define('tblPermissions', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

module.exports = Permissions;
