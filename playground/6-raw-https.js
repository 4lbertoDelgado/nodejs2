// Cargamos los modulos de node
const https = require('https')

//  Definimos el API_KEY para consumir el API DARKSKY
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'
const latitude = 40
const longitude = -45
const url = `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}?units=si`

// Definimos una variable que almacenara los datos que van llegando
// La establecemos como let, porque ira cambiando en el tiempo
let data = ''

// Llamamos a la funcion request
// Pero para que se ejecute, se debe almacenar lo que devuelve request en una variable 
const request = https.request(url, (response) => {
    // Aqui no tenemos acceso directo a la respuesta en el body, ya que nos datos no legan completos sino en pedazos, depende de como el servidor envia los datos.
    // Debemos capturar los datos que van llegando con la funcion on
    // On nos permite manejar un handler (controlador)
    // Hay una serie de eventos que se pueden registrar, pero uno de ellos es de datos
    // Proporcionamos el nombre del evento como primer argumento string
    // Proporcionamos el callback como segundo argumento que se ejecutara cunado lleguen los datos
    // Este callback tiene como unico argumento chunk (trozo) que es una parte de los datos que van llegando de a poco
    // Este callback corre varias veces, una por cada chunk 
    response.on('data', (chunk) => {
        // chunk lo que regresa es un buffer por lo que vamos a convertirlo en cadena
        data = data + chunk.toString()
    })

    // Establecemos otro handler para controlar los errores
    request.on('error', (error) => {
        console.log('An error', error);
    })


    // Establecemos otro handler para controlar cuando hallamos terminado
    // El callback no recibe ningun argumento, en su lugar mediante la ejecucion, sabemos que hemos terminado
    // Este callback se va a ejecutar una sola vez una vez que se haya terminado
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

// Para luego llamar a la funcion end y terminar la ejecucion
request.end()