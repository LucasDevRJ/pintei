var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1350, 625);
pincel.fill();

function clicouNoCanvas(evento) {
	var x = evento.pageX;
	var y = evento.pageY;
	alert("Posição do clique: " + x + ", " + y);
}

tela.onclick = clicouNoCanvas;