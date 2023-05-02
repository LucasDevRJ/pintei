var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var corEscolhida = "blue";
var desenha = false;

function habilitaDesenho() {
	desenha = true;
}

function desabilitaDesenho() {
	desenha = false;
}

function pintarQuadro() {
	pincel.fillStyle = "lightgray";
	pincel.fillRect(0, 0, 1350, 625);
	pincel.fill();
}

function desenhaPalhetaDeCores(cor, x, y) {
	pincel.fillStyle = cor;
	pincel.fillStroke = "black";
	pincel.fillRect(x, y, 50, 50);
	pincel.strokeRect(x, y, 50, 50);
	pincel.fill();
}

function pintarCirculo(evento) {
	if (desenha == true) { 
		var x = evento.pageX - tela.offsetLeft;
		var y = evento.pageY - tela.offsetTop;

		if (x <= 50 + 5 && y <= 50 + 5) {
			alert("preto");
			corEscolhida = "black";
		} else if (x <= 50 + 58 && y <= 50 + 5) {
			alert("vermelho");
			corEscolhida = "red";
		} else if (x <= 50 + 111 && y <= 50 + 5) {
			alert("laranja");
			corEscolhida = "orange";
		} else if (x <= 50 + 164 && y <= 50 + 5) {
			alert("rosa");
			corEscolhida = "pink";
		} else if (x <= 50 + 217 && y <= 50 + 5) {
			alert("roxo");
			corEscolhida = "purple";
		}

		if (y > 50 + 5) {
			pincel.fillStyle = corEscolhida;
			pincel.beginPath();
			pincel.arc(x, y, 10, 0, 2*3.14);
			pincel.fill();
		}
	}
}

tela.onclick = onmousemove;
tela.onmousedown = habilitaDesenho;
tela.onmouseup = desabilitaDesenho;

pintarQuadro();
desenhaPalhetaDeCores("black", 5, 5);
desenhaPalhetaDeCores("red", 58, 5);
desenhaPalhetaDeCores("orange", 111, 5);
desenhaPalhetaDeCores("pink", 164, 5);
desenhaPalhetaDeCores("purple", 217, 5);