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
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos=()=>{
    let ingresosHTML ='';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML=(ingreso)=>{
    let IngresoHTML = `
    <div class="elemento limpiarEstilos" >
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
    </div>
    `;
    return IngresoHTML;

}

// al buscar el id con findIndex se le pasa el atributo a buscar por parametro y luego se le pasa la funcion fecha para
// determinar la igualdad y asi luego de la validacion se devuelve el indice del valor a buscar.
const eliminarIngreso = (id)=>{
    // con el valor ingreso se itera el arreglo de ingresos 
    let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    //luego de indicarle cuantos indices borrar se vuelve a cargar los datos de la pagina para refrescar la informacion.
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos=()=>{
    let EgresosHTML ='';
    for(let egreso of egresos){
        EgresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = EgresosHTML;

}

const crearEgresoHTML =(egreso)=>{
    let EgresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor"> ${formatoMoneda(egreso.valor)}</div>
        
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return EgresoHTML;
}
