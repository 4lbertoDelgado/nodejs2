//  Cargamos los modulos
const request = require('request')

//  Definimos el API_KEY para consumir el API MAPBOX
const API_KEY_MAPBOX = 'pk.eyJ1IjoiYWxiZXJ0b2RxNyIsImEiOiJjazY3MGlwdGswZXZ6M2VxanlsNGdrODhiIn0.M8eM1ZIzrjC7Oyu5C_kajg'

const geocode = (address, callback) => {

    //  Codificamos la direccion ingresada por el usuario
    var encodeAddress = encodeURIComponent(address)

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeAddress}.json?access_token=${API_KEY_MAPBOX}&limit=1`

    // Uso de API MAPBOX
    request({
        url,
        json: true
    }, (error, { body }) => {
        // error va a controlar si existe un problema con el api de mapbox o red
        if (error) {
            // console.log(error);
            // console.log('Unable to connect to location service!');
            callback('Unable to connect to location service!', undefined)
        // response.statusCode va a controlar si existe un problema con el input del usuario    
        } else if (body.features.length === 0) {
            // console.log('Unable to find location. Try another search.');
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            const location = body.features[0].place_name
            // console.log(`${body.features[0].place_name}\nLatitude: ${latitude}\nLongitude: ${longitude}`);
            callback(undefined, {latitude, longitude, location})
        }
    })
}

module.exports = geocode


