<!doctype html>
<html lang="en">
<head>
    <!-- META DESCRIPTIONS -->
    <title>Byinfo - Info for turister om byer, lokalitet vejr, historie og rejse</title>
    <meta name="description" content="[by] info for turister. Lokalitet, vejr, historie og rejse" />

    <!-- META DATA -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge" />-->

    <!-- STYLLING & ICONS (FAV ICON) -->
	<link type="text/CSS" rel="stylesheet" href="css/byinfo.css?v=0.2"/>
    <!--<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
    <meta name="theme-color" content="#379a45"><!-- 
	- Set theme color - Affects color of some browser interfaces -- >-->
	
	<!-- VIEWPORT -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Enables responsive design. -->
	
	<!-- CHARSET -->
	<meta charset="utf-8" />
    
	<!-- ROBOTS -->
    <meta name="robots" content="noindex" /><!-- Block indexing of site -->
	
	<!-- MAPBOX API STYLLING -->
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css" rel="stylesheet">
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
	
	<!-- SOUNDCLOUD API -->
	<!--<script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>-->
</head>
<body>
<div class="wrapper">
	<!-- HEADER -->
	<header class="header">
		<h1>Byinfo</h1>
		<p>Info for turister om byer, lokalitet, vejr, historie og rejse</p>
	</header>
	<main class="main">
		<h2 id="town-title">Information om en dansk by.</h2>
		<table id="town-info-table" class="hidden">
			<tr>
				<th>Komune</th>
				<td id="coumne"></td>
			</tr>
			<tr>
				<th>Beboere</th>
				<td id="residents"></td>
			</tr>
		</table>
	</main>
	<aside id="mapbox-map-wrapper" class="hidden">
		<div id="mapbox-map"></div>
	</aside>
	<aside id="pixabay-images" class="hidden">
		<h4 id="pixabay-title">Pixabay billeder</h4>
		<!--<img src="img/pixabay_logo_square.svg" alt="pixabay logo" />-->	
	</aside>
	<aside id="pexels-images" class="hidden">
		<h4 id="pexels-title">Pexels billeder</h4>
	</aside>
	<aside id="movies">
		<ul id="movie-list"></ul>
	</aside>
	<footer>
		<section id="footer-info">
			<p>Design og kode af max.</p>
		</section>
		<section id="contact-info" class="wrapper">
			<!-- Contact information -->
			<h5>Kontakt Informationer:</h5>
			<address id="contact">
				<span class="author">Max Festersen Hansen</span>
				<a href="mailto:maxfh20@student.sdu.dk" class="email" title="Skriv en e-mail til mig." target="_blank">maxfh20@student.sdu.dk</a>
				<a href="tel:+4529631232" class="tel" title="Ring til mig.">29 63 12 32</a>
			</address>
		</div>
	</footer>
</div>
<!-- JAVASCRIPT FILES -->
<script type="text/javascript">
	// Lazy vars for javascript files.
	let town = "Odense";
	let townValid = true;
	document.getElementById("town-title").innerHTML = "Information om " + town;
	document.getElementById("pixabay-title").innerHTML = "Pixabay billeder om " + town;
	document.getElementById("pexels-title").innerHTML = "Pexels billeder om " + town;
</script>
<script type="text/javascript" src="js/practical-functions.js"></script>
<script type="text/javascript" src="js/keys.js"></script>
<script type="text/javascript" src="js/dawa.js?v=1"></script>
<!-- <script type="text/javascript" src="js/omdbapi.js"></script> -->
</body>