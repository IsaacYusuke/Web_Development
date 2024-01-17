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
var sel = document.createAttribute("class");
sel.value = "sel";
var tipos = document.createAttribute("class");
tipos.value = "tipos";
índia.setAttributeNode(sel);

function escolhe(país){
	for (i of países){
		if (país == i){
			var escolhido = document.getElementById(país);
			/*var sel = document.createAttribute("class");
			sel.value = "sel";*/
			escolhido.setAttributeNode(sel);
		}
		else{
			var naoescolhido = document.getElementById(país);
			naoescolhido.setAttributeNode(tipos);
		}
	}
}

console.log(document.getElementById("Índia").classList);



console.log(document.getElementById("Índia").classList);