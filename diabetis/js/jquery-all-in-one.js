// Define variables ------------------------------------------------------------------------------------------------------------
var param = "diabetes";
var paramAlt = "low carb";

// DATE ------------------------------------------------------------------------------------------------------------------------
// Used for some api paramers, like begin and end for new york times.
var now = new Date();
var nowString = "" + now.getFullYear();
if(now.getMonth()<10){
	posibleMonthZero = "0";
} else {
	posibleMonthZero = "";
}
nowString = nowString + posibleMonthZero + now.getMonth();
if(now.getDate()<10){
	posibleDateZero = "0";
} else {
	posibleDateZero = "";
}
nowString = nowString + posibleDateZero + now.getDate();
//console.log(nowString);
var pastString = now.getFullYear()-3 + "0101"; // Date starting at year 3 years ago
//console.log(pastString);


// NEW YORK TIMES  -------------------------------------------------------------------------------------------------------------
// > Request
// I prefer to collecet the request gradually to the same string
let nytRequest = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'; //endpoint
nytRequest = nytRequest + 'begin_date=' + pastString; // Begin date on format YYYYMMDD
nytRequest = nytRequest + '&end_date=' + nowString; // End date on format YYYYMMDD
nytRequest = nytRequest + '&sort=newest'; // Sort by newest news
nytRequest = nytRequest + '&q=keywords=diabetes'; // Filter by parameter
nytRequest = nytRequest + '&key=' + nytKey;
//console.log(nytRequest);

// > Elements
let news = document.getElementById("news")

// > Request
//console.log(nytRequest);
/*	Fetch method: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch	*/
fetch(nytRequest)
.then((response) => {
	return response.json()
})
.then((data) => {
	//console.log(data.response.docs);
	data = data.response.docs
	for (var i = 0; i < data.length; i++){
		// >> Structure
		/*
		ul
			li
				newsWrap
					top
						image  - data.multimedia[i].url - multimedia --> loop for "thumbLarge" --> find url
						headline - data.headline.main
						Read more link - data.web_url
					mid
						snippet - data.snippet
					bottom
						auhor - byline.original OR/AND byline.organization
						date - data.pub_date
		*/
		
		// >> Find picture
		var nytImgLink = false;
		for(var j=0; j < data[i].multimedia.length; j++){
			if(data[i].multimedia[j].crop_name == "thumbLarge" || data[i].multimedia[j].subType =="thumbLarge"){
				nytImgLink = "https://www.nytimes.com/" + data[i].multimedia[j].url;
				break;
			}
		}
		
		// >> Find text
		var nytHeadline = data[i].headline.main;
		var nytTitle = data[i].headline.main;
		var nytUrl = data[i].web_url;
		var snippet = data[i].snippet;
		var nytAuthor = data[i].byline.original;
		var nytDate = data[i].pub_date.split("T")[0];
		
		// >> Create elements
		var nytLi = document.createElement("li");
		var nytWrapper = document.createElement("article");
		var nytWrapperTop = document.createElement("header");
		var nytImageElem = document.createElement("img");
		var nytTitleElem = document.createElement("h3");
		var nytUrlElem = document.createElement("a");
		var nytWrapperMid = document.createElement("div");
		var nytSnippetElem = document.createElement("p");
		var nytWrapperBottom = document.createElement("footer");
		var nytAuthorElem = document.createElement("p");
		var nytDateElem = document.createElement("span");
		
		// >> Set element attributes
		nytLi.setAttribute("class", "news-article-wrapper");
		if(nytImgLink){
			nytImageElem.setAttribute("src", nytImgLink);
			nytImageElem.setAttribute("placeholder",  nytTitle);
		} else{
			nytImageElem = false; // Maybe use placeholder instead?
		}
		nytTitleElem.setAttribute("title", nytTitle);
		nytUrlElem.setAttribute("href", nytUrl);
		nytUrlElem.setAttribute("title", "Read more about: " + nytTitle + " on New York Times webpage in a new tab");
		nytUrlElem.setAttribute("target", "_blank");
		
		// >> Fill elements
		// >>> Top
		nytTitleElem.appendChild(document.createTextNode(nytTitle));
		nytUrlElem.appendChild(document.createTextNode("Read more"));
		nytWrapperTop.appendChild(nytImageElem);
		nytWrapperTop.appendChild(nytTitleElem);
		nytWrapperTop.appendChild(nytUrlElem);

		// >>> Mid
		nytSnippetElem.appendChild(document.createTextNode(snippet));
		nytWrapperMid.appendChild(nytSnippetElem);

		
		// >>> Bottom
		//nytAuthorElem.appendChild(document.createTextNode(nytAuthor));
		//nytDateElem.appendChild(document.createTextNode(nytDate));
		nytAuthorElem.innerHTML = nytAuthor + " <span>" + nytDate + "</span>";
		nytWrapperBottom.appendChild(nytAuthorElem);
		nytWrapperBottom.appendChild(nytDateElem);
		
		//>>> Wrapper
		nytWrapper.appendChild(nytWrapperTop);
		nytWrapper.appendChild(nytWrapperMid);
		nytWrapper.appendChild(nytWrapperBottom);
		
		//>>> Li
		nytLi.appendChild(nytWrapper);
		
		// >> Populate target
		news.appendChild(nytLi);
		
	}
})
.catch((err) => {
// Do something for an error here
	console.log("New York Times API encountered an error.");
})



