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
	
	<!-- SCRIPTS -->
	<!-- EXTERNAL SCRIPTS -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/papaparse.min.js"></script>

	<!-- LOCAL SCRIPTS -->	
	<script src="js/highcharts/code/highcharts.js"></script>
	<script type="text/javascript" src="js/practical-functions.js?v=0.1"></script>
	<script type="text/javascript" src="js/keys.js"></script>
</head>
<body>
<div class="wrapper">
	<!-- HEADER -->
	<header id="main-header" class="header">
		<h1>Diabetic info central</h1>
		<p class="subtitle">Diabetes related information</p>
		<figure class="diabetes-logo" title="Universal blue circle symbol for diabetes"><img src="img/Blue_circle_for_diabetes.svg" alt="Universal blue circle symbol for diabetes" /></figure>
	</header>
	<nav id="mainnavigation">
		<ul>
			<li><a href="#about" onclick="scrollTo()">About</a></li>
			<li><a href="#recipes" onclick="scrollTo()">Recipies</a></li>
			<li><a href="#information" onclick="scrollTo()">Information</a></li>
			<li><a href="#media" onclick="scrollTo()">Media</a></li>
			<li><a href="#mortality" onclick="scrollTo()">Mortality</a></li>
		</ul>
	</nav>
	<main>
		<section id="about">
			<article class="full-width">
				<header>
					<h2 class="title" title="About">About</h2>
				</header>
				<div class="content-wrapper">
					<p>This page features information about diabetes with <a href="#information" onclick="scrollTo()">news</a> <a href="#info-wrapper" onclick="scrollTo()">a infocard</a>, <a href="#type-stats" onclick="scrollTo()">a comparison of type 1 and type 2 diabetes</a> and <a href="#tips" onclick="scrollTo()">tips</a>. Media with <a href="#movies" onclick="scrollTo()">movie list with trailers</a> and <a href="#diabetes-book-list" onclick="scrollTo()">book list</a> about diabetes. Information about morality, conveyed through a <a href="#diabetes-book-list" onclick="scrollTo()">map</a> and a <a href="highcharts-figure" onclick="scrollTo()">chart</a>.</p>
					<h4>Contact information</p>
					<address id="contact">
						<p class="author" title="author">Max Festersen Hansen</p>
						<p><a href="mailto:maxfh20@student.sdu.dk" class="email" title="Write e-mail to the author." target="_blank">maxfh20@student.sdu.dk</a></p>
						<p><a href="tel:+4529631232" class="tel" title="call the author.">+45 29 63 12 32</a></p>
						<p><a href="https://github.com/MaxFestersen/ds819-project" target="_blank">Source code</a></p>
					</address>
				</div>
			</article>
			<p class="notice"><span class="important">Important notice</span>: this site features almost no original content. All content is subject to change. This site is licenced under the <a href="https://github.com/MaxFestersen/ds819-project/blob/main/LICENSE" target="_blank">MIT licence</a>.  All sources are provided for the individual content.</p>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#mainnavigation" onclick="scrollTo()" title="Scroll to main navigation">Previous section <</a></li>
						<li><a href="#recipes" onclick="scrollTo()" title="Scroll to recipes navigation">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="recipes">
			<article>
				<header>
					<h2 class="title" title="Recipe">Recipe</h2>
				</header>
				<div class="content-wrapper">
					<div id="recipe-wrapper"></div>
				</div>
				<a class="source" href="https://spoonacular.com/" target="_blank">Source: Spoonacular</a>
				<p class="notice">Find a recipe with the search option to the right. You must one query, but can choose any other filter as you please.</p>
				<p class="notice"><span class="important">Important notice</span>: The amount of carbs is an estimate and will vary depending on your ingredients and preperation.</p>
				<p class="notice"><span class="important">Important notice</span>: Recipes come from various sources. Do keep in mind, that some cooks, might not be accurate with measurements, and metadata, so some missclasification can occur.</p>
			</article>
			<aside>
				<header>
					<h2 class="title" title="Search and filter Recipes">Search and filter Recipes</h2>
				</header>
				<div class="content-wrapper">
					<form id="recipe-search-form" onsubmit="recipeSearchRequest(); return false;">
						<label for="recipe-search">Query:</label>
						<input id="recipe-search" type="Search" value="Low Carb" placeholder="Query" name="recipe-search" title="Ssarch for anything" required />
						<label for="recipe-ingredients">Ingredients (seperate with comma):</label>
						<input id="recipe-ingredients" type="Search" value="" placeholder="Ingredients" name="recipe-ingredients" title="Seperate with comma" />
						<label for="recipe-meal-type">Meal type:</label>
						<select name="recipe-meal-type" id="recipe-meal-type" title="Choose type of meal from dropdown">
							<option value="any">Any</option>
							<option value="main%20course">Main course</option>
							<option value="side%20dish">Side dish</option>
							<option value="desert">Desert</option>
							<option value="appetizer">Appetizer</option>
							<option value="salad">Salad</option>
							<option value="bread">Bread</option>
							<option value="breakfast">Breakfast</option>
							<option value="soup">Soup</option>
							<option value="beverage">Beverage</option>
							<option value="sauce">Sauce</option>
							<option value="marinade">Marinade</option>
							<option value="fingerfood">Fingerfood</option>
							<option value="snack">Snack</option>
							<option value="drink">Drink</option>
						</select>
						<label for="recipe-meal-cuisines">Cuisines:</label>
						<select name="recipe-meal-cuisines" id="recipe-meal-cuisines" title="Choose cuisines from dropdown">
							<option value="any">Any</option>
							<option value="African">African</option>
							<option value="American">American</option>
							<option value="British">British</option>
							<option value="Cajun">Cajun</option>
							<option value="Caribbean">Caribbean</option>
							<option value="Chinese">Chinese</option>
							<option value="Eastern%00European">Eastern European</option>
							<option value="European">European</option>
							<option value="French">French</option>
							<option value="German">German</option>
							<option value="Greek">Greek</option>
							<option value="Indian">Indian</option>
							<option value="Irish">Irish</option>
							<option value="Italian">Italian</option>
							<option value="Japanese">Japanese</option>
							<option value="Jewish">Jewish</option>
							<option value="Korean">Korean</option>
							<option value="Latin%00American">Latin American</option>
							<option value="Mediterranean">Mediterranean</option>
							<option value="Mexican">Mexican</option>
							<option value="Middle%00Eastern">Middle Eastern</option>
							<option value="Nordic">Nordic</option>
							<option value="Southern">Southern</option>
							<option value="Spanish">Spanish</option>
							<option value="Thai">Thai</option>
							<option value="Vietnamese">Vietnamese</option>
						</select>
						<label for="recipe-meal-intolerances">Intolerances:</label>
						<select name="recipe-meal-intolerances" id="recipe-meal-intolerances" title="Choose intolerances from dropdown">
							<option value="none">Not set</option>
							<option value="Dairy">Dairy</option>
							<option value="Egg">Egg</option>
							<option value="Gluten">Gluten</option>
							<option value="Grain">Grain</option>
							<option value="Peanut">Peanut</option>
							<option value="Seafood">Seafood</option>
							<option value="Sesame">Sesame</option>
							<option value="Shellfish">Shellfish</option>
							<option value="Soy">Soy</option>
							<option value="Sulfite">Sulfite</option>
							<option value="Tree%20Nut">Tree Nut</option>
							<option value="Wheat">Wheat</option>
						</select>
						<label for="recipe-meal-diet">Diet:</label>
						<select name="recipe-meal-diet" id="recipe-meal-diet" title="Choose diet from dropdown">
							<option value="none">Not set</option>
							<option value="Gluten%20Free">Gluten Free</option>
							<option value="Ketogenic">Ketogenic</option>
							<option value="Vegetarian">Vegetarian</option>
							<option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
							<option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
							<option value="Vegan">Vegan</option>
							<option value="Pescetarian">Pescetarian</option>
							<option value="Paleo">Paleo</option>
							<option value="Primal">Primal</option>
							<option value="Whole30">Whole30</option>
						</select>
						<label for="recipe-carb-limit">Maximum number of carbs:</label>
						<input id="recipe-carb-limit" type="number" value="100" min="0" placeholder="Max carb" name="recipe-carb-limit" title="Maximum number of carbs" required />
						<label for="recipe-limit">Result limit:</label>
						<!--<input id="recipe-limit" type="number" value="2" min="0" max="5" placeholder="1-5" name="recipe-limit" title="Limit results" />-->
						<input type="submit" value="Submit" title="Search for recipes with ingredient">
					</form>
				</div>
			</aside>
			<article class="full-width">
				<header>
					<h2 class="title" title="Recipe books">Recipe books</h2>
				</header>
				<div class="content-wrapper">
					<ul id="recipe-book-list" class="hidden book-list"></ul>
				</div>
				<a class="source" href="https://openlibrary.org/" target="_blank">Source: open library</a>
			</article>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#about" onclick="scrollTo()" title="Scroll to about section">Previous section <</a></li>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="information">
			<article>
				<header>
					<h2 class="title" title="News about diabetes">News about diabetes</h2>
				</header>
				<div class="content-wrapper">
					<ul id="news"></ul>
				</div>
				<a class="source" href="https://www.nytimes.com/" target="_blank">Source: New York Times</a>
			</article>
			<aside id="info-wrapper">
				<header>
					<h2 class="title" title="Information about diabetes">Information about diabetes</h2>
				</header>
				<div class="content-wrapper">
					<div class="infoBox"></div>
				</div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes" target="_blank">Source: Wikipedia</a>
			</aside>
			<article>
				<header>
					<h2 class="title" id="stats-table" title="Comparison of type 1 and 2 diabetes">Comparison of type 1 and 2 diabetes</h2>
				</header>
				<div class="content-wrapper">
					<div class="type-stats"></div>
				</div>
				<a class="source" href="https://en.wikipedia.org/wiki/Diabetes" target="_blank">Source: Wikipedia</a>
			</article>
			<aside>
				<header>
					<h2 class="title" title="Tips">Tips</h2>
				</header>
				<div class="content-wrapper">
					<ul id="tips">
						<li>
							<p>There are various organisations to help give information, research, awareness, aid and more in relation to diabetes. Some include:</p>
							<ul>
								<li><p>In Denmark: <a href="https://diabetes.dk/" target="_blank">diabetes foreningen</a>.</p></li>
								<li><p>In America: <a href="https://www.diabetes.org/" target="_blank">American Diabetes Assosiation</a>.</p></li>
								<li><p>In UK: <a href="https://www.diabetes.org.uk/" target="_blank">Diabetes UK</a>.</p></li>
							</ul>
						</li>
						<li><p>There are various apps that can aid the daily life of a diabetic for both type 1 and type 2. For danes, <a href="https://www.sdcc.dk/undersoegelse-og-behandling/vejledninger/Sider/App-oversigten.aspx" title="Steno Diabetes Center Copenhagen" target="_blank">SDCC</a> has created a good list for purposes like insulin calculation, carb calculation, exercise, medicin, networking and more.</p></li>
						<li><p>It can be a good idea to count calories. Follow an oficial guide, like <a href="https://diabetes.dk/sundhed/mad/kulhydrat/kulhydrattaelling" target="_blank">the one from diabetes foreningen</a>, or use an official app like Diabetes og kulhydrattælling via <a href="https://play.google.com/store/apps/details?id=com.diabetesforeningen.kulhydrat" target="_blank">Google Play</a> or <a href="https://apps.apple.com/dk/app/diabetes-og-kulhydratt-lling/id505922881?l=da" target="_blank">App Store</a>.</p></li>
						<li><p>Diabetes might affect your sex life. Check out a official guide, like <a href="https://diabetes.dk/sundhed/kroppen/sexliv" target="_blank">the one on diabetes foreningen</a>.</p></li>
						<li><p>Overveight is a common problem among type 2 diabetics.  Check out a official guide, like <a href="https://diabetes.dk/sundhed/kroppen/overvaegt-og-vaegttab" target="_blank">the one on diabetes foreningen</a>.</p></li>
						<li><p><a href="https://medlineplus.gov/ency/patientinstructions/000323.htm" title="soruce of claim" target="_blank">Diabetes can potentially harm eyes and eyesight</a>. It is recomended to attend regular exams. Do contact your doctor and ask how often you should be examined and what options are near you.</p></li>
					</ul>
				</div>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#recipes" onclick="scrollTo()" title="Scroll to recipes section">Previous section <</a></li>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="media">
			<article class="aside-wrapper">
				<header>
					<h2 class="title" title="Movies and documentaries about diabetes">Movies and documentaries about diabetes</h2>
				</header>
				<div class="content-wrapper">
					<aside id="movies">
						<ul id="movie-list"></ul>
					</aside>
				</div>
				<a class="source" href="https://www.imdb.com/" target="_blank">Source: IMDb via OMDb API</a>
				<p class="notice"><span class="important">Important notice</span>: Some content is not a movie or a documentary, despite being labeld as. The trailers provided are found automatically on YouTube, and might not be very accurate.</p>
			</article>
			<aside>
				<header>
					<h2 class="title" title="Books about diabetes">Books about diabetes</h2>
				</header>
				<div class="content-wrapper">
					<ul id="diabetes-book-list" class="hidden book-list"></ul>
				</div>
				<a class="source" href="https://openlibrary.org/" target="_blank">Source: open library</a>
			</aside>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#information" onclick="scrollTo()" title="Scroll to information section">Previous section <</a></li>
						<li><a href="#mortality" onclick="scrollTo()" title="Scroll to mortality section">Next section ></a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
		<section id="mortality">
			<article>
				<header>
					<h2 class="title" title="Mortality due to deabetis in Denmark 2019 by region">Map: Mortality due to deabetis in Denmark 2019 by region</h2>
				</header>
				<div class="content-wrapper">
					<div id="mapbox-map"></div>
				</div>
				<a class="source" href="https://www.statistikbanken.dk/FOD507" target="_blank">Source: Danmarks Statistik</a>
			</article>
			<aside id="mapbox-map-wrapper">
				<header>
					<h2 class="title" title="Information for map">Information for map</h2>
				</header>
				<div class="content-wrapper">
					<ul id="mapbox-map-info"></ul>
				</div>
				<a class="source" href="https://www.statistikbanken.dk/FOD507" target="_blank">Source: Danmarks Statistik</a>
			</aside>
			<article class="full-width">
				<header>
					<h2 class="title" title="Mortality due to cardiovascular disease, cancer, diabetes and Chronic obstructive pulmonary disease in Denmark">Mortality due to non-transmitable diseases in Denmark</h2>
				</header>
				<div class="content-wrapper">
					<figure id="highcharts-figure" class="highcharts-figure">
						<div id="container"></div>
					</figure>
					<table id="goal-table" class="hidden">
					</table>
				</div>
				<a class="source" href="https://www.dst.dk/da/Statistik/Sdg/03-sundhed-og-trivsel/delmaal-04/indikator-1#istart" target="_blank">Source: dst.dk</a>
			</article>
			<footer>
				<nav class="navigation">
					<ul>
						<li><a href="#media" onclick="scrollTo()" title="Scroll to media section">Previous section <</a></li>
						<li><a href="#page-top" onclick="scrollTo()" title="Scroll to top of page">Page top ^</a></li>
					</ul>
				</nav>
			</footer>
		</section>
	</main>
</div>
<!-- JAVASCRIPT FILES -->
<script type="text/javascript" src="js/jquery-all-in-one.js?v=0.1"></script>
</body>