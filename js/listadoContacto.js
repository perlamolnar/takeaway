$(document).ready(function() {
	var debug=true;
		$.ajax({
			url:'../php/getListForm.php',
			type: 'GET',
			dataType: 'json',
			success : function(result){
				console.log (result);
			    var tbl_body = ""; 
			    //recorrer el array que manda el php
		        $.each(result.query, function() {  			//hace un bucle/loop que se repite para cada elemento de array
		        	if (debug) console.log("Pintando");

		        	var tbl_row = "";   					//general fila NUEVA
		        	
		        	$.each(this, function(k , v) {     		//(k: key/campo y v: value) pidemos que separe los campos de los valores de cada array
            			tbl_row += "<td>"+v+"</td>";		//y ponga solo los valores sin campos
            		});

            		tbl_body += "<tr>"+tbl_row+" </tr>";	// construir la fila de los elementos de celdas anteriores
		    	});
		    	if (debug) console.log (tbl_body); 
		    	$("#listado tbody").html(tbl_body);  		// crear que aparezcan los elementos en el tbody en el html
			},
			error : function(result){
				alert("errorrrrrrr!!!");
			}
		});
});
