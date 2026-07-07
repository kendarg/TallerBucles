    const prompt = require('prompt-sync')();

    let contraseña = "Dragon10";
    let mIntentos = 3;
    let intentos = 0;
    let correcto = true;
    
    while(intentos<mIntentos){
    console.log("Ingresa la contraseña:");
    let anuncio = prompt(">");
    if(anuncio === contraseña){
        console.log("Accesos Permitido");
        intentos = 4;
    }else{
        console.log("Contraseña Incorrecta");
        intentos++;
    }

    }