// PIXABAY -------------------------------------------------------------------------------------------------------------------
// > Request
let pixabayRequest = "https://pixabay.com/api/";
pixabayRequest = pixabayRequest + "?q=" + param;
pixabayRequest = pixabayRequest + "&image_type=all"; // Get all image types. Set to photo if results get wierd
pixabayRequest = pixabayRequest + "&safesearch=true"; //  Filter for only images suitable for all ages 
pixabayRequest = pixabayRequest + "&lang=da"; // 	Language code of the language to be searched in. If removed defaults to en
pixabayRequest = pixabayRequest + "&category=health"; 
pixabayRequest = pixabayRequest + "&orientation=horizontal"; 
pixabayRequest = pixabayRequest + "&order=latest"; 
pixabayRequest = pixabayRequest + "&page=1"; // Result page  (also is used in relation to per_page)
pixabayRequest = pixabayRequest + "&per_page=20"; // Limit results (also is used in relation to page)
pixabayRequest = pixabayRequest + "&key=" + pixabayKey;
//console.log(pixabayRequest);

// > Elements
let hero = document.getElementById("main-header");

// > Fetch
fetch(pixabayRequest)
.then((response) => {
	return response.json()
})
.then((data) => {
	for (var i = 0; i < data.hits.length; i++){
		// >> Create html elements
		var obj = data.hits[i];
		var pixImageWrapper = document.createElement("figure");
		var pixImage = document.createElement("img");
		var pixLogoLink = document.createElement("a");
		var pixLogo = document.createElement("img"); // Append pixabay logo, for individual classification, for if another source might be added.

		// >> Create content
		var pixImageAbout = "By: " + obj.user + " - Tags: " + obj.tags;
		
		// >> Set element attributes
		pixImageWrapper.setAttribute("class", "hero-image-wrapper");
		pixImageWrapper.classList.add("fade");
		pixImageWrapper.classList.add("hidden");
		pixImage.setAttribute("src", obj.webformatURL);
		pixImage.setAttribute("alt", pixImageAbout);
		pixImage.setAttribute("title", pixImageAbout);
		pixLogo.setAttribute("class", "hero-image-source");
		pixLogo.setAttribute("src", "img/pixabay_logo_square.svg");
		pixLogo.setAttribute("alt", "Pixabay logo");
		pixLogoLink.setAttribute("class", "pixabay-logo");
		pixLogoLink.setAttribute("href", "https://pixabay.com/");
		pixLogoLink.setAttribute("target", "_blank");
		pixLogoLink.setAttribute("title", "Banner-image source: Pixabay"); 
		
		// >> Fill elements
		pixImageWrapper.appendChild(pixImage)
		pixLogoLink.appendChild(pixLogo);
		pixImageWrapper.appendChild(pixLogoLink);
		
		// >> Populate target
		hero.appendChild(pixImageWrapper);
	}
	slideIndex = 0;
	heroRotation();
})
.catch((err) => {
	console.log("Pixabay API encountered an error.");
})


// MAPBOX ---------------------------------------------------------------
/*
	Using guides:
	https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/
	https://geojsonlint.com/
*/
// > Set vars
let mapboxMapWrapper = document.getElementById("mapbox-map-wrapper");
lat=56.355;
lon=9.5155848;
diabetesMortality = false;

// > Initate map
var map = new mapboxgl.Map({
	container: 'mapbox-map', // container id
	style: 'mapbox://styles/maxfest/ckp3x4zqf2q7l18sur9tt7xr0', // style URL
	center: [lon, lat], // starting position [lng, lat]
	zoom: 6, // starting zoom
});

// > Load local json file
fetch('data/deabetis_death_denmark_2019_by_region.json',{
	headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
})
.then(response => response.text())
.then((data) => {
	//console.log(data);
	diabetesMortality = JSON.parse(String(data));
	//console.log(diabetesMortality);
})

