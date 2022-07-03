const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Aplicação rodando...')
})

app.listen(port, () => {
  console.info(`Aplicação rodando na porta: ${port}`)
})

console.log('Deploy efetuado')
