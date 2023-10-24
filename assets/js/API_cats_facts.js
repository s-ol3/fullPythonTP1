// https://catfact.ninja/fact

let url = 'https://catfact.ninja/fact' //variable donde hacemos referencia al origen de los datos
fetch(url) //solicitud a la url
    .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json). Extraemos el contenido JSON desde la respuesta.
    .then(data => mostrarData(data)) // funcion mostrar data
    .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch


const mostrarData = (data) => {
    const fact = data.fact
    console.log(fact)
    document.getElementById("fact").innerHTML = fact

    mostrarData()
}



