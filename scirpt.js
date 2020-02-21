function guardarDatos(){
    var nombre = document.getElementById('nombre').value
    var pass = document.getElementById('pass').value
    var edad = document.getElementById('edad').value
    if(nombre =="" || nombre==null || nombre ==undefined){
        alert("El nombre no puede estar vacio")
        return
    }
    if(nombre =="" || nombre==null || nombre ==undefined){
        alert("debe ingresar una contraseña")
        return
    }
    if(edad == undefined || edad <= 0){
        alert("La edad no puede estar vacio")
        return
    }

    guardarUsuario(nombre, pass)
    var nombre_guardado = obtenerNombre()
    var nombre_login = document.getElementById('login_nombre')
    nombre_login.innerHTML = `hola ${nombre_guardado}`
    nombre_login.classList.add('login_data')

    var edad_login = document.getElementById('login_edad')
    edad_login.classList.add('login_data')


    var saludo = calcularSaludo(edad)
    
    edad_login.innerHTML = saludo

    return false;
}

function guardarUsuario(nombre, pass){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('pass',pass)
}
function obtenerNombre(){
    return localStorage.getItem('nombre')
}
function calcularSaludo(edad){
    var saludo;
    if(edad < 18){
        saludo = 'es un gusto saludarle joven'
    }else{
        saludo = 'es un gusto saludarle se&#241or'
    }

    saludo +=' <br> su token de session es '+ Math.floor(Math.random()*10000) 

    return saludo
}
function resetearPagina(){
    localStorage.removeItem('nombre')
    localStorage.removeItem('pass')
    location.reload()
}
function imprimirPagina(){
    document.getElementById('login_form').style.display = 'none'
    window.print()
    document.getElementById('login_form').style.display = 'block'
}

function mostrarPassword() {
    var pass = document.getElementById("pass");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
  }