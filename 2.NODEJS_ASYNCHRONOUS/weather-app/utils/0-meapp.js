// Prueba de consumo de Servidor Vault Calidad Sunat

// Cargamos los modulos
const request = require('request')

const role_id = '3ba904de-772c-83d8-07e7-9c0cf0c7b2f0'
const secret_id = '40267b1f-457f-2a82-a3a5-a4ae5b399222'

const getTokenVault = (role_id, secret_id, callback) => {
  const options = {
    method: 'POST',
    url: 'https://192.168.66.193:8200/v1/auth/approle/login',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({role_id, secret_id})
  };
  // Uso de la API de VAULT
  request(options, (error, { body }) => { 
    if (error) {
      callback('Unable to connect to getTokenVault service!', undefined)
    } else if (JSON.parse(body).errors) {
      callback(JSON.parse(body).errors, undefined)
    } else {
      const client_token = JSON.parse(body).auth.client_token
      callback(undefined, client_token)
    }
  });
}

const getPrivateKey = (client_token, callback) => {
  const options = {
    method: 'GET',
    url: 'https://192.168.66.193:8200/v1/tributario/kv/contribuyente/registro/cdt/keys/2419176516325134',
    headers: {
      'Authorization': `Bearer ${client_token}`
    }
  };
  // Uso de la API de VAULT
  request(options, (error, { body }) => { 
    if (error) {
      callback('Unable to connect to getPrivateKey service!', undefined)
    } else if (JSON.parse(body).errors) {
      callback(JSON.parse(body).errors, undefined)
    } else {
      const privateKey = JSON.parse(body).data.private_key.password.v1
      callback(undefined, {privateKey})
    }
  });
}

getTokenVault(role_id, secret_id, (error, client_token) => {
  if (error) {
    return console.log(error);
  }
  getPrivateKey(client_token, (error, getPrivateKeyData) => {
    if (error) {
      return console.log(error);
    } 
    console.log(getPrivateKeyData.privateKey);
  })
})





