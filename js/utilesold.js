 var carrito=[]; 				//iniciamos un array de cero, HAYque declarar primiro para que funcciona!!!!!
$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#modal1').modal('open');

	var debug=true;

	$.ajax({
		url:'php/getListPlatos.php',
		type: 'GET',
		dataType: 'json',
		success : function(result){
			//console.log (result);
			$.each(result.query, function(k,v) {	//campo/key y valor. El result.query recorre toda la informacion
			//console.log(v.nombre);					//pintara los nombres de campo
			var nombre=v.nombre;
			var descripcion=v.descripcion;
			var precio=v.precio;
			var categoria=v.nombreCat;
			var disponible=v.disponible;
			var foto=v.foto;
			var id=v.id;
			pintaCard(id, nombre, foto, precio, descripcion, categoria);

			});
		},
		error : function(result){
			alert("errorrrrrrr!!!");
		}
	});
});


function pintaCard(id, titulo, img, precio, descripcion, categoria){  //los 5 variables que vamos a recibira el pintacard
			//var titulo="Card desde JS";
			//var img="img/ford1.jpg";
			//var precio="10,50";
			//var descripcion="Texto de ejemplo para la descripcioón";
			//console.log(categoria);
			var card=`<div class="col l3 m4 s6">
			<div class="card">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src="${img}">
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">${titulo}<i class="material-icons right">more_vert</i></span>
					<p><span class="price">${precio}€</span></p>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; margin-top:20px; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a onclick ="addCart(${id},1,${precio},'${titulo}')" class="btn-floating red center">1x</i></a></li>
								  <li><a onclick ="addCart(${id},2,${precio},'${titulo}')"class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a onclick ="addCart(${id},3,${precio},'${titulo}')"class="btn-floating green center">3x</i></a></li>
								  <li><a onclick ="addCart(${id},4,${precio},'${titulo}')"class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">${titulo}<i class="material-icons right">close</i></span>
					<p>${descripcion}</p>
				</div>
			</div>
		</div>		`;

		switch (categoria){
				case "Ensaladas":                              //"Ensaladas" como esta registrado en el base de datos.
				$('#ensaladaRow').append(card);
				break;
				case "Platos principales":
				$('#principalRow').append(card);
				break;
				case "Postres":
				$('#postreRow').append(card);
				break;
				default: console.warn("Existen platos que no coinciden...");
			}
		}
function addCart(id,cantidad,precio,titulo){
	//console.log("Llega a carrito:"+id+", "+cantidad*precio+".");
	carrito.push({id:id, cantidad:cantidad, precio:precio*cantidad, titulo:titulo});  	//es un push a un objeto: al array, para crear el array
																		//id:id, es un campo y su valor
	console.log(carrito);
	var JsonCart=JSON.stringify(carrito); 			//convertir carrito a Json. El Json es puro texto! no hay problema para guardar.
	localStorage.setItem("JsonCart",JsonCart);		//vamos a guardar el info en el localStorage, que es Json
	

}

//hayCarrito rescata la variable de localstorage
//rescatar kis oridyctis aladudis ak carruit
function pedidoActual(){
	var hayCarrito=localStorage.getItem('JsonCart');
	console.log(hayCarrito);
	hayCarrito=JSON.parse(hayCarrito);
	var id;
	var titulo;
	var cantidad;
	var precio;
	id=0;
	cantidad=0;
	precio=0;
	titulo="";

	$('#modal2').text('');

	for (i in hayCarrito){				//for crea bucles en el processo de buscar los datos de json
	//console.warn(hayCarrito[i].titulo);
	id=hayCarrito[i].id;
	titulo=hayCarrito[i].titulo;
	cantidad=hayCarrito[i].dantidad;
	precio=hayCarrito[i].precio;
	

	}

	var shoppingCart=`<div class="modal-content">
					<h4>Lista de Pedido</h4>
					
					<table>
					<thead>
					<th>ID</th><th>PLATO</th><th>CANTIDAD</th><th>PRECIO</th>
					</thead>
					<tbody>
					<tr><td></td><td></td><td></td><td></td></tr>
					</tbody>
					</table>
					
				</div>
				<div class="modal-footer">
					<a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat ">CANCELAR</a>
					<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">COMPRAR</a>
				</div>`;
		$('#modal2').append(shoppingCart);
		$('#modal2').modal('open');
}


