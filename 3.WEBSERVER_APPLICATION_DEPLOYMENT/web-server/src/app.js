// Cargamos los mudulos de node
// path es un modulo de node que nos ayuda en la manipulacion de rutas
const path = require('path');
// Cargamos los modulos de npm
const express = require('express');

// inicializamos la aplicacion web
const app = express()

// Middleware
// Metodo app.use es la forma de declarar un Middleware y esto se ejecuta al inicio del todo
// Se ejecuta en el orden en que se coloca en el codigo
// Recibe una funcion como parametro

// express.static()
// sirve para establecer la ruta publica donde se encuentran los archivos estaticos
// Con esto express sirve todos los archivos estaticos dinamicamente y ya no tenemos que colocar un metodo app.get por cada ruta

// __dirname indica la ruta de acceso al directorio que contiene nuestra aplicacion app.js
// __filename indica la ruta de acceso al archivo mismo app.js
// path ofrece el metodo join que nos permite manipular, avanzar y retrocer de un directorio a otro

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// Definimos los metodos
// Establecemos un controlador para una peticion GET, es decir que va a suceder cuando realicen una peticion GET a una ruta especifica
// Hay dos parametros en el metodo GET
// 1er arg: indica la ruta a consultar url (al pasarle una cadena vacia, indica que este metodo es para la ruta raiz /)
// 2do arg: indica la funcion que le dice a expres que va a enviar a la persona que hizo la solicitud 
// Esta funcion debe tener 2 argumentos
//  - 1er arg: es la solictud (request)
//  Contiene informacion que viene desde el cliente como cabeceras que se utilizaron y cualquier informacion cuerpo que se utilizo en la solicitud 
//  - 2do arg: es la respuesta (response)
//  Contiene un monton de metodos, para que pueda responder a la solictud de la forma que quiera, puede personalizar los datos que envia devuelto


// Comentamos este codigo, debido a que nunca va a funcionar debido a que la primera coincidencia del la ruta raiz va a encontrarla en el directorio publico de archivos estaticos, en el archivo index.html, este indica que se refiere a lo que va a servir por defecto al entrar a esa ruta raiz

// app.get('', (req, res) => {
//     // metodo res.send permite enviar datos como respuesta
//     // Cuando alguien vea el sitio web, van a ver esta cadena si hacen una peticion desde una aplicacion o el navegador
//     // Estamos enviando una cadena desde el servidor al cliente que hizo la solicitud
//     // res.send('Hello express!')

//     // Para enviar html como respuesta
//     // res.send('<h1>Weather</h1>')
//     // Para enviar un objeto json 
//     // res.send({name: 'Pierre'})
//     // Para enviar un array de objetos json
//     res.send([{name: 'Pierre'}, {name: 'Natalie'}])

// })

// Comentamos este codigo porque en el directorio de staticos va a encontrar help.html y about.html respectivamente

// app.get('/help', (req, res) => {
//     res.send('Help page')
// });

// app.get('/about', (req, res) => {
//    res.send('About page') 
// });

app.get('/weather', (req, res) => {
    res.send('Weather page') 	
});

// Hacemos que la aplicacion escuche en un puerto especifico
// 1er parametro: puerto de escucha
// 2do parametro: funcion que se ejecutara cuando el servidor este activo, ya que puede tomar algo de tiempo en conseguir iniciar 


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