// > Populate map after load
map.on('load', function (e) {
	map.addSource('places', {
		'type': 'geojson',
		'data': diabetesMortality
	});
	
	map.addLayer({
		'id': '0',
		'type': 'fill',
		'source': 'places',
		'layout': {},
		'paint': {
			'fill-color': [ /*	https://docs.mapbox.com/mapbox-gl-js/example/updating-choropleth/	*/
				'interpolate',
				['linear'],
				['get', 'mortality'], // Bad attribute to color by point (it will change if updated), but it was a lot more easy than grouping by any other attribute.
				129,
				'#2b456b',
				226,
				'#CC2936',
				235,
				'#DEB841',
				299,
				'#231F20',
				397,
				'#568BD7'
			],
			'fill-opacity': 0.5
		}
	});
});

// > Map info -------------------------------------------------------
// >> Set vars
let mapboxMap = document.getElementById("mapbox-map-info");

map.on('load', function (e) {
	for (var i = 0; i < diabetesMortality.features.length; i++){
		// >>> Setting object
		var obj = diabetesMortality.features[i].properties;
		//console.log(obj)
		
		// >>> Setting html variables
		var mapInfoLi = document.createElement("li");
		var mapInfoColorBox = document.createElement("figure");
		var mapInfoText = document.createElement("p");
		
		// >> Setting js variables
		var mapInfoName = obj.name;
		var mapInfoMortality = obj.mortality;
		var mapInfoColor = "#2b456b";
		//console.log(mapInfoMortality);
		switch(mapInfoMortality) {
			case 129:
				mapInfoColor = "#2b456b";
				break;
			case 226:
				mapInfoColor = "#CC2936";
				break;
			case 235:
				mapInfoColor = "#DEB841";
				break;
			case 299:
				mapInfoColor = "#231F20";
				break;
			case 397:
				mapInfoColor = "#568BD7";
				break;
			default:
				mapInfoColor = "#000";
				break;
		}

		// >> Setting attributes
		mapInfoColorBox.setAttribute("style", "background-color:" + mapInfoColor + ";");
		
		// >> Append childs
		mapInfoText.innerHTML = mapInfoName + ": <span>" + mapInfoMortality + "</span>";
		mapInfoLi.appendChild(mapInfoColorBox);
		mapInfoLi.appendChild(mapInfoText);
		
		// >> Populate target
		mapboxMap.appendChild(mapInfoLi);
	}
});

// OPEN LIBRARY ----------------------------------------------------------
//http://openlibrary.org/search.json?q=Odense&lan=dan

// > Request
let openBookRequest = "http://openlibrary.org/search.json";
let openBookRequest_one = openBookRequest + "?title=" + param; // Filter for diabetes
let openBookRequest_two = openBookRequest + "?title=" + paramAlt; // Filter for low carb recipes
openBookRequest_one = openBookRequest_one + "&lan=dan"; // Filter for danish results
openBookRequest_two = openBookRequest_two + "&lan=dan"; // Filter for danish results
openBookRequest_two = openBookRequest_two + "&subject=Recipes"; // Filter for danish results
//console.log(openBookRequest_one);
//display on the console the full API request to make sure you did everything right


// > Elements
let diabetesBookList = document.getElementById("diabetes-book-list")
let recipeBookList = document.getElementById("recipe-book-list")

