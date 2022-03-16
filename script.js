"use strict"
//Declarando variáveis
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

//Iniciar
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Pausar
function pause() {
    clearInterval(cron);
}

//Parar
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Contagem do tempo e exibição
function timer() {
    ss++; //+1 na variável 

    if (ss == 59) { //Verifica se deu 59s.
        ss = 0; //Segundos para 0
        mm++; //+1 na variável 

        if (mm == 59) { //Verifica se deu 59min
            mm = 0; //Minutos para 0
            hh++; //+1 na variável 
        }
    }

    //Cria uma variável, o valor é HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor do elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor 
    return format;
}