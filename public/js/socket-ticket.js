//Comando para establecer la coneccion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado');
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});