// > Fetch 1: diabetes books -----------
fetch(openBookRequest_one)
.then((response) => {
	return response.json()
})
.then((data) => {
	diabetesBookList.classList.remove("hidden");
	// >> Sorting
	//console.log(data.docs.publish_year);
	data.docs.sort((a,b) => {
		return (parseInt(a.first_publish_year) + parseInt(b.first_publish_year));
	})
	for (var i = 0; i < data.docs.length; i++){
		// >> Setting object
		var obj = data.docs[i];
		//console.log(obj)
		
		// >> Setting html variables
		var li = document.createElement("li");
		var titleElem = document.createElement("h3");
		var info = document.createElement("p");
		var date = document.createElement("span");
		var img = document.createElement("img");
		var link = document.createElement("a");
		var article = document.createElement("article");
		
		// >> Setting js variables and adding attributes
		var title = obj.title;
		titleElem.setAttribute("class", "book-title");
		var author_name = obj.author_name; 
		var publish_year = obj.publish_year;
		info.setAttribute("class", "book-info");
		if(obj.seed[0]){
			link.appendChild(document.createTextNode("Read about"));
			link.setAttribute("href", "https://openlibrary.org/" + obj.seed[0]);
			link.setAttribute("title", "Read more about " + title + "On openlibrary.org");
			link.setAttribute("target", "_blank");
		}
		var cover = obj.cover_i
		if(cover){
			img.src = "https://covers.openlibrary.org/b/id/" + cover + ".jpg";
			img.title = title;
			var img_wrapper = document.createElement("div");
			img_wrapper.classList = "image-wrapper";
			img_wrapper.appendChild(img);
			article.appendChild(img_wrapper);
		}
		
		// >> Append childs
		if(title){
			titleElem.appendChild(document.createTextNode(title));
			article.appendChild(titleElem);
		}
		if(author_name && publish_year){
			info.innerHTML = "By " + author_name + " <span>" + publish_year + "</span>";
		} else if(author_name){
			info.appendChild(document.createTextNode("By " + author_name));
		} else if(publish_year){
			date.appendChild(document.createTextNode("Published: " + publish_year));
			info.appendChild(date);
		}
		article.appendChild(info);
		article.appendChild(link);
		li.appendChild(article);
		//article.setAttribute("title", "isbn:" + obj.isbn[0]);
		
		// >> Populate target
		diabetesBookList.appendChild(li);
	}
})
.catch((err) => {
	diabetesBookList.innerHTML = "";
	console.log("Openlibrary API encountered an error with openBookRequest_one.");
})

// > Fetch 2:  Recipies booklist -----------
fetch(openBookRequest_two)
.then((response) => {
	return response.json()
})
.then((data) => {
	recipeBookList.classList.remove("hidden");
	//console.log(data.docs)
	// >> Sorting
	data.docs.sort((a,b) => {
		return (parseInt(a.first_publish_year) + parseInt(b.first_publish_year));
	})
	for (var i = 0; i < data.docs.length; i++){
		// >> Setting object
		var obj = data.docs[i];
		//console.log(obj)
		
		// >> Setting html variables
		var li = document.createElement("li");
		var titleElem = document.createElement("h3");
		var info = document.createElement("p");
		var date = document.createElement("span");
		var img = document.createElement("img");
		var link = document.createElement("a");
		var article = document.createElement("article");
		
		// >> Setting js variables and adding attributes
		var title = obj.title;
		titleElem.setAttribute("class", "book-title");
		var author_name = obj.author_name; 
		var publish_year = obj.publish_year;
		info.setAttribute("class", "book-info");
		if(obj.seed[0]){
			link.appendChild(document.createTextNode("Read about"));
			link.setAttribute("href", "https://openlibrary.org/" + obj.seed[0]);
			link.setAttribute("title", "Read more about " + title + "On openlibrary.org");
			link.setAttribute("target", "_blank");
		}
		var cover = obj.cover_i
		if(cover){
			img.src = "https://covers.openlibrary.org/b/id/" + cover + ".jpg";
			img.title = title;
			var img_wrapper = document.createElement("div");
			img_wrapper.classList = "image-wrapper";
			img_wrapper.appendChild(img);
			article.appendChild(img_wrapper);
		}
		
		// >> Append childs
		if(title){
			titleElem.appendChild(document.createTextNode(title));
			article.appendChild(titleElem);
		}
		if(author_name && publish_year){
			info.innerHTML = "By " + author_name + " <span>" + publish_year + "</span>";
		} else if(author_name){
			info.appendChild(document.createTextNode("By " + author_name));
		} else if(publish_year){
			date.appendChild(document.createTextNode("Published: " + publish_year));
			info.appendChild(date);
		}
		article.appendChild(info);
		article.appendChild(link);
		li.appendChild(article);
		//article.setAttribute("title", "isbn:" + obj.isbn[0]);
		
		// >> Populate target
		recipeBookList.appendChild(li);
	}
})
.catch((err) => {
	recipeBookList.innerHTML = "";
	console.log("Openlibrary API encountered an error with openBookRequest_two.");
})

// WIKIPEDIA INFOBOX ----------------------------------------------------------------------
// HTTP request is stored in a variable url
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + "Diabetes" + "&redirects&prop=text&callback=?";
//console.log(wikiUrl);
// using the .getJSON() function to parse the response
town = 'Odense';
$.getJSON(wikiUrl, function (data){
  var rawtext = data.parse.text["*"]; //placing data text on variable to be used on string replacement below
  // Next line uses regular expressions to replave local href to global href so the links in the infobox work properly
  // NOTE this is made to work with English, if you use a different language you need to change the global address
  rawtext = rawtext.replace(new RegExp('href="/wiki', 'g'), 'href="https://en.wikipedia.org/wiki'); //wikipedia links
  wikiHTML = rawtext.replace(new RegExp('"//upload.', 'g'), '"https://upload.'); //wikimedia pictures
  $wikiDOM = $("<document>"+wikiHTML+"</document>");
  $("div.infoBox").append($wikiDOM.find('.infobox').html()); //Using DOM to insert the content on a given class
  $("div.type-stats").append($wikiDOM.find('.wikitable').html()); //Using DOM to insert the content on a given class
});

