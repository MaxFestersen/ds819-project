<!doctype html>
<html lang="en" id="page-top">
<head>
    <!-- META DESCRIPTIONS -->
    <title>Diabetic food information</title>
    <meta name="description" content="Information about diabetes, food for diabetics." />

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
	<header id="main-header" class="header">
		<h1>Diabetic info central</h1>
		<p class="subtitle">Diabetes related information</p>
		<figure class="diabetes-logo" ><img src="img/Blue_circle_for_diabetes.svg" alt="The symbol for diabetes" /></figure>
		<!--<aside id="pexels-images" class="hidden"></aside>-->
	</header>
	<nav id="mainnavigation">
		<ul>
			<li><a href="#recipies" onclick="scrollTo()">Recipies</a></li>
			<li><a href="#information" onclick="scrollTo()">Information</a></li>
			<li><a href="#media" onclick="scrollTo()">Media</a></li>
			<li><a href="#statistics" onclick="scrollTo()">Statistics</a></li>
			<li><a href="#map" onclick="scrollTo()">Map</a></li>
			<li><a href="#about" onclick="scrollTo()">About</a></li>
		</ul>
	</nav>
	<main>
		<section id="recipies">
			<article>
				<header>
					<h2 class="title">Low carb recipies.</h2>
				</header>
				<div class="content-wrapper">
					<p>Content to be added...</p>
				</div>
				<a class="source" href="#">Source: TBA</a>
			</article>
			<aside>
				<header>
					<h2 class="title">Recipe books.</h2>
				</header>
				<div class="content-wrapper">
					<ul id="recipe-book-list" class="hidden book-list"></ul>
				</div>
				<a class="source" href="https://openlibrary.org/">Source: open library</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#mainnavigation" onclick="scrollTo()" title="Scroll to main navigation">Previous section <</a></li>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="information">
			<article>
				<header>
					<h2 class="title">News about diabetes.</h2>
				</header>
				<div class="content-wrapper">
					<ul id="news"></ul>
				</div>
				<a class="source" href="https://www.nytimes.com/">Source: New York Times</a>
			</article>
			<aside id="info-wrapper">
				<header>
					<h2 class="title">Information about diabetes.</h2>
				</header>
				<div class="content-wrapper">
					<div class="infoBox"></div>
				</div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes">Source: Wikipedia</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#recipies" onclick="scrollTo()" title="Scroll to recipies section">Previous section <</a></li>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="media">
			<article class="aside-wrapper">
				<header>
					<h2 class="title">Movies and documentaries about diabetes.</h2>
				</header>
				<div class="content-wrapper">
					<aside id="movies">
						<ul id="movie-list"></ul>
					</aside>
				</div>
				<a class="source" href="https://www.imdb.com/">Source: IMDb via OMDb API</a>
			</article>
			<aside>
				<header>
					<h2 class="title">Books about diabetes.</h2>
				</header>
				<div class="content-wrapper">
					<ul id="diabetes-book-list" class="hidden book-list"></ul>
				</div>
				<a class="source" href="https://openlibrary.org/">Source: open library</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Previous section <</a></li>
						<li><a href="#statistics" onclick="scrollTo()" title="Scroll to statistics section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="statistics">
			<article>
				<header>
					<h2 class="title" title="Mortality due to cardiovascular disease, cancer, diabetes and Chronic obstructive pulmonary disease in Denmark">Mortality due to cardiovascular disease, cancer, diabetes and Chronic obstructive pulmonary disease in Denmark.</h2>
				</header>
				<div class="content-wrapper">
					<figure id="highcharts-figure" class="highcharts-figure">
						<div id="container"></div>
					</figure>
					<table id="goal-table" class="hidden">
					</table>
				</div>
				<a class="source" href="https://www.dst.dk/da/Statistik/Sdg/03-sundhed-og-trivsel/delmaal-04/indikator-1#istart">Source: dst.dk</a>
			</article>
			<aside>
				<header>
					<h2 class="title" id="stats-table">Comparison of type 1 and 2 diabetes.</h2>
				</header>
				<div class="content-wrapper">
					<div class="type-stats"></div>
				</div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes">Source: Wikipedia</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Previous section <</a></li>
						<li><a href="#map" onclick="scrollTo()" title="Scroll to map section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="map">
			<article>
				<header>
					<h2 class="title">Map.</h2>
				</header>
				<div class="content-wrapper">
					<p>Content to be added...</p>
				</div>
				<a class="source" href="#">Source: TBA</a>
			</article>
			<aside id="mapbox-map-wrapper">
				<header>
					<h2 class="title">Map.</h2>
				</header>
				<div class="content-wrapper">
					<div id="mapbox-map"></div>
				</div>
				<a class="source" href="#">Source: TBA</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#statistics" onclick="scrollTo()" title="Scroll to statistics section">Previous section <</a></li>
						<li><a href="#about" onclick="scrollTo()" title="Scroll to about section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="about">
			<article>
				<header>
					<h2 class="title">About.</h2>
				</header>
				<div class="content-wrapper">
					<p>Content to be added...</p>
				</div>
			</article>
			<aside>
				<header>
					<h2 class="title">About.</h2>
				</header>
				<div class="content-wrapper">
					<p>Content to be added...</p>
				</div>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#map" onclick="scrollTo()" title="Scroll to map section">Previous section <</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
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