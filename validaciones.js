

function validar(){
   
    var regex = /^[A-Za-z0-9 ]+$/

    var _nombre_valido = regex.test(document.getElementById("nombre").value);
    var _apellido_valido = regex.test(document.getElementById("apellido").value);
    var _direccion_valido = regex.test(document.getElementById("direccion").value);
    var _dni_valido = regex.test(document.getElementById("dni").value);
    var _contrasena_valido = regex.test(document.getElementById("password").value);
    
    if (!_nombre_valido) {
        alert("Campo nombre no puede tener caracteres especiales");
        event.preventDefault();
    } 
    if (!_apellido_valido) {
        alert("Campo apellido no puede tener caracteres especiales");
        event.preventDefault();
    }
    if (!_dni_valido) {
        alert("Campo dni no puede tener caracteres especiales");
        event.preventDefault();
    }
    if (!_direccion_valido) {
        alert("Campo direccion no puede tener caracteres especiales");
        event.preventDefault();
    }
    if (!_contrasena_valido) {
        alert("Campo contrasena no puede tener caracteres especiales");
        event.preventDefault();
    }

    
}

