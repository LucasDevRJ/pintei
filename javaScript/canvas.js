var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var corEscolhida = "blue";

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

desenhaPalhetaDeCores("black", 5, 5);
desenhaPalhetaDeCores("red", 58, 5);

function pintarCirculo(evento) {
	var x = evento.pageX - tela.offsetLeft;
	var y = evento.pageY - tela.offsetTop;

	if (x <= 50 + 5 && y <= 50 + 5) {
		alert("preto");
		corEscolhida = "black";
	} else if (x <= 50 + 58 && y <= 50 + 5) {
		alert("vermelho");
		corEscolhida = "red";
	}

	pincel.fillStyle = corEscolhida;
	pincel.beginPath();
	pincel.arc(x, y, 10, 0, 2*3.14);
	pincel.fill();
}

tela.onclick = pintarCirculo;