const express = require("express")
const app = express()
const User = require("./models/User")

app.get('/', async (req, res) =>{
    res.send("Pagina Inicial")
})

app.post('/cadastrar', async (req, res) =>{
    res.send("Pagina Cadastrar")
})



app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})