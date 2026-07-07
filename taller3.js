const prompt = require('prompt-sync')();

console.log("------MENU-----");
let opcione;
let v =true;

while(v){

    console.log("Opciones \n 1) ver saldo \n 2) Enviar dinero \n 3) Recargar \n 4) Salir");
    console.log("Ingresa la contraseña:");
    let opciones = prompt(">");
    switch(opciones){
        case "1":
            console.log("Saldo de 500.000");
            break;
        case "2":
            console.log("Opcion no valida en el moneto");
            break;
        case "3":
            console.log("Opcion no valida en el moneto");
            break;
        case "4":
            console.log("Gracias Por usar nuestros sistemas");
            v=false;
            break;
    };

}