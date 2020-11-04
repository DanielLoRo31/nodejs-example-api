// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Saludos desde el servidor');
//     res.end();
// })

// server.listen(3000, () => {
//     console.log('Servidor ejecutandose en puerto 3000')
// });
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')

const productRoute = require("../routes/products.js");
const userRoute = require("../routes/usersRoutes.js");

//Configuraciones
//app.set('port', 3000)
app.set('port', process.env.PORT || 3000)

// Parsear solicitud del cliente
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const isLogged = (req, res, next) => {
  console.log("Middleware isLogged");
  next();
};

//app.use(isLogged);
app.use(morgan("dev"));

app.use("/products", productRoute);
app.use("/users", userRoute);

// Acceder a carpeta public
// app.use(express.static(path.join(__dirname, '../public')))

//Rutas que no estan definidas
app.get('*', (req, res) => {
    //res.status(404).send('Page not found')
    res.status(404).sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Servidor en puerto ${app.get('port')}`);
});
