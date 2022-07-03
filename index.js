const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Servidor Rodando no Heroku')
})

app.get('/about', (req, res) => {
  res.send('Sobre o Site')
})

app.listen(port, () => {
  console.info(`Aplicação rodando na porta: ${port}`)
})

console.log('Deploy efetuado')
