// Elementos iniciales de la app e inicializamos primordialmento los arreglos necesarios para trabajar
const ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Recibos', 300),
    new Egreso('Renta', 400)
];
// Se cargaran en un inicio estas dos funciones para lo cual se definen en el body con la funcion onload
let cargarApp = () =>{
    cargarCabecero();

}

// Calculamos la cantidad de ingresos obtenidos del arreglo
let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;

    }
    // Retornamos el valor para usarlo en la operacion
    return totalIngreso;
}
// Se calcula la cantidad de egresos en el arreglo del mismo nombre
let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}


let cargarCabecero = () =>{
    // formulas matematicas aplicadas a los resultados que traen las funciones ya dictaminadas con anterioridad
    let presupuestoTotal = totalIngresos() - totalEgresos(); 
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    // luego recuperamos cada objeto HTML para asignarle el valor correspondiente.
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

// Formato para dar formato de moneda a los datos a mostrar importante pasar por parametro el valor o dato al que se le dara este formato
const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}
// Estas son funciones que nos suministra JS
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent',minimumFractionDigits:2});
}





