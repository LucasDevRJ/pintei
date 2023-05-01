var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 1350, 625);
pincel.fill();

function desenhaPalhetaDeCores(cor, x, y) {
	pincel.fillStyle = cor;
	pincel.fillStroke = "black";
	pincel.fillRect(x, y, 50, 50);
	pincel.strokeRect(x, y, 50, 50);
	pincel.fill();
}

function pintarCirculo(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;
	
	pincel.fillStyle = "blue";
	pincel.beginPath();
	pincel.arc(x, y, 10, 0, 2*3.14);
	pincel.fill();
}

tela.onclick = pintarCirculo;

desenhaPalhetaDeCores("black", 5, 5);