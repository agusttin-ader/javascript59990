let iphoneQuince;

do{
    iphoneQuince = prompt("Ingrese el iPhone que desee comprar:");

    if(iphoneQuince === "15"){
        alert("El precio del producto seleccionado es de u$d 689");
        break;
    }else if(iphoneQuince === "15 pro"){
        alert("El precio del producto seleccionado es de u$d 989");
        break;
    }else{
        alert("El producto seleccionado no esta en stock, por favor seleccione otro")
    }
}while(true);

let capacidadIphone = parseInt(prompt("Ingrese la capacidad del iPhone seleccionado:"));

if(capacidadIphone === 128 || capacidadIphone === 256 || capacidadIphone === 512){

    alert("El valor del iPhone se incrementó")
}else{
    alert("No existe tal capacidad.")
}

function compraFinal(producto,capacidad,color){
    producto = prompt("Ingrese el producto seleccionado:")
    capacidad = parseInt(prompt("Ingrese la capacidad deseada"))
    color = prompt("Ingrese el color deseado")
    alert("El iPhone seleccionado es: " + producto + " " + "la capadidad deseada es de " + capacidad + " " + "y el color seleccionado es " + color);
}

compraFinal();


//if(iphoneQuince === 15){

//    alert("El precio que tiene que abonar es: u$d 689")
//}else{
//    alert("El producto no esta en la lista actualmente, por favor elija uno que si esté.")
//}




/*
switch(iphoneQuince){
    case "15":
        alert("El precio del producto seleccionado es de u$d 689");
        break;
    case "15 pro":
        alert("El precio del producto seleccionado es de u$d 989");
        break;
    default:
        alert("El producto seleccionado no esta en la lista, por favor ingrese un producto que si esté");
}

let capacidadIphone = parseInt(prompt("Ingrese la capacidad deseada"));

if(capacidadIphone === 128){

    alert("El valor es el antes mencionado")
}else{
    alert("El valor sube a medida de que la capacidad sea mas grande, su valor cambió")
}
*/
/*
let producto = 1;

while(producto <= 2){

    alert("usted tiene: " + producto + "producto en su carrito");
    producto++

}
*/
