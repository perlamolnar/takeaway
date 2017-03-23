var carrito=[]; 				//iniciamos un array de cero, HAYque declarar primiro para que funcciona!!!!!
$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#modal1').modal('open');
	var debug=true;
	//hayCarrito rescata la variable de localstorage para 
	//rescatar los productos añadidos al carrito
	var hayCarrito=localStorage.getItem('JsonCart');
	if (hayCarrito!=null){
		hayCarrito=JSON.parse(hayCarrito);
		$('#hayProductos').remove();
		pintaModal(hayCarrito);
	}

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
				default: console.warn("Existen platos que no coinciden con categoría");
			}
		}

function addCart(id,cantidad,precio,titulo){	
	//console.log("Llega a carrito:"+id+", "+cantidad*precio+".");
	var cartExist=localStorage.getItem("JsonCart");
	console.warn(cartExist);
	var existeProduct=false;
	if (cartExist!=null){
		cartExist=JSON.parse(cartExist);
		console.log("Ya existen productos en el carrito");
		//buscamos si existe para añadir cantidad
	for (i in cartExist) {
		if (id==cartExist[i].id) {
			//se usa esta variable para saber si lo ha encontrado
			//si lo encuentra se pone en true para después comprobar
			//si se añade como nuevo producto al carrito.
			existeProduct=true;
			cartExist[i].precio=cartExist[i].precio+precio;
			cartExist[i].cantidad=cartExist[i].cantidad+cantidad;
		}
	}
	if (!existeProduct){  //if negado!
		cartExist.push({id:id,cantidad:cantidad,precio:precio*cantidad,titulo:titulo});
	}
	pintaModal(cartExist);
	}
	//este else controla que es la primera vez que se añaden productos al carrito
	else {
		//Es en el caso que previamente no existan productos en el carrito
		cartExist=[{id:id,cantidad:cantidad,precio:precio*cantidad,titulo:titulo}];
		$('#hayProductos').remove();
		
		pintaModal(cartExist);
	}	
	console.log(cartExist);
	var JsonCart=JSON.stringify(cartExist);		//convertir carrito a Json. El Json es puro texto! no hay problema para guardar.
	localStorage.setItem("JsonCart",JsonCart);  //vamos a guardar el info en el localStorage, que es Json
}

function pintaModal(hayCarrito){
	$('#listaProducts').empty();
	$('#listaProducts').append('<tr><th>Plato</th><th>Cantidad</th><th>Total</th>');
	var precioTotal=0;
	for (i in hayCarrito){
		var nombre=hayCarrito[i].titulo;
		var cantidad=hayCarrito[i].cantidad;
		var precio=hayCarrito[i].precio;
		precioTotal +=hayCarrito[i].precio;
		var rowProduct=`
		<tr><td>${nombre}</td><td>${cantidad}</td><td>${precio} €</td></tr>
		`;
		$('#listaProducts').append(rowProduct);
	
		}
		console.log(precioTotal);
		var rowProduct=`
		<tr><td>PRECIO TOTAL:</td><td></td><td>${precioTotal} €</td></tr>
		`;
		$('#listaProducts').append(rowProduct);
	}
