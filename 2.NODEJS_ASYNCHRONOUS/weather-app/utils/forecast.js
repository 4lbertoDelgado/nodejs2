//  Cargamos los modulos
const request = require('request')

//  Definimos el API_KEY para consumir el API DARKSKY
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'

const forecast = (latitude, longitude, callback) => {

    const url = `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}?units=si`

    // Uso de API DARKSKY
    request({
        // indica lo que vamos a solicitar
        // los parametros opcionales se colocan despues del ?
        // units=si indica que los valores de respuesta seran en grados celcius
        // lang=es indica el pronostico en idioma español
        url,
        // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
        json: true
    }, (error, { body }) => {
        // error va a controlar si existe un problema con el api de darksky o red
        if (error) {
            // console.log(error);
            // console.log('Unable to connect to weather service!');
            callback('Unable to connect to weather service!', undefined)
        // response.statusCode va a controlar si existe un problema con el input del usuario
        } else if (body.error) {
            // console.log('Unable to find location');
            callback('Unable to find location', undefined)
        } else {
            // console.log(`${body.daily.data[0].summary} It's a currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);

            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            const summary = body.daily.data[0].summary

            callback(undefined, {temperature, precipProbability, summary})
        }
    })    
}

module.exports = forecast