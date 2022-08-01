const usuario = document.querySelector('[data-user]');
const password = document.querySelector('[data-password]');
const formulario = document.querySelector('[data-login]')|| false;

export let userLog = sessionStorage.getItem("userLog") || false;

// if(usuario){
//     usuario.value = "admin"
//     password.value = "123456"}

if(formulario){
formulario.addEventListener('submit',(evento) =>{
    evento.preventDefault();
    if(usuario.value == "admin" && password.value == "123456"){
        userLog = true;
        sessionStorage.setItem("userLog","true");
        window.location.href="../index.html";
    }else{
        const error = document.createElement('span');
        const msjError = document.querySelector('span') || false;
        if(msjError.parentNode == formulario){
        formulario.removeChild(msjError)}
        error.innerHTML = "Usuario o contraseña incorrectos."
        formulario.appendChild(error)
        }
})
}

const header = document.querySelector('.container-head');
const logBtn = document.querySelector('.login-button')

if(userLog){
    if(logBtn)header.removeChild(logBtn);
    const nav = document.createElement('nav');
    nav.classList.add("menu");
    const contenido = `
            <ul class="menu__lista">
                <li class="menu__item">
                    <a class="menu__link activo" href="/Challenge_e-commerce/screens/admin-producto.html">
                        Administrar productos</a>
                    <a class="menu__link" href="#">
                        Perfil</a>
                    <button class="menu__link">
                        Salir</button>
                </li>
            </ul>
   `
   nav.innerHTML = contenido;
   header.appendChild(nav);
}
