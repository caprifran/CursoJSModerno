const metodoPago = "Cheque";

switch (metodoPago) {
    case "Efectivo":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "Cheque":
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;    
    case "Tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break; 
    default:
        console.log("Aun no has seleccionado un metodo de pago o metodo de pago no soportado")
        break;
}
function pagar(){
    console.log("Pagando...");
}