// OMDB API ------------------------------------------------------------------------------

let omdbRequest = "http://www.omdbapi.com/?";
omdbRequest = omdbRequest + "s=" + param; // // Search for movies with diabetes in the title
omdbRequest = omdbRequest + "&type=movie"; // Filter for movies only (ignore series and episodes)
omdbRequest = omdbRequest + "&apikey=" + omdbapiKey;
//console.log(request);
//display on the console the full API request to make sure you did everything right
let movieList = document.getElementById("movie-list")

fetch(omdbRequest)
.then((response) => {
	return response.json()
})
.then((data) => {
	// >> Sorting
	console.log(data.Search);
	data.Search.sort((a,b) => {
		return (parseInt(b.Year) - parseInt(a.Year));
	});
	//console.log(data.Search)
	for (var i = 0; i < data.Search.length; i++){
		//ul
		//	li
		//		article
		//			InfoDiv
		//				Image
		//				P
		//					Title
		//						span
		//							Year
		//			Trailer
		//				Iframe - Trailer

		// >> Setting object
		var obj = data.Search[i];
		//console.log(obj)
		
		// >> Setting html variables
		var li = document.createElement("li");
		var article = document.createElement("article");
		var movieInfo = document.createElement("h3");
		var infoSection = document.createElement("header");
		let trailerSection = document.createElement("footer");
		var movieImg = document.createElement("img");
		
		
		// >> Set element attributes
		if(obj.Poster != "N/A"){ // Ignore if set as "N/A"
			movieImg.setAttribute("src", obj.Poster);
			movieImg.setAttribute("alt", obj.Title);
		}
		
		// >> YOUTUBE API ------------------------------------------------------------------------------
		var ytRequest = 'https://www.googleapis.com/youtube/v3/search?'; //endpoint
		ytRequest = ytRequest + 'part=snippet'; //Snippet?
		ytRequest = ytRequest + "&maxResults=1"; // Limit results to 1 result
		ytRequest = ytRequest + '&q=' + obj.Title + "%20trailer"; // %20 means space
		ytRequest = ytRequest + YTKey;
		//console.log(ytRequest);
		
		// >>> Youtube request
		fetch(ytRequest)
		.then((ytResponse) => {
			return ytResponse.json();
		})
		.then((ytData) => {
			if(ytData.error){
				var errorMessage = document.createElement("p");
				errorMessage.appendChild(document.createTextNode("No Youtube trailer was able to load."));
				trailerSection.setAttribute("class", "error");
				trailerSection.appendChild(errorMessage);
			} else{
				for (var j = 0; j < ytData.items.length; j++){
					var ytObj = ytData.items[j];
					var trailerIframe = document.createElement("iframe");
					trailerIframe.setAttribute("src", "https://www.youtube.com/embed/" + ytObj.id.videoId + "?controls=0&showinfo=1");
					trailerIframe.setAttribute("frameborder", "0");
					trailerIframe.setAttribute("allowfullscreen", "true");
					trailerSection.appendChild(trailerIframe);
				}
			}
		}).catch((err) => {
				var errorMessage = document.createElement("p");
				errorMessage.appendChild(document.createTextNode("No Youtube trailer was able to load."));
				trailerSection.setAttribute("class", "error");
				trailerSection.appendChild(errorMessage);
		})

		// >> Append childs
		if(obj.Poster != "N/A"){
			infoSection.appendChild(movieImg);
		}
		if(obj.Year != "N/A"){
			movieInfo.innerHTML = obj.Title + " <span>" + obj.Year + "</span>";
		} else{
			movieInfo.appendChild(document.createTextNode(obj.Title));
		}
		infoSection.appendChild(movieInfo);
		article.appendChild(infoSection);
		article.appendChild(trailerSection);
		li.appendChild(article);
		
		// >> Populate target
		movieList.appendChild(li);
	}
})
.catch((err) => {
// Do something for an error here
	console.log("OMDB API encountered an error.");
})

// RECIPE SEARCH API --------------------------------------------------------------------------------------------------------
// http://www.recipepuppy.com/about/api/
// https://spoonacular.com/food-api/docs#Search-Recipes-Complex
// https://spoonacular.com/food-api/docs#Get-Recipe-Information
// > Elements
let recipeWrapper = document.getElementById("recipe-wrapper");

