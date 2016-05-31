// ========== menu

function goMain(){
	$('.visible').removeClass('visible');
	$('#perc_param').addClass('visible');
	getParam();
};
$('#main').click(goMain);

function goCreate(){
	$('.visible').removeClass('visible');
	$('#edit').addClass('visible');
	getParam();
};
$('#create').click(goCreate);

function goEdit(){
	$('.visible').removeClass('visible');
	$('#edit').addClass('visible');
	getParam();
};
$('#edit_a').click(goEdit);

// ========== create perce
var name, force, agility, speed, stamina;
var perc_lvl = 0;

var create = function create(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
	localStorage.setItem('perc_lvl', 0);
	getParam();
};
$('#create').click(create);

// ========== edit perce
var edit = function edit(){
	localStorage.setItem('name', $('#name').val());
	localStorage.setItem('force', $('#force').val());
	localStorage.setItem('agility', $('#agility').val());
	localStorage.setItem('speed', $('#speed').val());
	localStorage.setItem('stamina', $('#stamina').val());
	localStorage.setItem('perc_lvl', perc_lvl);
};
$('#edit').click(edit);

var save = function save(){
	localStorage.setItem('name', $('#name').val());
	localStorage.setItem('force', $('#force').val());
	localStorage.setItem('agility', $('#agility').val());
	localStorage.setItem('speed', $('#speed').val());
	localStorage.setItem('stamina', $('#stamina').val());
	localStorage.setItem('perc_lvl', perc_lvl);
};
$('#save').click(save);

var clear = function clear(){
	localStorage.setItem('name', "");
	localStorage.setItem('force', 25);
	localStorage.setItem('agility', 25);
	localStorage.setItem('speed', 25);
	localStorage.setItem('stamina', 25);
	localStorage.setItem('perc_lvl', 0);
	getParam();
};
$('#clear').click(clear);

var getParam = function getParam(){
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
	perc_lvl = localStorage.getItem('perc_lvl');
	$('#perc_lvl').html(perc_lvl);
}
$(document).ready(getParam);

// ========== create opponent
var name_o, force_o, agility_o, speed_o, stamina_o;


var getParamOpponent = function getParamOpponent(){
	name_o = localStorage.getItem('name_o');
	$('#opponent_name').html(name_o);
	force_o = localStorage.getItem('force_o');
	$('#opponent_force').html(force_o);
	agility_o = localStorage.getItem('agility_o');
	$('#opponent_agility').html(agility_o);
	speed_o = localStorage.getItem('speed_o');
	$('#opponent_speed').html(speed_o);
	stamina_o = localStorage.getItem('stamina_o');
	$('#opponent_stamina').html(stamina_o);	
};

var createOpponent = function createOpponent(){
	localStorage.setItem('name_o', "opponent");
	localStorage.setItem('force_o', 25);
	localStorage.setItem('agility_o', 25);
	localStorage.setItem('speed_o', 25);
	localStorage.setItem('stamina_o', 25);
	getParamOpponent();
	$('#opponent_param').addClass('visible');
};
$('#create_opponent').click(createOpponent);


// ========== fight
function fight(){
	var health 		= stamina*10;
	var health_2	= stamina_o*10;
	var damag 		= 0;
	var damag_2 	= 0;

	for( ; damag<health && damag_2<health_2; ){
		if((Math.random()*100) > (speed*1)){
			if((Math.random()*100) <= agility_o){
				damag 	= damag + force_o*2;
			}else{
				damag 	= damag + force_o*1;
			}		
		}

		if((Math.random()*100) > speed_o){
			if((Math.random()*100) <= (agility)*1){
				damag_2	= damag_2 + force*2;
			}else{
				damag_2 = damag_2 + force*1;
			}		
		}
	}

	if(damag>=health && damag_2<health_2){
		alert("Поражение... " + "урон по вам " + damag + "урон по противнику " + damag_2);
		create();
		goCreate();
	}else if(damag_2>=health_2 && damag<health){
		perc_lvl = perc_lvl*1 + 1;
		$('#perc_lvl').html(perc_lvl);		
		alert("Победа! " + "урон по вам " + damag + "урон по противнику " + damag_2);
		localStorage.setItem('perc_lvl', perc_lvl);
	}else{
		alert("Ничья! " + "урон по вам " + damag + "урон по противнику " + damag_2);		
	}
};
$('#fight').click(fight);

// ========== loot

// ========== edit pers with bonus


