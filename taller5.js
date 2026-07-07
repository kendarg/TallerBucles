let ususarios = {
    us1 :{
            nombre : "Esteban",
            movimientos : [-18.50, 15.00, 29.99,
            -10.00, 45.00, 89.90, 5.00, -5.00, 22.00,]
        },
    use2 :{
            nombre : "Lia",
            movimientos : [-18.50, 15.00, 29.99,
            -10.00, 45.00, 89.90, 5.00, -5.00, 22.00,]
            },
    us3 :{
            nombre : "Hellen",
            movimientos : [-18.50, 15.00, 29.99,
            -10.00, 45.00, 89.90, 5.00, -5.00, 22.00,]
            },
    us4 :{
            nombre : "Arturo",
            movimientos : [-18.50, 15.00, 29.99,
            -10.00, 45.00, 89.90, 5.00, -5.00, 22.00,]
            }
}

let cUsuarios = Object.keys(ususarios).length;
let pocicion = 1;

    for(let id in ususarios){
    
        let idActu =  ususarios[id];
        let saldo = 0;

    for(let i = 0; i <idActu.movimientos.length;i++){
        saldo += idActu.movimientos[i];
    }
    console.log(`El Usuario ${id} (${idActu.nombre}): $${saldo} Es el usuario ${pocicion}`);
    pocicion++;
    
}
console.log("Cantidad de usuarios:", cUsuarios);