function recipeSearchRequest(){
	// Reset target
	recipeWrapper.innerHTML = "";

	// > Get user parameters
	let searchParam = document.getElementById("recipe-search").value;
	let ingedientsParam = document.getElementById("recipe-ingredients").value;
	let recipeMealTypeParam = document.getElementById("recipe-meal-type");
	let recipeDietParam = document.getElementById("recipe-meal-diet");
	let recipeIntolerancesParam = document.getElementById("recipe-meal-intolerances");
	let recipeCuisineParam = document.getElementById("recipe-meal-cuisines");
	//let recipeLiElemmitParam = document.getElementById("recipe-limit").value;
	let recipeCarbLimitParam = document.getElementById("recipe-carb-limit").value;
	
	// > Format user/form parameters
	// >> Search type
	searchParam = searchParam.trim().replace(" ", "%00");
	ingedientsParam = ingedientsParam.trim().replace(" ", "%00").toLowerCase();
	if(ingedientsParam){
		ingedientsParam = "&includeIngredients=" + ingedientsParam;
	} else{
		includeIngredients = "";
	}
	
	// >> Select type
	recipeMealTypeParam = recipeMealTypeParam.options[recipeMealTypeParam.selectedIndex].value;
	let recipeMealType = "";
	if(recipeMealTypeParam != "any"){
		recipeMealType = "&type" + recipeMealTypeParam;
	}
	recipeIntolerancesParam = recipeIntolerancesParam.options[recipeIntolerancesParam.selectedIndex].value;
	let recipeIntolerances = "";
	if(recipeIntolerancesParam != "none"){
		recipeIntolerances = "&intolerances" + recipeIntolerancesParam;
	}
	recipeDietParam = recipeDietParam.options[recipeDietParam.selectedIndex].value;
	let recipeDiet = "";
	if(recipeDietParam != "none"){
		recipeDiet = "&diet" + recipeDietParam;
	}
	recipeCuisineParam = recipeCuisineParam.options[recipeCuisineParam.selectedIndex].value;
	let recipeCuisine = "";
	if(recipeCuisineParam != "any"){
		recipeCuisine = "&cuisine" + recipeCuisineParam;
	}
	
	// Number type
	let recipeCarbLimit = "";
	if(recipeCarbLimitParam>1){
		recipeCarbLimit = "&maxCarbs=" + parseInt(recipeCarbLimitParam);
	} else{
		recipeCarbLimit = "&maxCarbs=1";
	}
	let recipeLiElemmit = "";
	/*if(recipeLiElemmitParam>1 && recipeLiElemmitParam<=5){
		recipeLiElemmit = "&number=" + recipeLiElemmit;
	} else{*/
		recipeLiElemmit = "&number=1";
	//}
	
	// > Request
	let recipeSearchRequest = "https://api.spoonacular.com/recipes/complexSearch/?";
	recipeSearchRequest = recipeSearchRequest + "query=" + searchParam; // Search by input value
	recipeSearchRequest = recipeSearchRequest + recipeMealType; // Filter by type
	recipeSearchRequest = recipeSearchRequest + recipeIntolerances; // Filter by intolerances
	recipeSearchRequest = recipeSearchRequest + recipeDiet; // Filter by diet
	recipeSearchRequest = recipeSearchRequest + recipeCuisine; // Filter by cuisine
	recipeSearchRequest = recipeSearchRequest + recipeCarbLimit; // Filter by cuisine
	recipeSearchRequest = recipeSearchRequest + recipeLiElemmit; // Limit results
	if(recipeSearchRequest !== "https://api.spoonacular.com/recipes/complexSearch/?query=&number=1"){
		// Add key or fail intentionally
		recipeSearchRequest = recipeSearchRequest + spoonacularKey; // Search by input value
	}
	//console.log(recipeSearchRequest);
	
	// > Fetch
	fetch(recipeSearchRequest)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		//console.log(data);
		var obj = data.results
		if(obj.length>0){
			for (let i = 0; i < obj.length; i++){
				/*
				ul
					li
						article
							header
								Image
								Title
								Read more
							footer
								Carbs
								Info
								Source
									name & link
				*/
				// >> Create html elements
				var recipeUlElem = document.createElement("ul");
				var recipeLiElem = document.createElement("li");
				var recipeArticleiElem = document.createElement("article");
				var recipeHeaderElem = document.createElement("header");
				var recipeImageElem = document.createElement("img");
				var recipeTitleElem = document.createElement("h3");
				var recipeReadMoreElem = document.createElement("a");
				var recipeFooterElem = document.createElement("footer");
				var recipeSourceElem = document.createElement("a");
				var recipeCarbsElem = document.createElement("p");
				var recipeInfoElem = document.createElement("p");
				
				// >> Create content
				var recipeId = obj[i].id;
				var recipeImage = obj[i].image;
				var recipeCarbs = obj[i].carbs;
				if(!recipeCarbs){
					//Inconsistent position. Might be a top level attribute. Might have some place among nutrition.nutrients. Posibly other places.
					let recipeNutrition = obj[i].nutrition.nutrients;
					for(let j = 0; j < recipeNutrition.length; j++){
						if(obj[i].nutrition.nutrients[j].title == "Carbohydrates" || obj[i].nutrition.nutrients[j].title == "Carb" || obj[i].nutrition.nutrients[j].title == "Carbs"){
							recipeCarbs = obj[i].nutrition.nutrients[j].amount.toFixed(2).toString().replace(".", ",") + obj[i].nutrition.nutrients[j].unit + " Carbs";
							break;
						}
					}
				} else{
					recipeCarbs = recipeCarbs + " Carbs";
				}
				var recipeTitle = "";
				var recipeInfoString = "";
				var sourceText = "";
				var sourceUrl = "";
				
				// >>> Get recipe Infoemarion
				var recipeRequest = "https://api.spoonacular.com/recipes/" + recipeId + "/information?includeNutrition=false";
				recipeRequest = recipeRequest + spoonacularKey; // Search by input value
				//console.log(recipeRequest);
				fetch(recipeRequest)
				.then((recipeRequestResponse) => {
					return recipeRequestResponse.json();
				})
				.then((recipeData) => {
					//console.log(recipeData);
					recipeTitle = recipeData.title;
					sourceText = recipeData.creditsText;
					sourceUrl = recipeData.sourceUrl;
					if(recipeData.servings){
						recipeInfoString = recipeInfoString + ", Servings: " + recipeData.servings;
					}
					if(recipeData.readyInMinutes){
						recipeInfoString = recipeInfoString + ", Ready in: " + recipeData.readyInMinutes;
					}
					if(recipeData.dairyFree){
						recipeInfoString = recipeInfoString + ", Dairy free";
					}
					if(recipeData.vegan){
						recipeInfoString = recipeInfoString + ", Vegan";
					}
					if(recipeData.vegetarian){
						recipeInfoString = recipeInfoString + ", Vegetarian";
					}
					if(recipeData.glutenFree){
						recipeInfoString = recipeInfoString + ", Gluten free";
					}
					if(recipeData.sustainable){
						recipeInfoString = recipeInfoString + ", Sustainable";
					}
					if(recipeData.veryHealthy){
						recipeInfoString = recipeInfoString + ", Healthy";
					} else{
						recipeInfoString = recipeInfoString + ", Not specified as healthy";
					}
					if(recipeData.veryPopular){
						recipeInfoString = recipeInfoString + ", Popular";
					} else{
						recipeInfoString = recipeInfoString + ", Not popular";
					}
					if(recipeData.cheap){
						recipeInfoString = recipeInfoString + ", Cheap";
					} else{
						recipeInfoString = recipeInfoString + ", Not cheap";
					}
					if(recipeData.dishTypes){
						for(let j = 0; j < recipeData.dishTypes.length; j++){
							recipeInfoString = recipeInfoString + ", " + recipeData.dishTypes[j];
						}
					}
					if(recipeData.diets){
						for(let j = 0; j < recipeData.diets.length; j++){
							recipeInfoString = recipeInfoString + ", " + recipeData.diets[j];
						}
					}
					if(recipeData.cuisines){
						for(let j = 0; j < recipeData.cuisines.length; j++){
							recipeInfoString = recipeInfoString + ", " + recipeData.cuisines[j];
						}
					}
					if(recipeInfoString){
						recipeInfoString = recipeInfoString.slice(1); // Remove starting comma
						recipeInfoString = recipeInfoString.trim();
					}
					recipeReadMoreElem.setAttribute("href", sourceUrl);
					recipeReadMoreElem.setAttribute("title", sourceText);
					recipeSourceElem.setAttribute("href", sourceUrl);
					recipeImageElem.setAttribute("src", recipeImage);
					recipeImageElem.setAttribute("alt", recipeTitle);
					recipeTitleElem.setAttribute("title", recipeTitle);
					recipeReadMoreElem.setAttribute("title", "Read more on " + sourceUrl);
					// >> Set attributes
					//console.log(recipeImage);
					recipeSourceElem.setAttribute("class", "source");
					recipeCarbsElem.setAttribute("class", "recipe-carb-amount");
					recipeInfoElem.setAttribute("class", "recipe-info");
					
					// >> Fill elements
					recipeTitleElem.appendChild(document.createTextNode(recipeTitle));
					recipeReadMoreElem.appendChild(document.createTextNode("Read more"));
					recipeHeaderElem.appendChild(recipeImageElem);
					recipeHeaderElem.appendChild(recipeTitleElem);
					recipeHeaderElem.appendChild(recipeReadMoreElem);
					recipeCarbsElem.appendChild(document.createTextNode(recipeCarbs));
					recipeInfoElem.appendChild(document.createTextNode(recipeInfoString));
					recipeSourceElem.appendChild(document.createTextNode(sourceText));
					recipeFooterElem.appendChild(recipeCarbsElem);
					recipeFooterElem.appendChild(recipeInfoElem);
					recipeFooterElem.appendChild(recipeSourceElem);
					recipeArticleiElem.appendChild(recipeHeaderElem);
					recipeArticleiElem.appendChild(recipeFooterElem);
					recipeLiElem.appendChild(recipeArticleiElem);
					recipeUlElem.appendChild(recipeLiElem);
					
					// >> Populate target
					recipeWrapper.appendChild(recipeUlElem);
				})
				.catch((err) => {
					recipeWrapper.innerHTML = "<p>Could not find any recipes</p>";
					console.log(err);
				});
			}
		} else{
			recipeWrapper.innerHTML = "<p>Could not find any recipes</p>";
		}
	})
	.catch((err) => {
		recipeWrapper.innerHTML = "<p>Could not find any recipes</p>";
		console.log(err);
	});
	return(false);
}


