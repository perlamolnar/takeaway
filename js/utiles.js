var carrito=[]; 				//iniciamos un array de cero, HAYque declarar primiro para que funcciona!!!!!
$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered	
	$('.modal').modal();
	$(".button-collapse").sideNav();
	$('#modal1').modal('open');
	var debug=true;
	$('#pasaporcajabtn').hide();
	//hayCarrito rescata la variable de localstorage para 
	//rescatar los productos añadidos al carrito
	var hayCarrito=localStorage.getItem('JsonCart');
	if (hayCarrito!=null){
		hayCarrito=JSON.parse(hayCarrito);   
		//parse pasa el texto (de json de localstorage)a lenguaje javascript. Es el contrario del stringify.
		$('#hayProductos').remove();
		$('#pasaporcajabtn').show();
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
			var card=`<div class="col l3 m4 s12">
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
			//console.log("antes" +cartExist [i].precio);
			//cartExist[i].precio=cartExist[i].precio+precio;
			//console.log("despues"+cartExist [i].precio);
			
			//console.log("antes"+cartExist [i].cantidad);
			cartExist[i].cantidad=cartExist[i].cantidad+cantidad;
			//console.log("despues"+cartExist [i].cantidad);
			}
			else console.log(cartExist[i].id);
			}
		if (!existeProduct){  //if negado!
		console.log('producto nuevo');
		cartExist.push({id:id,cantidad:cantidad,precio:precio,titulo:titulo});
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
	$('#pasaporcajabtn').show();
	var JsonCart=JSON.stringify(cartExist);		//convertir carrito a Json. El Json es puro texto! no hay problema para guardar.
	localStorage.setItem("JsonCart",JsonCart);  //vamos a guardar el info en el localStorage, que es Json
}

function pintaModal(hayCarrito){		//contenido de CARRITO y es lo mismo en CHECKOUT tambien
	$('#listaProducts').empty();
	$('#listaProducts').append('<tr><th></th><th>Plato</th><th></th><th>Cantidad</th><th></th><th>Precio</th><th>Total</th>');
	var precioTotal=0;
	for (i in hayCarrito){
		var nombre=hayCarrito[i].titulo;
		var cantidad=hayCarrito[i].cantidad;
		var precio=hayCarrito[i].precio;
		precioTotal +=precio*cantidad;
		var rowProduct=`
		<tr><td><a href="#" onclick="basura(`+i+`);"> <i class="material-icons">delete</i></a></td><td>${nombre}</td><td><a href="#" onclick="plusone(`+i+ `);"> <i class="material-icons">arrow_drop_up</i></a></td><td>${cantidad}</td><td><a href="#" onclick="minusuno(`+i+`);"> <i class="material-icons">arrow_drop_down</i></a></td><th>${precio}€</th><td>${precio*cantidad} €</td></tr>
		`;
		$('#listaProducts').append(rowProduct);
		
		}
		console.log(precioTotal);
		var rowProduct=`
		<tr><td></td><td>PRECIO TOTAL:</td><td></td><td></td><td></td><td></td><td>${precioTotal} €</td></tr>
		`;
		$('#listaProducts').append(rowProduct);
	}
function basura(linea1){
	var borrar = localStorage.getItem("JsonCart");	//leer carrito de local storage
	borrar = JSON.parse(borrar);					//pasar carrito de texto a un array
	borrar.splice(linea1,1);						//eliminar el array (la linea actual) del carrito
	var JsonCart=JSON.stringify(borrar);			//pasar array a texto en JSON
	localStorage.setItem("JsonCart",JsonCart);		//guardar carrito en localstorage
	pintaModal(borrar);								//visualizar nuevo carrito
}

function plusone(item1){
	var mas1=localStorage.getItem("JsonCart");  	//leer carrito de local storage
	mas1 = JSON.parse(mas1);						//pasar carrito de texto a un array
	mas1[item1].cantidad = mas1[item1].cantidad+1; 	//la funcion es añadir uno al la cantidad cogido
	var JsonCart=JSON.stringify(mas1);				//pasar array a texto
	localStorage.setItem("JsonCart",JsonCart);		//guardar carrito en localstorage
	pintaModal(mas1);								//visualizar nuevo carrito
}

function minusuno(item2){
	var menos1 =localStorage.getItem("JsonCart");  		//leer carrito de local storage
	menos1 = JSON.parse(menos1);						//pasar carrito de texto a un array
	menos1[item2].cantidad = menos1[item2].cantidad-1; 	//la funcion es quitar uno al la cantidad cogido
	var JsonCart=JSON.stringify(menos1);				//pasar array a texto
	localStorage.setItem("JsonCart",JsonCart);			//guardar carrito en localstorage
	pintaModal(menos1);									//visualizar nuevo carrito
	//falta eliminar si llega a zero!!!
}