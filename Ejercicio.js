const depositos = [100, -200, 300,-200, 100,300];
let arrResult =[] 
function calcularSaldos(operaciones){
    
let saldoDepositos =0
let saldoRetiros = 0
let saldoVigente = 0
for (let i = 0; i < operaciones.length; i++) 
if (operaciones[i]>0){
saldoDepositos = saldoDepositos + operaciones[i];
} else {
    saldoRetiros = saldoRetiros + operaciones[i];
}
saldoVigente = saldoDepositos + saldoRetiros

arrResult.push(saldoDepositos,saldoRetiros,saldoVigente);
return arrResult;
}

console.log(calcularSaldos(depositos));


function cliente(nombre,apellido,arrResult){
    console.log("Estimad@ " + nombre + ' ' + apellido + ": \n" + "El monto total de los depositos es de: $" + arrResult[0] + ". \n" 
    + "El monto total de los retiros es de: $" + arrResult[1] + ". \n" + "Por lo tanto, su saldo actual en la cuenta es de: $" + arrResult[2] + ".");

}

cliente("Juan", "Mendez",arrResult);


