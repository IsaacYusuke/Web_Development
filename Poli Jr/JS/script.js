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
var numescolhido = 0;

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
	if (país == "Índia") {numescolhido = 0;} else
	if (país == "Indonésia") {numescolhido = 1;} else
	if (país == "Colômbia") {numescolhido = 2;} else
	if (país == "Nicarágua") {numescolhido = 3;} else
	if (país == "Etiópia") {numescolhido = 4;} else
	if (país == "Napoli") {numescolhido = 5;};

	//atribuir a classe
	escolhido.classList.add('sel');
	escolhido.classList.remove('tipos');
	
	document.getElementById('descrição').innerHTML = lista[numescolhido].descricao
	document.getElementById('intensidade').innerHTML = "Intensidade : " + lista[numescolhido].intensidade
	document.getElementById('preço').innerHTML = "Preço : " + lista[numescolhido].preco + " R$"
	document.getElementById('imagem').src = lista[numescolhido].foto
}

function getData(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET','https://api.polijunior.com.br/produtos/');
	
	xhr.responseType = 'json';
	
	xhr.onload = () =>{
		lista = xhr.response;
		console.log(lista);
		escolhe("Índia");
	};
	
	xhr.send();
}

var lista = getData();
console.log(lista);


