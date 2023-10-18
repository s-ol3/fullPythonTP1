let miProducto=`
    <div class="tarjeta">
    `

for(let elemento of dataSnacks){  
// voy iterando y agregando tarjetas

miProducto = miProducto +`

<div class="tarjeta">
    <img src= ${elemento.image} alt="producto">
    <div class="tarjeta-body">
        <h2>${elemento.name}</h2>
        <p>${elemento.resume} </p>
    </div>
</div>
`
}
miProducto = miProducto + `</div>`

document.querySelector("section").innerHTML=miProducto