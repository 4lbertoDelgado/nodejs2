// Object property shortland
// Esto nos permite añadir valores a un objeto con una sintaxis abreviada bajo ciertas condiciones

const name = 'Pierre'
const ageUser = '31'

const user = {
    name,
    age: ageUser,
    location : 'Lima, Peru'
}

console.log(user)

// Object destructuring
// Es util cuando se tiene un objeto y usted esta tratando de acceder a las propiedades de ese mismo objeto

const product = {
    label: 'Cuaderno rojo',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// NO destructuring
// const label = product.label
// const stock = product.stock

// SI descructuring
// rating: no esta definido en el objeto, a este se le asignara el valor de undefined
// sku: se puede otorgar un valor por defecto a una propiedad que no esta definida en el objeto. si se encuentra definida, la propiedad toma el valor definido en el objeto
// label: Al usar los dos punto, permite renombrar la propiedad que se quiere obtener
// nombreOriginal:nombreNuevo 
const {label:productLabel, stock, rating, sku = 'k0001'} = product
console.log(productLabel);
console.log(stock);
console.log(rating);
console.log(sku);

// Object Structuring 
// En vez de recibir todo el objeto, solo recibimos las propiedades que necesitamos
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product)