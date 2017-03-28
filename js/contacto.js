$(document).ready(function(){
	var debug=true;  
	$('.row').fadeIn(1500);
	$('#contacto').hide();
	$('#gracias').hide();
	$('#contacto').slideDown(1500);	//aqui pone contaco o contactForm????
	//capturamos evento submit del form con jQery. A destacar que reciba la variable event para que en firefox no da problemas.
	$('#contactForm').submit(function(event){
	event.preventDefault();   //STOP! PARAR! evita que se haga un submit por defecto.

	var jsonData=JSON.stringify($('#contactForm').serializeArray()); //coger data del formulario con todo la informacion.
	if (debug) console.log(jsonData);

	$.ajax({
		url: 'php/recibeContacto.php',
		type: 'POST',
		data: jsonData,
		dataType:'json',
		success:function(result){
		if (debug) console.log("Todo ha ido bien.");
		if (debug)console.log(result);
		$('#contacto').slideUp(); 
		$('#gracias').show();	
		
		},
		error:function(result){
		alert("Errorrrrrrrrrrrr!");
		}
	})

//fin del submit
})
//fin del document ready
})