const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta)=> respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json())
}

const crearProducto = (nombre, imagen, precio, categoria, descripcion, id) =>
fetch("http://localhost:3000/productos",{
    method: 'POST',
    headers: {"content-type":"application/json"},
    body:JSON.stringify({nombre, imagen, precio, categoria, descripcion, id: uuid.v4()}),
}
).then((respuesta) => respuesta.json())

const editarProducto = (nombre, imagen, precio, categoria, descripcion,id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
    method: "PUT",
    headers: {"content-type":"application/json"},
    body:JSON.stringify({nombre, imagen, precio, categoria, descripcion}),
    }
    ).then((respuesta) => respuesta.json())
}

const eliminarProducto = (id) =>{
    console.log(id)
return fetch(`http://localhost:3000/productos/${id}`,{
    method: "DELETE",
})
}

export const productService = {
    listaProductos,
    detalleProducto,
    crearProducto,
    editarProducto,
    eliminarProducto,
}