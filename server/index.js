const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()

console.log(__dirname)
console.log(__filename)
const rutaPublic = path.join(__dirname, '../public')
console.log(rutaPublic)

app.use(express.static(rutaPublic))
//midleware funcion que se ejecute antes de todas las rutas las

//logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

//express static

app.get('/', (req, res) => {
  res.send('Estamos en la ruta raiz')
})

app.listen(3000, () => {
  console.log('El server acaba de iniciar en el puerto 3000')
})
