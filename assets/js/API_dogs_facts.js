

let url2 = 'https://dog-api.kinduff.com/api/facts' //variable donde hacemos referencia al origen de los datos
fetch(url2) //solicitud a la url
    .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json). Extraemos el contenido JSON desde la respuesta.
    .then(data => mostrarData2(data)) // funcion mostrar data
    .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch


const mostrarData2 = (data) => {
    const fact2 = data.facts
    console.log(fact2)
    document.getElementById("fact2").innerHTML = fact2

    mostrarData2()
}