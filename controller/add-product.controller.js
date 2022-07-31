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