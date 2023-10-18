// para que al enviar form se quede dentro de la pagina y no vaya a formspree + alert
// https://www.youtube.com/watch?v=qtH8PLuy1Ck -->

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Consulta enviada ✓\n¡Te responderemos pronto!')
    }
}






//Mica, no funcionan validaciones/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//Acceso al formulario
//const formulario = document.getElementById('form');

// const $form = document.querySelector('#form')




// //Expresiones regulares
// const expresiones = {
//     name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// }

// // Evento para el envío del formulario con preventDefault para evitar el envío por defecto
// formulario.addEventListener('submit', async (event) => {
//     event.preventDefault();
// })
// // Obtención de los valores del campo
// const nombre = document.getElementById('name').value;
// const email = document.getElementById('email').value;
// const mensaje = document.getElementById('message').value;

// // Validación de campos
// if (!expresiones.name.test(nombre)) {
//     alert('El nombre no es válido.');
//     return;
// }
// if (!expresiones.email.test(email)) {
//     alert('El email no es válido.');
//     return;
// }

// // Creación de un objeto FormData
// const formData = new FormData();
// formData.append('nombre', nombre);
// formData.append('email', email);
// formData.append('mensaje', mensaje);

// // Envío de datos
// const response = await fetch('https://formspree.io/f/xayglqpn', {
//     method: 'POST',
//     body: formData,
//     headers: {
//         'Accept': 'application/json'
//     }
// });

// // Validación y manejo de la respuesta
// const form = document.querySelector("#form")
// $form.addEventListener("submit", handlesubmit)

// function handleSubmit(event) {
//     event.preventDefault()
//     const form = new FormData(this)
//     fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             "Accept": "application/json"
//         }
//     })
// }

// if (response.ok) {
//     alert('¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.');
// } else {
//     alert('¡Ocurrió un error al enviar el formulario! Por favor, inténtalo de nuevo.');
// };

