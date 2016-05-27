// ========== create perce

// ========== edit perce
var perc_name	= document.querySelector("input[name='name']");	
var force		= document.querySelector("input[name='force']");	
var agility		= document.querySelector("input[name='agility']");
var speed		= document.querySelector("input[name='speed']");
var stamina 	= document.querySelector("input[name='stamina']");	

// save perc info
document.querySelector("input[name='save']").onclick = function() {				
	localStorage.setItem("name", perc_name.value);
	localStorage.setItem("force", force.value);
	localStorage.setItem("agility", agility.value);
	localStorage.setItem("speed", speed.value);
	localStorage.setItem("stamina", stamina.value);		
}

//clear perc info
document.querySelector("input[name='clear']").onclick = function() {				
	localStorage.setItem("name", "");
	localStorage.setItem("force", "25");
	localStorage.setItem("agility", "25");
	localStorage.setItem("speed", "25");
	localStorage.setItem("stamina", "25");
}

//return  perc info
function save_param() {
	perc_name.value	= localStorage.getItem("name");
	force.value		= localStorage.getItem("force");
	agility.value	= localStorage.getItem("agility");
	speed.value		= localStorage.getItem("speed");
	stamina.value	= localStorage.getItem("stamina");

	var inner_name = document.getElementById("perc_name");
	inner_name.innerHTML = perc_name.value;

	var inner_force = document.getElementById("perc_force");
	inner_force.innerHTML = force.value;

	var inner_agility = document.getElementById("perc_agility");
	inner_agility.innerHTML = agility.value;

	var inner_speed = document.getElementById("perc_speed");
	inner_speed.innerHTML = speed.value;

	var inner_stamina = document.getElementById("perc_stamina");
	inner_stamina.innerHTML = stamina.value;
}

window.addEventListener("load", save_param, true);


// ========== create opponent
var perc_name_2	= "Player_2";	
var force_2		= 25;	
var agility_2	= 25;
var speed_2		= 25;
var stamina_2 	= 25;

// ========== fight
// random diapazon
/*function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1))+min;
}*/

var health 		= stamina.value*10;
var health_2	= stamina_2*10;
var damag 		= 0;
var damag_2 	= 0;

for( ; damag<health && damag_2<health_2; ){
	if((Math.random()*100) > (speed.value*1)){
		if((Math.random()*100) <= agility_2){
			damag 	= damag + force_2*2;
		}else{
			damag 	= damag + force_2;
		}		
	}

	if((Math.random()*100) > speed_2){
		if((Math.random()*100) <= (agility.value)*1){
			damag_2	= damag_2 + force.value*2;
		}else{
			damag_2 = damag_2 + force.value*1;
		}		
	}
}

if(damag>=health && damag_2<health_2){
	alert("Поражение... " + "урон по вам " + damag + "урон по противнику " + damag_2);
}else if(damag_2>=health_2 && damag<health){
	alert("Победа! " + "урон по вам " + damag + "урон по противнику " + damag_2);
}else{
	alert("Ничья! " + "урон по вам " + damag + "урон по противнику " + damag_2);
}

//alert(health + " " + health);

// ========== loot
// ========== edit pers with bonus


// audioPlayer.parentNode.removeChild(audioPlayer); - удаляем элемент аудиоплеер