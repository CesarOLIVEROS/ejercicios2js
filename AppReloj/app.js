const mostrarReloj = ()=>{
    let fecha = new Date();

    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses=['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const dias=['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let diasSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mesAno = meses[fecha.getMonth()];
    let ano = fecha.getFullYear();
    let fechatexto = `${diasSemana}, ${dia}, ${mesAno} del ${ano}`;
    document.getElementById('fecha').innerHTML = fechatexto;
}
// metodo para agregar el 0 y luego envolvemos todas las variables en este formato.
const formatoHora = (hora)=>{
    if(hora<10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj,1000);

