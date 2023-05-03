var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
var corEscolhida = "black";
var desenha = false;
var raio = 10;

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
		} else if (x <= 50 + 270 && y <= 50 + 5) {
			alert("verde");
			corEscolhida = "grenn";
		} else if (x <= 50 + 323 && y <= 50 + 5) {
			alert("azul");
			corEscolhida = "blue";
		} else if (x <= 50 + 376 && y <= 50 + 5) {
			alert("marrom");
			corEscolhida = "brown";
		} else if (x <= 50 + 429 && y <= 50 + 5) {
			alert("branco");
			corEscolhida = "white";
		} else if (x <= 50 + 482 && y <= 50 + 5) {
			alert("cinza");
			corEscolhida = "gray";
		} else if (x <= 50 + 535 && y <= 50 + 5) {
			alert("amarelo");
			corEscolhida = "yellow";
		}

		if (y > 50 + 5) {

			if (evento.shiftKey == true && raio < 50) {
				raio += 1;
			}

			if (evento.altKey && raio > 10) {
				raio -= 1;
			}

			pincel.fillStyle = corEscolhida;
			pincel.beginPath();
			pincel.arc(x, y, raio, 0, 2*3.14);
			pincel.fill();
		}
	}
}

tela.onmousemove = pintarCirculo;
tela.onmousedown = habilitaDesenho;
tela.onmouseup = desabilitaDesenho;

pintarQuadro();
desenhaPalhetaDeCores("black", 5, 5);
desenhaPalhetaDeCores("red", 58, 5);
desenhaPalhetaDeCores("orange", 111, 5);
desenhaPalhetaDeCores("pink", 164, 5);
desenhaPalhetaDeCores("purple", 217, 5);
desenhaPalhetaDeCores("green", 270, 5);
desenhaPalhetaDeCores("blue", 323, 5);
desenhaPalhetaDeCores("brown", 376, 5);
desenhaPalhetaDeCores("white", 429, 5);
desenhaPalhetaDeCores("gray", 482, 5);
desenhaPalhetaDeCores("yellow", 535, 5);