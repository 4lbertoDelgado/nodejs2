//  Definimos el API_KEY para consumir el API DARKSKY
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'
const latitude = '-12.094426'
const longitude = '-77.028988'
const url = 'https://api.darksky.net/forecast/7ed09689d34081b66da9cb66c54b4b19/-12.094426,-77.028988'

//  Definimos el API_KEY para consumir el API MAPBOX
const API_KEY_MAPBOX = 'pk.eyJ1IjoiYWxiZXJ0b2RxNyIsImEiOiJjazY3MGlwdGswZXZ6M2VxanlsNGdrODhiIn0.M8eM1ZIzrjC7Oyu5C_kajg'
const address = 'Los Angeles'

//  Cargamos los modulos
const request = require('request')

// Uso de API DARKSKY
request({
    // indica lo que vamos a solicitar
    // los parametros opcionales se colocan despues del ?
    // units=si indica que los valores de respuesta seran en grados celcius
    // lang=es indica el pronostico en idioma español
    url: `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}?units=si`,
    // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
    json: true
}, (error, response, body) => {
    // error va a controlar si existe un problema con el api de darksky
    // response.statusCode va a controlar si existe un problema con el input del usuario
    if (!error && response.statusCode === 200) {
        console.log(`${body.daily.data[0].summary} It's a currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
    } else if (body.error) {
        console.log('Unable to find location');
    } else {
        console.log(error);
        console.log('Unable to connect to weather service!');
    }
})

// Uso de API MAPBOX
//  Codificamos la direccion ingresada por el usuario
var encodeAddress = encodeURIComponent(address)
request({
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeAddress}.json?access_token=${API_KEY_MAPBOX}&limit=1`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const latitude = body.features[0].center[1]
        const longitude = body.features[0].center[0]
        console.log(`${body.features[0].place_name}\nLatitude: ${latitude}\nLongitude: ${longitude}`);
    } else if (body.features.length === 0 ) {
        console.log('Unable to find location. Try another search.');
    } else {
        console.log(error);
        console.log('Unable to connect to location service!');
    }
})
