import { productService } from "../service/product-service.js";

const url = new URL(window.location);
console.log(url)
const id = url.searchParams.get("id");
console.log(id)

const presentarProducto = (nombre, imagen, precio, descripcion) => {
    const main = document.querySelector('main')
    const contenido = `
    <section>
        <div class="contenedor-imagenes">
            <img src='${imagen}'
        </div>
        <div class="contenedor-datos">
            <h1 class="titulo-producto">${nombre}</h1>
            <h2 class="precio-producto">ARS$${precio}</h2>
        </div>
    </section>
    <section>
        <div class="descripcion-producto">
            <h2>Descripción</h2>
            <p>${descripcion}</p>
        </div>
    </section>`

    main.innerHTML = contenido
}

productService.detalleProducto(id)
.then(({nombre, imagen, precio, descripcion}) => {
    presentarProducto (nombre, imagen, precio, descripcion)
})