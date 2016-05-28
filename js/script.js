// ========== create perce

$('#create').click(function(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
})
// ========== edit perce

$('#save').click(function(){
	localStorage.setItem('name', $('#name').val());
	localStorage.setItem('force', $('#force').val());
	localStorage.setItem('agility', $('#agility').val());
	localStorage.setItem('speed', $('#speed').val());
	localStorage.setItem('stamina', $('#stamina').val());
})
$('#clear').click(function(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
})

var name, force, agility, speed, stamina;
function getParam(){
	name = localStorage.getItem('name');
	$('#name').val(name);

	force = localStorage.getItem('force');
	$('#force').val(force);

	agility = localStorage.getItem('agility');
	$('#agility').val(agility);

	speed = localStorage.getItem('speed');
	$('#speed').val(speed);

	stamina = localStorage.getItem('stamina');
	$('#stamina').val(stamina);
}
$(document).ready(getParam());

// ========== create opponent

// ========== fight

// ========== loot

// ========== edit pers with bonus