// Run on load
document.addEventListener('DOMContentLoaded', function(){
	recipeSearchRequest();
}, false);


// CSV DATA -----------------------------------------------------------------------------------------------------------------
// MÅL 8.9
var results = Papa.parse("data/SDG03041.csv", { // Load file - https://www.papaparse.com/docs
	download: true, // Fluff that needs to be there
	complete: function(results) { // On complete
		//console.log(results); //OMR20	*/
		//INDHOLD
		minTid = 0;
		maxTid = 0
		kolArr = [];
		cancerArr = [];
		cardiovascularArr = [];
		diabetesArr = [];
		for(var i = 1; i < results.data.length; i++){
			var obj = results.data[i];
			//console.log(obj);
			var aarsag = obj[1];
			var Tid = parseFloat(obj[2]);
			var indhold = parseFloat(obj[3]);
			if(i == 1){
				minTid = Tid;
				maxTid = Tid;
			}
			if(Tid < minTid){
				minTid = Tid;
			}
			if(Tid > maxTid){
				maxTid = Tid;
			}
			switch(aarsag) {
				case "KOL":
					kolArr.push(indhold)
					break;
				case "Kræft":
					cancerArr.push(indhold)
					break;
				case "Hjerte/karsygdomme":
					cardiovascularArr.push(indhold)
					break;
				case "Sukkersyge":
					diabetesArr.push(indhold)
					break;
				default:
					//console.log("fail");
			}
		}
		//Point.setState('hover')
		try{
			Highcharts.chart('container', {

				title: {
					text: ''
				},

				subtitle: {
					text: ''
				},

				credits: {
					enabled: false
				},
				
				yAxis: {
					title: {
						text: 'Mortality per 100.000 danes'
					}
				},

				xAxis: {
					accessibility: {
						rangeDescription: 'Years: ' + minTid + "-" + maxTid
					}, title: {
						text: 'Years: ' + minTid + "-" + maxTid
					}

				},

				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},

				plotOptions: {
					series: {
						label: {
							connectorAllowed: false
						},
						pointStart: minTid
					}
				},
				
				tooltip: {
					shared: true
				},

				series: [{
					name: 'Cancer',
					color: "#DEB841",
					data: cancerArr
				}, {
					name: 'Cardiovascular disease',
					color: "#BFD8E0",
					data: cardiovascularArr
				}, {
					name: 'Chronic obstructive pulmonary disease',
					color: "#CC2936",
					data: kolArr
				}, {
					name: 'Diabetes',
					color: "#568BD7",
					data: diabetesArr
				}],

				responsive: {
					rules: [{
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'center',
								verticalAlign: 'bottom'
							}
						}
					}]
				}

			});
		} catch(e){
			// Silence error
			// Note: An error will be produced when run. This error does not affect performance or visuals. It is not documented, and changeing any values seems to do nothing. So silence it is.
		}

	},
	error: function() { // On error
		console.log("CSV could not load.");
	}
});