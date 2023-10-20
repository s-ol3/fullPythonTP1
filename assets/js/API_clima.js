
		
        //Guardamos la url de la api que vamos a usar
        const url_api = "https://api.open-meteo.com/v1/forecast?latitude=-37.3217&longitude=-59.1332&hourly=temperature_2m"
        //Indicamos que la función va a ser asíncrona (lo usamos cuando trabajamos con apis externas)
        async function obtenerClima(){
            //Fetch va a buscar los datos a la api y devuelve promesas
            //Con await decimos que espere porque puede tardar 
            const response = await fetch(url_api)
            console.log(response)   // Acá lo importante es que la promesa
                                    // me devuelve en [[PromiseResult]]: Response
                                    // que el status es 200, indica que trajo los datos
                                    // podría traer errores de 400 para arriba: no se encuentra la página
                                    // o 500 para arriba: errores de servidor
            
            //Debemos transformar esto en un objeto json para poder trabajarlo:
            const data = await response.json()
            console.log(data)

            //Ahora podemos mostrar los datos:
            const temperatura = data.temperature_2m
            const hora = data.time
            console.log(temperatura)
            console.log(hora)
            document.getElementById("temperature_2m").innerHTML = temperatura
            document.getElementById("time").innerHTML = hora
            
        }

        obtenerClima()
        //Si vamos actualizando se van a ir viendo el cambio en los datos

