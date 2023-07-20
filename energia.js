let pagoMes = 120;
let consumoKWH = 200;

let costoFinal;

costoFinal = consumoKWH > 300 ? 20* pagoMes /100 + pagoMes : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH +" en base al ajuste tarifario (hocares con mayor a 300kwh por mes tendran un aumento del 20%), cumplimos con informarle que se a ajustado el total a pagar, que sera de "+ costoFinal);
