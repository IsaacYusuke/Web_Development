document.getElementById("Índia").addEventListener("click", function(){ escolhe("Índia")});
document.getElementById("Indonésia").addEventListener("click", function(){ escolhe("Indonésia")});
document.getElementById("Colômbia").addEventListener("click", function(){ escolhe("Colômbia")});
document.getElementById("Nicarágua").addEventListener("click", function(){ escolhe("Nicarágua")});
document.getElementById("Etiópia").addEventListener("click", function(){ escolhe("Etiópia")});
document.getElementById("Napoli").addEventListener("click", function(){ escolhe("Napoli")});

//var sel = "Índia" 

/*function alerta(){
	alert("brasil!");
}*/

var países = [Índia, Indonésia, Colômbia, Nicarágua, Etiópia, Napoli];
var i;

var índia = document.getElementById("Índia");
índia.classList.remove('tipos');
índia.classList.add('sel');

function escolhe(país){
	//Primeiro procurar o que ja tem a class sel
	var selecionado = document.getElementsByClassName('sel');

	//o [0] eu coloco pois ao procurar um elemento com uma classe pode ter mais de um e eu quero pegar o primeiro elemento logo eu coloco entre [] o indice do elemento
	selecionado[0].classList.add('tipos');
	selecionado[0].classList.remove('sel');

	//Procurar o pais que foi clicado
	var escolhido = document.getElementById(país);

	//atribuir a classe
	escolhido.classList.add('sel');
	escolhido.classList.remove('tipos');
}

// console.log(document.getElementById("Índia").classList);



// console.log(document.getElementById("Índia").classList);