$(document).ready(function() {
				var debug=true;
				$('select').material_select();
				$("#formCat").submit(function(event){
				event.preventDefault();	//Evita el refresh automático que se produce al enviar el form
				
				//ESTO es la forma de obtener datos del formulario y convertirlo en formato JSON
				var jsonData = JSON.stringify($("#formCat").serializeArray()); //Esta regla es muy importante. hace todos arrays
				if(debug) console.log("Datos en Json:");
				if(debug) console.log(jsonData);
				$.ajax({
					url:'../php/recibeCat.php',
					type: 'POST',
					dataType: 'json',
					data: jsonData,
					success : function(result){
						//if(debug) console.log (result.campos);
						//if(debug) console.log (result.valores);
						//if(debug) console.log (result.sql);
						//if(debug) console.log (result.resultado);
						console.log (result.sql);
						if (result.error===0) {
							Materialize.toast('Categoría creada!', 6000) // el numero muestra la duracion de la nota (en microsecondes)
							//$('#formCat')[0].reset(); --para que haga un reset para el formulario. (vaciar aereas de formulario)pero mejor con el trigger:
							$("#formCat").trigger("reset");
						}
						else {
							Materialize.toast('Error al crear categoría!', 6000) 
							//$('#formCat')[0].reset(); - pero mejor con trigger:
							$("#formCat").trigger("reset");
						}
					},
					error : function(result){
						alert("errorrrrrrr!!!");
					}
				})
				});
			});