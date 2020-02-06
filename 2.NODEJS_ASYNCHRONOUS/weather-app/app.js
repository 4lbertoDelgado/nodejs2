//  Cargamos los modulos
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode');

forecast('-12.094426', '-77.028988', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
})

geocode('Lima', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
})