<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Page Météo</title>
  	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="meteo.js"></script>
</head>
<body>
	<div class="container">
	 <div class="row justify-content-center input-group  pt-5">
				 <h1>entrer un nom de ville afin de visualiser sa météo</h1>
				 </div>
		 <div class="col justify-content-center input-group  pt-2">

				<input type="text" id="ville" name="ville" placeholder="Nantes" size="10"class="form-control"/>
				<div class="input-group-append">
					<input class="btn btn-outline-secondary" type="button" id="rechercher" name="rechercher" onclick="recherche()" value="rechercher"/>
				</div>
		</div>
		<div id="meteoaffichage"class=" text-white row pt-3 bg-primary text-center ">
		<div class="col border border-dark border-top-0 border-left-0 border-bottom-0">
		 <h3>Actuellement</h3>
			<p id="jour1-date"> </p>
			<p id="jour1-temps"> </p>
			<img id="jour1-icone" src="">
			<p id="jour1-température"> </p>
		</div>	
		<div class="col border border-dark border-top-0 border-left-0 border-bottom-0">
			<h3>Demain</h3>		
			<p id="jour2-date"> </p>
			<p id="jour2-temps"> </p>
			<img id="jour2-icone" src="">
			<p id="jour2-temperature-matin"> </p>
			<p id="jour2-temperature-apres-midi"> </p>
		</div>	
		<div class="col">	
			<h3>Après-demain</h3>	
			<p id="jour3-date"> </p>
			<p id="jour3-temps"> </p>
			<img id="jour3-icone" src="">
			<p id="jour3-temperature-matin"> </p>
			<p id="jour3-temperature-apres-midi"> </p>
		</div>
		</div>
	</div>
</body>
</html>
