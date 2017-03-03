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
});
