// La lista se la pedi a Google Gimini
let movimientos=[850.00, -45.00, 25.50, -15.00, 70.00,
    12.00, 68.00, -70.00, 320.00, -18.50, 15.00, 29.99,
    -10.00, 45.00, 89.90, 5.00, -5.00, 22.00, -20.00, 14.20];

let total = 0;
let cRetiros = 0;

for(let i = 0;i<movimientos.length;i++){
    total += movimientos[i];
    if(movimientos[i]<0){
        cRetiros++;
    }
    
}
console.log(`${total}\n ${cRetiros}`);