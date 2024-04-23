const Sequelize = require("sequelize")
const db = require('./db.js')

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync()
module.exports = User