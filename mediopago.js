function validar_tarjeta(input, cantidad_digitos){
    var numero_tarjeta = input.value;
    var digitos_permitidos = cantidad_digitos;

    if(numero_tarjeta.length != digitos_permitidos){
        alert("La tarjeta debe tener 16 digitos");
    }else{
        //alert("Registro exitoso");
    }
};

function validar_cuenta_bancaria(cbu,cant_cbu,cuil,cant_cuil){
    var _cuil = cuil.value;
    var _cbu = cbu.value;
    var cantidad_permitida_cuil= cant_cuil;
    var cantidad_permitida_cbu= cant_cbu;

    if (_cbu.length != cantidad_permitida_cbu){
        alert("El CBU debe tener 22 dígitos");
        preventDefault();
    } 
    if(_cuil.length != cantidad_permitida_cuil){
        alert("El CUIL debe tener 11 dígitos");
        preventDefault();
    }

    alert("Registro exitoso");
    
};

function validar_mercado_pago(){
    
    
    var aviso = document.getElementById('aviso');
    aviso.style.color = 'red';
    alert("Registro exitoso");
    if(true){
        window.location.href = 'mensajeRegistro.html';
    }
    return false;
    
}