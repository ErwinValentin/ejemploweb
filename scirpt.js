function guardarDatos(){
    //Leer los valores del nombre y la edad 
    var nombre = document.getElementById('nombre').value
    var edad = document.getElementById('edad').value
    var pass = document.getElementById('pass').value
    //mostrar alerta si el nombre esta vacio
    if(nombre == undefined || nombre == "" || nombre == null){
        alert('El nombre es requerido')
        return 
    }
    //alert('estoy afuera del if')

    //mostrar alerta si la edad esta vacia o es 0 o menor
    if(edad == undefined || edad<1){
        alert('La edad es requerida')
        return 
    }

    if(pass == undefined || pass == "" || pass == null){
        alert('La pass es requerido')
        return 
    }
    //guardar el nombre
    guardarUsuario(nombre, pass)
    //leer el nombre guardado
    var nombre_usuario = obtenerNombre()
    //basado en la edad crear un mensaje de bienvenida
    var saludo = calcularSaludo(edad)

    document.getElementById('login_nombre').innerHTML = `Hola ${nombre_usuario}`

    document.getElementById('login_edad').innerHTML = saludo

    //mostrar los mensajes y cambiarles los estilos
    return false;
}

function guardarUsuario(nombre, pass){
    //simular el guardado de nombre usando el local storage
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('pass', pass)

}
function obtenerNombre(){
    return localStorage.getItem('nombre')
}
function calcularSaludo(edad){
    //cambiar el saludo si la edad es menor a 18
    var saludo ;
    if(edad < 18){
        saludo = 'bienvenido joven'
    }else{
        saludo = 'bienvenido senior'
    }
    saludo += "<br> su codigo es: "+Math.floor(Math.random()*1000)

    return saludo
}
function resetearPagina(){
    //borrar el nombre del local storage y refrescar la pagina
}
function imprimirPagina(){
    //ocultar el formulario, luego llamar a imprimir pantalla, y finalmente mostrar el formulario otra vez
}
function mostrarPassword(){
    //cambiar el tipo de input del campo password
}