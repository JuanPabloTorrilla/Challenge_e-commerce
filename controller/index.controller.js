import { productService } from "../service/product-service.js";

const dateObj = new Date
const mesOferta = dateObj.toLocaleString("es-MX", { month: "long" });
const ofertaBanner = document.querySelector('[data-banner]');
ofertaBanner.innerHTML= "Ofertas del mes de "+mesOferta;
const crearTarjeta = (nombre, imagen, precio, categoria, id, descripcion) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("destacado__producto");
    tarjeta.classList.add("producto")
    const contenido = `
        <img class="producto__foto" src="${imagen}">
        <h4 class="producto__nombre">${nombre}</h4>
        <p class="producto__precio">$${precio}</p>
        <a class="button producto__ver" href="./screens/producto.html?id=${id}">ver producto</a>
        `;
    tarjeta.innerHTML = contenido;
    return tarjeta;
}

const categoria1 = document.querySelector('[data-categoria1]').innerHTML;
const categoria2 = document.querySelector('[data-categoria2]').innerHTML;
const categoria3 = document.querySelector('[data-categoria3]').innerHTML;
console.log(categoria1, categoria2, categoria3);
const section1 = document.querySelector('[data-galeria1]');
const section2 = document.querySelector('[data-galeria2]');
const section3 = document.querySelector('[data-galeria3]');

productService.listaProductos()
.then((producto) => {
    producto.forEach(({nombre, imagen, precio, id, categoria, descripcion}) => {
            if(categoria1 == categoria){
            const nuevaTarjeta = crearTarjeta(nombre, imagen, precio, categoria, id, descripcion);
            section1.appendChild(nuevaTarjeta);}
            if(categoria2 == categoria){
                const nuevaTarjeta = crearTarjeta(nombre, imagen, precio, categoria, id, descripcion);
                section2.appendChild(nuevaTarjeta);}
            if(categoria3 == categoria){
                const nuevaTarjeta = crearTarjeta(nombre, imagen, precio, categoria, id, descripcion);
                section3.appendChild(nuevaTarjeta);}
    });
})
