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

//alert(speed.value+agility.value);



window.addEventListener("load", save_param, true);


// ========== create opponent
// ========== fight
// ========== loot
// ========== edit pers with bonus