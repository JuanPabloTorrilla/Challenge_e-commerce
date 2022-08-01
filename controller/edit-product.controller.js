const editformulario = document.querySelector(".login-form");

 import { productService } from "../service/product-service.js";
import { userLog } from "./login.controller.js";


const infoProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const productName = document.querySelector('[data-producto]');
    const productImg = document.querySelector('[data-imagen]');
    const productPrice = document.querySelector('[data-precio]');
    const productCategory = document.querySelector('[data-categoría]');
    const productdescription = document.querySelector('[data-descripcion]');
    productService.detalleProducto(id).then((producto) =>{
        productName.value = producto.nombre;
        productImg.value = producto.imagen;
        productPrice.value = producto.precio;
        productCategory.value = producto.categoria;
        productdescription.value = producto.descripcion;    
        });
}

infoProducto();

editformulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const productName = document.querySelector('[data-producto]').value;
    const productImg = document.querySelector('[data-imagen]').value;
    const productPrice = document.querySelector('[data-precio]').value;
    const productCategory = document.querySelector('[data-categoría]').value;
    const productdescription = document.querySelector('[data-descripcion]').value;
    console.log(productName,productImg,productPrice,productCategory,productdescription,id)
    productService.editarProducto(productName,productImg,productPrice,productCategory,productdescription,id)
    .then(()=> window.location.href="../screens/admin-producto.html")
})

