//  Definimos el API_KEY para consumir el API de Darksky
const API_KEY_DARKSKY = '7ed09689d34081b66da9cb66c54b4b19'
const latitude = '-12.094426'
const longitude = '-77.028988'
const url = 'https://api.darksky.net/forecast/7ed09689d34081b66da9cb66c54b4b19/-12.094426,-77.028988'

const API_KEY_MAPBOX = 'pk.eyJ1IjoiYWxiZXJ0b2RxNyIsImEiOiJjazY3MGlwdGswZXZ6M2VxanlsNGdrODhiIn0.M8eM1ZIzrjC7Oyu5C_kajg'

//  Cargamos los modulos
const request = require('request')

request({
    // indica lo que vamos a solicitar
    // los parametros opcionales se colocan despues del ?
    // units=si indica que los valores de respuesta seran en grados celcius
    // lang=es indica el pronostico en idioma español
    url: `https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}?units=si`,
    // indica que los datos que vienen de vuelta van a ser json, y debe convertirlo a un objeto
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);
        console.log(`${body.daily.data[0].summary} It's a currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
    } else {
        console.log(error);
        console.log('Unable to fetch weather.');
    }
})