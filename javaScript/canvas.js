var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1350, 625);
pincel.fill();

function clicouNoCanvas(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;
	
	pincel.fillStyle = "blue";
	pincel.beginPath();
	pincel.arc(x, y, 10, 0, 2*3.14);
	pincel.fill();
}

tela.onclick = clicouNoCanvas;