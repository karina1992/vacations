const Sequelize = require('sequelize');
const sequelizeDBConnection = require('../utils/database')

const Vacations = sequelizeDBConnection.define('tblVacations', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numOfFollowers: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

module.exports = Vacations;
