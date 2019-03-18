//Comando para establecer la coneccion
var socket = io();

//Esto se utilizaria se se usara el for que esta en la funcion ActualizaHtml
// var lblTicket1 = $('#lblTicket1');
// var lblTicket2 = $('#lblTicket2');
// var lblTicket3 = $('#lblTicket3');
// var lblTicket4 = $('#lblTicket4');
//
// var lblEscritorio1 = $('#lblEscritorio1');
// var lblEscritorio2 = $('#lblEscritorio2');
// var lblEscritorio3 = $('#lblEscritorio3');
// var lblEscritorio4 = $('#lblEscritorio4');
//
// var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
// var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function (data) {
    actializaHtml(data.ultimo4);
});

socket.on('ultimos4', (data) => {
    var audio = new Audio('./audio/new-ticket.mp3');
    audio.play();
    actializaHtml(data.ultimos4);
});

function actializaHtml(ultimos4) {
    ultimos4.forEach((element, index) => {
        $(`#lblTicket${index + 1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index + 1}`).text("Escritorio " + element.escritorio);
    });
    // for (var i = 0; i <= ultimos4.length; i++) {
    //     lblTickets[i].text('Ticket ' + ultimos4[i].numero);
    //     lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    // }
}