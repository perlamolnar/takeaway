$(document).ready(function() {
				var debug=true;
				$('select').material_select();
				$("#addEmpresa").submit(function(event){
				event.preventDefault();	//Evita el refresh automático que se produce al enviar el form
				
				//ESTO es la forma de obtener datos del formulario y convertirlo en formato JSON
				var jsonData = JSON.stringify($("#formCat").serializeArray());
				if(debug) console.log("Datos en Json:");
				if(debug) console.log(jsonData);
				$.ajax({
					url:'../php/recibeJson.php',
					type: 'POST',
					dataType: 'json',
					data: jsonData,
					success : function(result){
						if(debug) console.log (result.campos);
						if(debug) console.log (result.valores);
						if(debug) console.log (result.sql);
						if(debug) console.log (result.resultado);
					},
					error : function(result){
						alert("errorrrrrrr!!!");
					}
				})
				});
			});