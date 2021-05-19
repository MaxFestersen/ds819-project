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
    <meta content="utf-8" http-equiv="encoding">

	<!-- ROBOTS -->
    <meta name="robots" content="noindex" /><!-- Block indexing of site -->
	
	<!-- MAPBOX API STYLLING -->
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css" rel="stylesheet">
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
	
	<!-- SOUNDCLOUD API -->
	<!--<script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>-->
	
	<!-- SCRIPTS -->
	<!-- EXTERNAL SCRIPTS -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/papaparse.min.js"></script>
    <!--script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script-->

	<!-- LOCAL SCRIPTS -->	
	<script src="highcharts/code/highcharts.js"></script>
	<script type="text/javascript" src="js/practical-functions.js"></script>
	<script type="text/javascript" src="js/keys.js"></script>
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
    <aside id="info-wrapper">
		<div id="content">
			<h4 class="headline"></h4>
		<div class="infoBox"></div>
    </aside>
	<div class="aside-wrapper">
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
		<aside id="books" class="hidden">
			<h4 id="openlibrary-title">Bøger</h4>
			<ul id="book-list"></ul>
		</aside>
		<aside id="movies" class="hidden">
			<ul id="movie-list"></ul>
		</aside>
	</div>
	<section>
		<h3 title="Delmål 8.9 i FN's Verdensmål - for bæredygtig udvikling">Støt op om bæredygtig turisme</h3>
		<figure id="highcharts-figure" class="highcharts-figure">
			<div id="container"></div>
		</figure>

		<table id="goal-table" class="hidden">
		</table>
	</section>
	<footer>
		<section id="footer-info">
			<p>Design og kode af max.</p>
		</section>
		<section id="contact-info" class="wrapper">
			<!-- Contact information -->
			<h5>Kontakt Informationer:</h5>
			<address id="contact">
				<span class="author">Max Festersen Hansen</span>
				<span><a href="mailto:maxfh20@student.sdu.dk" class="email" title="Skriv en e-mail til mig." target="_blank">maxfh20@student.sdu.dk</a></span>
				<span><a href="tel:+4529631232" class="tel" title="Ring til mig.">+45 29 63 12 32</a></span>
			</address>
		</div>
	</footer>
</div>
<!-- JAVASCRIPT FILES -->
<script type="text/javascript" src="js/jquery-all-in-one.js"></script>
</body>