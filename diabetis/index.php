<!doctype html>
<html lang="en" id="page-top">
<head>
    <!-- META DESCRIPTIONS -->
    <title>Diabetic food information</title>
    <meta name="description" content="Information about diabetis, food for diabetics." />

    <!-- META DATA -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge" />-->

    <!-- STYLLING & ICONS (FAV ICON) -->
	<link type="text/CSS" rel="stylesheet" href="css/food.css?v=0.3"/>
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
	<script type="text/javascript" src="js/practical-functions.js?v=0.1"></script>
	<script type="text/javascript" src="js/keys.js"></script>
</head>
<body>
<div class="wrapper">
	<!-- HEADER -->
	<header class="header">
		<h1>Diabetic info central</h1>
		<p class="subtitle">Information to help diabetics.</p>
	</header>
	<nav id="main-navigation">
		<ul>
			<li><a href="#recipies" onclick="scrollTo()">Low carb recipies</a></li>
			<li><a href="#information" onclick="scrollTo()">Information about diabetis</a></li>
			<li><a href="#news" onclick="scrollTo()">News about diabetis</a></li>
			<li><a href="#media" onclick="scrollTo()">Related media</a></li>
			<li><a href="#statistics" onclick="scrollTo()">Statistics</a></li>
			<li><a href="#map" onclick="scrollTo()">Map.</a></li>
			<li><a href="#about" onclick="scrollTo()">About</a></li>
		</ul>
	</nab>
	<main>
		<section id="recipies">
			<header>
				<h2 class="title">Low carb recipies.</h2>
			</header>
			<article>
				<p>Content to be added...</p>
			</article>
			<aside>
				<p>Content to be added...</p>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#main-navigation" onclick="scrollTo()" title="Scroll to previous section">Previous section</a></li>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="information">
			<header>
				<h2 class="title">Information about diabetis.</h2>
			</header>
			<article>
				<p>Content to be added...</p>
			</article>
			<aside id="info-wrapper">
				<div class="infoBox"></div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes">Source: Wikipedia</a>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#recipies" onclick="scrollTo()" title="Scroll to recipies section">Previous section</a></li>
						<li><a href="#news" onclick="scrollTo()" title="Scroll to news section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="news">
			<header>
				<h2 class="title">News about diabetis.</h2>
			</header>
			<article>
				<p>Content to be added...</p>
			</article>
			<aside>
				<p>Content to be added...</p>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Previous section</a></li>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="media">
			<header>
				<h2 class="title">Related media.</h2>
			</header>
			<article class="aside-wrapper">
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
			</article>
			<aside>
				<p>Content to be added...</p>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#news" onclick="scrollTo()" title="Scroll to news section">Previous section</a></li>
						<li><a href="#statistics" onclick="scrollTo()" title="Scroll to statistics section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="statistics">
			<header>
				<h2 class="title">Statistics.</h2>
			</header>
			<article>
				<figure id="highcharts-figure" class="highcharts-figure">
					<div id="container"></div>
				</figure>

				<table id="goal-table" class="hidden">
				</table>
			</article>
			<aside>
				<div class="type-stats"></div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes">Source: Wikipedia</a>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Previous section</a></li>
						<li><a href="#map" onclick="scrollTo()" title="Scroll to map section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="map">
			<header>
				<h2 class="title">Map.</h2>
			</header>
			<article>
				<p>Content to be added...</p>
			</article>
			<aside id="mapbox-map-wrapper">
				<div id="mapbox-map"></div>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#statistics" onclick="scrollTo()" title="Scroll to statistics section">Previous section</a></li>
						<li><a href="#about" onclick="scrollTo()" title="Scroll to about section">Next section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="about">
			<header>
				<h2 class="title">About.</h2>
			</header>
			<article>
				<p>Content to be added...</p>
			</article>
			<aside>
				<p>Content to be added...</p>
			</aside>
			<footer>
				<nav class="-navigation">
					<ul>
						<li><a href="#map" onclick="scrollTo()" title="Scroll to map section">Previous section</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top</a></li>
					</ul>
				</nav>
			</footer>
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
	</main>
</div>
<!-- JAVASCRIPT FILES -->
<script type="text/javascript" src="js/jquery-all-in-one.js?v=0.1"></script>
</body>