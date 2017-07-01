var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

/*Sirve para hacer click en la lista de color (en los botones)*/
$(".controls").on("click","li",function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color = $(this).css("background-color");
});

/*Para cuando sea presionado el boton*/
$('#revelarColor').click(function(){
	/*Mostrará el color seleccionado o
	el color oculto*/
	changeColor();
	/*El signo # indica que es viene de un id*/
	$('#colorSelect').toggle();
});

/*Actualizando el color*/
function changeColor(){
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();
	$("#newColor").css("background-color","rgb("+r+","+g+","+b+")");
}

$("input[type = range]").change(changeColor);

/*Cuando "Agregar color" sea presionado*/
$('#addColor').click(function(){
	/*Agregar el color a los colores asignados
	(a los circulos)*/
	var $newColor = $("<li></li>");
	$newColor.css("background-color",$("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	/*Seleccionando el nuevo color*/
	$newColor.click();
});

/*para realizar los trazos en el lienzo*/
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if(mouseDown)
	{
		context.beginPath();
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
		context.lineTo(e.offsetX,e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});


