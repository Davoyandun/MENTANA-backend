const axios = require("axios");

class GetPaymentUrlUseCase {
  async execute(paymentInfo) {
    /*
      en paymentInfo recibimos el objeto del front, 
      { 
        "payment": {
          "reference": "1122334455",
          "description": "Prueba",
          "amount": {
            "currency": "USD",
            "total": 100
          }
            }
          usando esa informacion, podemos crear el objeto final para realizar la solicutud del url.
    */
    const { reference, description, amount } = paymentInfo.payment;
    
    let objForRequest = {
      locale: "es_CO",
      auth: {
        login:"c51ce410c124a10e0db5e4b97fc2af39", //login obtenido de placeToPay debe ser guardado en un .env
        //tranKey: Se genera en cada solicitud de forma programática.
        //Se genera con la siguiente fórmula Base64(SHA-256(nonce + seed + secretKey)) 
        //esta fórmula debe ser traducida según el lenguaje de programación utilizado.
        tranKey:"VQOcRcVH2DfL6Y4B4SaK6yhoH/VOUveZ3xT16OQnvxE=", 
        //nonce: Valor arbitrario que identifica a una petición cómo única.
        //Se genera y se utiliza para otras operaciones.
        //Al momento de enviarlo, debe ser codificado en base 64.
        //Ejemplo: base64('927342197')
        nonce:"NjE0OWVkODgwYjNhNw==", 
        //seed: Se trata de la fecha en la que se generó la autenticación. La fecha debe estar en formato ISO 8601.
        //Ejemplo: 2023-06-21T09:56:06-05:00
        seed:"2021-09-21T09:34:48-05:00"
      },
      payment: {
        reference: reference,
        description: description,
        amount: {
          currency: amount.currency,
          total: amount.total
        }
      },
      //Fecha de expiración de una sesión. El usuario debe terminar el proceso antes de esta fecha. 
      //El tiempo de expiración debe ser de al menos 5 minutos desde el momento de la creación.
      expiration: "2021-12-30T00:00:00-05:00",
      //URL de retorno, a esta url se redirige al usuario una vez termina la sesión. 
      //Ocurre cuando el usuario da click en Volver al comercio.
      returnUrl: "http/localhost:3000/payment/success",
      //Dirección IP del usuario que realizará el proceso. tambien se deberia de requerir en el body "paymentInfo"
      ipAddress: "127.0.0.1",
      //User Agent del navegador del usuario que realizará el proceso. tambien se deberia de requerir en el body "paymentInfo"
      userAgent: "PlacetoPay Sandbox"
    };
    const response = await axios.post("https://test.placetopay.com/api/session", objForRequest,{
      headers: { "Content-Type": "application/json" }
    });
    //se asume que la respuesta sera la url del proceso de pago en forma de un objeto con la propiedad proccesUrl
    const url = response.data.proccesUrl;
    return url;

  }
}

module.exports = GetPaymentUrlUseCase;