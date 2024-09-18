

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let alerta = document.getElementById('alerta');
let botonLimpiar = document.getElementById('limpiar');



const cadenaCaracteres= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
const cadenaNumeros = /[0123456789]/
const cadenaSimbolos = /[!@#$%^&*()]/
const cadenaMayusculas = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
        console.log(numeroDigitado)
    if (numeroDigitado < 8 || isNaN(numeroDigitado)){
        alerta.style.visibility = 'visible';
    } else {    
        alerta.style.visibility = 'hidden';
   
        let password = '';
        for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio)

            password+=caracterAleatorio;
        }
        contrasena.value = password;

        botonLimpiar.style.visibility = 'visible';
        document.getElementById('progress-bar').style.visibility = 'visible';
        console.log(document.getElementsByClassName('progress-bar'))
        document.getElementsByClassName('progress-bar')[0].classList.remove('bg-success');
        document.getElementsByClassName('progress-bar')[0].classList.remove('bg-danger');




        if (cadenaNumeros.test(password) && cadenaSimbolos.test(password) && cadenaMayusculas.test(password)) {
            document.getElementsByClassName('progress-bar')[0].textContent = 'CONTRASEÑA SEGURA';
            document.getElementsByClassName('progress-bar')[0].classList.add('bg-success');
        } else {
            document.getElementsByClassName('progress-bar')[0].textContent = 'CONTRASEÑA DÉBIL';
            document.getElementsByClassName('progress-bar')[0].classList.add('bg-danger');
        }
    }
}


function limpiar() {
    cantidad.value = '';
    contrasena.value = '';
    botonLimpiar.style.visibility = 'hidden';  
    alerta.style.visibility = 'hidden'; 

    let progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.textContent = '';  
    progressBar.classList.remove('bg-success', 'bg-danger');  
    document.getElementById('progress-bar').style.visibility = 'hidden'; 
}

cantidad.addEventListener('input', function() {
    alerta.style.visibility = 'hidden';  
});

