$(document).ready(function() {
	var debug=true;
		$.ajax({
			url:'../php/getSelectCat.php',
			type: 'GET',
			dataType: 'json',
			success : function(result){
				console.log (result);
				var etiquetas =" "; 		//etiquetas refieren al campo
				var values =" ";			//refiere al values
				var options =" ";			
				
		        $.each(result.query, function() {  			//hace un bucle/loop que se repite para cada elemento de array(recorre cada fila)
		        	if (debug) console.log("Pintando");     //para controlar en consol
		        						//ofrecera todas las categoras (optiones)
		        	$.each(this, function(campo, valor) {     		//(k: key/campo y v: value) pidemos que separe los campos de los valores de cada array
	        			if (campo=="id") values=valor;
	        			else etiquetas=valor;
	            	});	 

	            	options += "<option values='"
	        						+values
	        						+"'>"
	        						+etiquetas
	        						+"</option>"        	
			    });
		    	if (debug) console.log (options); 
		    	$("#categoria").html(options);  		// crear que aparezcan los elementos de categoria en el options en el html
				$('select').material_select();
			},
			error : function(result){
				alert("errorrrrrrr!!!");
			}
		});
//Ajax para enviar formulario:

			$("#formPlato").submit(function(event){
							event.preventDefault();	//Evita el refresh automático que se produce al enviar el form
							
							//ESTO es la forma de obtener datos del formulario y convertirlo en formato JSON
							var jsonData = JSON.stringify($("#formPlato").serializeArray()); //Esta regla es muy importante. hace todos arrays
							if(debug) console.log("Datos en Json:");
							if(debug) console.log(jsonData);
							$.ajax({
								url:'../php/recibePlato.php',
								type: 'POST',
								dataType: 'json',
								data: jsonData,
								success : function(result){
									if(debug) console.log (result.campos);
									if(debug) console.log (result.valores);
									if(debug) console.log (result.sql);
									if(debug) console.log (result.resultado);
									console.log (result.sql);
									if (result.error===0) {
										Materialize.toast('Plato creado!', 6000); // el numero muestra la duracion de la nota (en microsecondes)
										//$('#formPlato')[0].reset(); --para que haga un reset para el formulario. (vaciar aereas de formulario)pero mejor con el trigger:
										$("#formPlato").trigger("reset");
									}
									else {
										Materialize.toast('Error al crear nuevo plato!', 6000); 
										//$('#formPlato')[0].reset(); - pero mejor con trigger:
										$("#formPlato").trigger("reset");
									}
								},
								error : function(result){
									alert("errorrrrrrr!!!");
								}
							})
							});
});
