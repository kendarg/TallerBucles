let movimientos=[-85.00, -45.00, 0, 25.50, -15.00, 70.00,
    12.00, 68.00, -70.00, 320.00, -18.50, 15.00, 29.99,
    -10.00, 45.00, 89.90, 5.00, -5.00, 22.00, -20.00, 14.20];
for(let i = 0;i<movimientos.length;i++){
    if(movimientos[i] <= 0){
    continue;
};
    if(movimientos[i] > 0){
    posicion = i;
    console.log(`El movimiento es: ${posicion} con un saldo de: ${movimientos[i]}`);
    break
}
};