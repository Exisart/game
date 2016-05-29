// ========== menu

$('#main').click(function goMain(){
	$('.visible').removeClass('visible');
	$('#perc_param').addClass('visible');
	getParam();
});

$('#create').click(function(){
	$('.visible').removeClass('visible');
	$('#edit').addClass('visible');
	getParam();
});

// ========== create perce
$('#create').click(function create(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
	getParam();
});

// ========== edit perce
$('#save').click(function save(){
	localStorage.setItem('name', $('#name').val());
	localStorage.setItem('force', $('#force').val());
	localStorage.setItem('agility', $('#agility').val());
	localStorage.setItem('speed', $('#speed').val());
	localStorage.setItem('stamina', $('#stamina').val());
	getParam();
});

$('#clear').click(function clear(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
	getParam();
});

var name, force, agility, speed, stamina;
function getParam(){
	name = localStorage.getItem('name');
	$('#name').val(name);
	$('#perc_name').html(name);

	force = localStorage.getItem('force');
	$('#force').val(force);
	$('#perc_force').html(force);

	agility = localStorage.getItem('agility');
	$('#agility').val(agility);
	$('#perc_agility').html(agility);

	speed = localStorage.getItem('speed');
	$('#speed').val(speed);
	$('#perc_speed').html(speed);

	stamina = localStorage.getItem('stamina');
	$('#stamina').val(stamina);
	$('#perc_stamina').html(stamina);
}
$(document).ready(getParam());

// ========== create opponent

// ========== fight

// ========== loot

// ========== edit pers with bonus


