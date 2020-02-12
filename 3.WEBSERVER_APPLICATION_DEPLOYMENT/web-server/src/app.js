// Cargamos los modulos
const express = require('express');

// inicializamos la aplicacion wweb
const app = express()

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

app.get('', (req, res) => {
    // metodo res.send permite enviar datos como respuesta
    // Cuando alguien vea el sitio web, van a ver esta cadena si hacen una peticion desde una aplicacion o el navegador
    // Estamos enviando una cadena desde el servidor al cliente que hizo la solicitud
    // res.send('Hello express!')

    // Para enviar html como respuesta
    // res.send('<h1>Weather</h1>')
    // Para enviar un objeto json 
    // res.send({name: 'Pierre'})
    // Para enviar un array de objetos json
    res.send([{name: 'Pierre'}, {name: 'Natalie'}])

})

app.get('/help', (req, res) => {
    res.send('Help page')
});

app.get('/about', (req, res) => {
   res.send('About page') 
});

app.get('/weather', (req, res) => {
    res.send('Weather page') 	
});

// Hacemos que la aplicacion escuche en un puerto especifico
// 1er parametro: puerto de escucha
// 2do parametro: funcion que se ejecutara cuando el servidor este activo, ya que puede tomar algo de tiempo en conseguir iniciar 


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
