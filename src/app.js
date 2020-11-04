// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Saludos desde el servidor');
//     res.end();
// })

// server.listen(3000, () => {
//     console.log('Servidor ejecutandose en puerto 3000')
// });


const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')()

const productRoute = require('../routes/products.js')
const userRoute = require('../routes/users.js')


// Parsear solicitud del cliente
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/products', productRoute)
app.use('/users', userRoute)



app.listen(3000, () => {
    console.log('Servidor en puerto 3000')
})