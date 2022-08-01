import { productService } from "../service/product-service.js";

const crearTarjeta = (nombre, imagen, precio, categoria, id, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("destacado__producto");
    tarjeta.classList.add("producto")
    const contenido = `
        <img class="producto__foto" src=".${imagen}">
        <h4 class="producto__nombre">${nombre}</h4>
        <p class="producto__precio">$${precio}</p>
        <a class="button producto__ver" href="../screens/producto.html?id=${id}">ver producto</a>
        <div class="botonera">
            <a class="producto__editar" href="../screens/editar-producto.html?id=${id}">Editar</a>
            <a class="producto__eliminar" id="${id}" data-eliminar>Eliminar</a>
        </div>
        `;
    tarjeta.innerHTML = contenido;
    const btn = tarjeta.querySelector('[data-eliminar]');
    btn.addEventListener('click', () => {
        const id = btn.id;
        productService.eliminarProducto(id);
    })
    return tarjeta;
}

const adminProducto = document.querySelector(".admin-producto")
console.log(adminProducto)

productService.listaProductos()
.then((producto) => {
    producto.forEach(({nombre, imagen, precio, id, categoria, descripcion}) => {
        const nuevaTarjeta = crearTarjeta(nombre, imagen, precio, categoria, id, descripcion);
        adminProducto.appendChild(nuevaTarjeta);        
    });
})
