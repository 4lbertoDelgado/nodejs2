//  Cargamos los modulos
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode');

// Obtenemos la direccion del usuario
const address = process.argv[2]

// Validamos si se da una direccion por el usuario
if (!address) {
    console.log('Please provide an Address');
} else {
    geocode(address, (error, geocodeData) => {
        if (error) {
            return console.log(error);
        } 
        forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            } 
            console.log(geocodeData.location);
            console.log(forecastData);    
        })
    })
}
