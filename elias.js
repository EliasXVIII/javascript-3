//probando

temporizador = setTimeout("reloj()", 1000);

function reloj(){
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
    temporizador = setTimeout("reloj()", 1000);
    
    const stringHoras = new String(horas);
        if(stringHoras.length == 1){
            document.getElementById("horas").innerHTML = "0" + stringHoras;
        }

    const stringMinutos = new String(minutos);
        if(stringMinutos.length == 1){
            document.getElementById("minutos").innerHTML = "0" + stringMinutos;
        }

    const stringSegundos = new String(segundos);
        if(stringSegundos.length == 1){
            document.getElementById("segundos").innerHTML = "0" + stringSegundos;
        }
}

function stop(){

    clearTimeout(temporizador);

}

function play(){

    temporizador = setTimeout("reloj()", 1000);
}

