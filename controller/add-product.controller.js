import { productService } from "../service/product-service.js";

const formulario = document.querySelector('[data-productForm]');

formulario.addEventListener('submit', (evento) =>{
evento.preventDefault();
const productName = document.querySelector('[data-producto]').value;
const productImg = document.querySelector('[data-imagen]').value;
const productPrice = document.querySelector('[data-precio]').value;
const productCategory = document.querySelector('[data-categoría]').value;
const productdescription = document.querySelector('[data-descripcion]').value;
productService
.crearProducto(productName, productImg, productPrice, productCategory, productdescription)
.catch(() => alert('Ha ocurrido un error'))
})

const header = document.querySelector('.container-head');
const logBtn = document.querySelector('.login-button') 
if(userLog){
    const nav = document.createElement('nav');
    nav.classList.add("menu");
    const contenido = `
            <ul class="menu__lista">
                <li class="menu__item">
                    <a class="menu__link activo" href="./admin-producto.html">
                        Administrar productos</a>
                    <a class="menu__link" href="#">
                        Perfil</a>
                    <a class="menu__link" href="#hobbies">
                        Salir</a>
                </li>
            </ul>
   `
   nav.innerHTML = contenido;
   header.appendChild(nav);
}