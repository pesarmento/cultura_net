const Sequelize = require('sequelize')
const sequelize = new Sequelize('culturanet', "root", "123456", {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(function(){
        console.log("Conectado com sucesso")
    }).catch(function(){
        console.log("Erro ao se conectar com o banco de dados")
    })

module.exports = sequelize;