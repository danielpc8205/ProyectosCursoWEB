$(document).ready(function(){
	$("#iraarticulo1").click(function(){
		var position = $("#Articulo1").offset().top;
		position = posicion -60;
		$("html,body").animate({
			scrollTop: posicion
		},800);
		%("algo").animate({
			//que quiero que haga
		},tiempoenmiliseg,quehagodespues);
	});

	
});