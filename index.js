const express = require('express')
const app = express();
const port = 3000;

const data = require('./db/data-old.json')
const loja = require('./db/data.json')

app.get('/', (require, response) => {
    response.send('Hello world Gio tops')
})

app.get('/abc', (require, response) => {
    //  data : nome, idade, cidade
    const { nome, idade, cidade } = data

    const info = `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
    response.send(info)
})

app.get('/vendas', (require, response) => {
   // write your code ...
	'papel'
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

