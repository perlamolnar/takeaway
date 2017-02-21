<?php
if ($_POST) {
	$email = $_POST['email'];
	$mysqli = new mysqli('127.0.0.1', 'root', '', 'takeaway');
	
	mysqli_set_charset($mysqli, "utf8");
	
	if ($mysqli){
		$sql="INSERT INTO newsletter (email) VALUES ('$email');";
		$query=$mysqli->query($sql);
		if ($query) {
			echo "Se ha grabado correctamente la información";
		}
		else 
		{
			echo "Ha habido un problema con el registro del formulario";
		}
		$mysqli->close();
	}
}

?> 



 <!DOCTYPE html>
  <html>
    <head>
		<!--Import Google Icon Font-->
		<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<!--Import materialize.css-->
		<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
		<!-- Añadir CSS propio -->
		<link type="text/css" rel="stylesheet" href="css/style.css"/>
		
		<!--Let browser know website is optimized for mobile-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
		<!--Import jQuery before materialize.js-->
		<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<script type="text/javascript" src="js/materialize.min.js"></script>
		<script>
			$(document).ready(function(){
			// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
			$('.modal').modal();
			$('#modal1').modal('open');
			});
		  		
		</script>
		
		
		<nav>
			<div class="nav-wrapper brown darken-4">
				<a href="#" class="brand-logo center">Take Away</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li class="desplegable">
						<a href="index.html">Inicio</a>
						<ul class="submenu">
							<li><a href="#">Ensaladas</a></li>
							<li><a href="#">Principales</a></li>
							<li><a href="#">Postres</a></li>
						</ul>
					</li>
					<li><a href="info.html">Info</a></li>
					<li><a href="fotos.html">Fotos</a></li>
					<li><a href="contacto.html">Contacto</a></li>
				</ul>
			</div>
		</nav>  
		
		<section id="ensaladas">
			<h2 class=" teal lighten-3 white-text center-align ">Ensaladas</h2>
			<div class="row">
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/ensalada_verde.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Ensalada verde<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Ensalada verde<i class="material-icons right">close</i></span>
						<p>Saludable ensalada, a base de lechuga junto con las hortalizas aporta un alto contenido en vitaminas y antioxidantes.</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/ensalada_de_pasta.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Ensalada de pasta<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Ensalada de pasta<i class="material-icons right">close</i></span>
						<p>Ensalada fresca con la base de pasta Fusilli, junto con el atún y las hortalizas forman un plato completo. Acompañado con mayonesa.
						</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/ensalada_de_lentejas.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Ensalada de lentejas<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Ensalada de lentejas<i class="material-icons right">close</i></span>
						<p>Ensalada muy fresca y completa a base de lentejas, fuente de proteínas vegetales sin colesterol y hierro. Acompañada con hortalizas y condimentada con vinagre de sidra que enriquece el plato. Puedes acompañarla con zumo de naranja o fruta fresca que contiene vitamina C y ayuda a absorber mejor el hierro.
						</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/ensalada_con_couscous.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Ensalada con couscous<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Ensalada con couscous<i class="material-icons right">close</i></span>
						<p>¿Te gustan los platos exóticos? Esta ensalada es ideal para los amantes del cuscús. Con una base de caldo de carne muy nutritiva, combinado con verduras y el toque dulce de las pasas. De segundo lo puedes combinar amb alguna de nuestras carnes.</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				
				
				
			</div>			
		</section>

		<section id="principales">
			<h2 class=" orange darken-3 white-text center-align">Principales</h2>
			<div class="row">
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/pollo_a_la_cazadora.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Pollo a la cazadora<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Pollo a la cazadora<i class="material-icons right">close</i></span>
						<p>Un guiso delicioso de pollo con champiñones y hortalizas en la salsa le dan un toque suculento y con ganas de “mojar pan”.</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/pollo_al_curry.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Pollo al curry<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Pollo al curry<i class="material-icons right">close</i></span>
						<p>¿Echas de menos la cocina hindú? Éste es el plato ideal para los amantes de la cocina Índia. Una deliciosa combinación de pechuga de pollo con salsa original de curry, elaborada a base de leche de coco, y una mezcla de arroz largo y salvaje.
						</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/albondigas.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Albondigas<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Albondigas<i class="material-icons right">close</i></span>
						<p>Albóndigas (54%) [carne de cerdo, carne de vacuno, tocino, pan de molde (harina de trigo , agua, manteca de cerdo, sal, levadura, dextrosa, emulgentes (E471, E472e), proteínas de la leche, lactosa , harina de soja, harina de malta de trigo y conservador (E330)], nata líquida UHT (nata y estabilizante (E407)), huevo pasteurizado, pan rallado.
						</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/Cuscús_con_tajine_de_pollo.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Cuscús con tajine de pollo<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Cuscús con tajine de pollo<i class="material-icons right">close</i></span>
						<p>Plato muy típico de Marruecos, con un toque exótico de espécies.</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
			</div>			
		</section>
		
		<section id="postres">
			<h2 class="lime darken-3 white-text center-align">Postres</h2>
			<div class="row">
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/kiwi_naranja.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Kiwi, naranja<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Kiwi, naranja<i class="material-icons right">close</i></span>
						<p>Kiwi, naranja</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/fresa_mango_arándanos.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Fresa, mango, arándanos<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Fresa, mango, arándanos<i class="material-icons right">close</i></span>
						<p>Fresa, mango, arándanos</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/mandarina_uva_arándanos.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Mandarina, uva, arándanos<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Mandarina, uva, arándanos<i class="material-icons right">close</i></span>
						<p>Mandarina, uva, arándanos</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; botton:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>
				<div class="col s12 m6 l3">
					<div class="card">
						<div class="card-image waves-effect waves-block waves-light">
						<img class="activator" src="img/mix_de_fruta.jpg">
						</div>
						<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">Mix de fruta<i class="material-icons right">more_vert</i></span>
						</div>
						<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">Mix de fruta<i class="material-icons right">close</i></span>
						<p>Melón cantaloup, piña, kiwi, uva.</p>
						</div>
						<div style="position: relative; height:40px"> 
							<div class="fixed-action-btn horizontal" style="position:absolute; display:inline-block; right: 10px; bottom:1px; top:-20px;">
								<a class="btn-floating btn-large brown darken-3">
								<i class="large material-icons">shopping_cart</i>
								</a>
								<ul>
								  <li><a class="btn-floating red center">1x</i></a></li>
								  <li><a class="btn-floating yellow darken-1 center">2x</i></a></li>
								  <li><a class="btn-floating green center">3x</i></a></li>
								  <li><a class="btn-floating blue center">4x</i></a></li>
								</ul>
							</div>
						</div>						
					</div>
				</div>

				
			</div>			
		</section>
		
		
		
		
        <footer class="page-footer brown darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright brown darken-3">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
		
		<!-- Modal Structure -->
		<div id="modal1" class="modal">
			<div class="modal-content">
				<h4>Suscribete a nuestra Newsletter</h4>
				<form method="post">
				<div class="imput-field">
					<input maxlenght="100" type="email" name="email" id="email">
					<label for="email">Tu correo</label>
				</div>
				<button class="btn waves-effect waves-light" type="submit">Suscrirme</button>
				</form>
			</div>
			<div class="modal-footer">
				<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
			</div>
		</div>
          
		
		
	</body>
  </html>