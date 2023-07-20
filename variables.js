let electrodomesticos=[
    "secadora","Lavadora","Telefono","Audifonos","Computadora","Televisor",
] 
console.log(electrodomesticos)
  let quitar = electrodomesticos.shift(); //quito
  electrodomesticos.push(quitar)//agregue 
  electrodomesticos.push("Sonido", "Teclado",); //agregue 2

  console.log(electrodomesticos)

  let stock = electrodomesticos.indexOf("Computadora")
  if (stock != -1){
    console.log("encontramos ese producto")
  } else{
    console.log("no tenemos ese producto")
  }

console.log(stock);

let lista = electrodomesticos.join(" ")

console.log(lista)

console.log (lista.length);

let nuevaLista = lista.replace("Computadora","Play");

console.log(nuevaLista);

let  listaFinal = nuevaLista.split(" ")

console.log(listaFinal);






