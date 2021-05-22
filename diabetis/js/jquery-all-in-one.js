function extractColumn(arr, column) {
	// https://gist.github.com/eddieajau/5f3e289967de60cf7bf9
	return arr.map(x => x[column])
}

function include(file) {
	//https://www.geeksforgeeks.org/how-to-include-a-javascript-file-in-another-javascript-file/
	var script  = document.createElement('script');
	script.src  = file;
	script.type = 'text/javascript';
	script.defer = true;
	document.getElementsByTagName('head').item(0).appendChild(script);
}


// Define variables -------------
var param = "diabetes";
var param_alt = "low carb";

// Set section variables -----------
// None

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
nytRequest = nytRequest + '&key=' + nyt_key;
//console.log(nytRequest);

// > Elements
let news = document.getElementById("news")


// > Request
//console.log(nytRequest);
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
		//console.log(data[i]);
		/*if(data[i].byline.original && data[i].byline.organization){
			var nytAuthor = "By " + data[i].byline.original + " and " + byline.organization;
		} else if(data[i].byline.original){*/
			var nytAuthor = data[i].byline.original;
		/*} else if(data[i].byline.organization){
			var nytAuthor = "By " + data[i].byline.organization;
		} else{
			var nytAuthor = "Could not find author";
		}*/
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
	//hero.classList.add("hidden");
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
pixabayRequest = pixabayRequest + "&key=" + pixabay_key;
//console.log(pixabayRequest);

// > Elements
let hero = document.getElementById("main-header")

// > Fetch
fetch(pixabayRequest)
.then((response) => {
	return response.json()
})
.then((data) => {
	for (var i = 0; i < data.hits.length; i++){
		var obj = data.hits[i];
		var pixImageWrapper = document.createElement("figure");
		pixImageWrapper.setAttribute("class", "hero-image-wrapper");
		pixImageWrapper.classList.add("fade");
		pixImageWrapper.classList.add("hidden");
		var pixImage = document.createElement("img");
		pixImage.setAttribute("src", obj.webformatURL);
		var pixImageAbout = "By: " + obj.user + " - Tags: " + obj.tags;
		pixImage.setAttribute("alt", pixImageAbout);
		pixImage.setAttribute("title", pixImageAbout);
		pixImageWrapper.appendChild(pixImage)
		var pixLogoLink = document.createElement("a");
		pixLogoLink.setAttribute("id", "pixabayLogo");
		var pixLogo = document.createElement("img");
		pixLogo.setAttribute("class", "hero-image-source");
		pixLogo.setAttribute("src", "img/pixabay_logo_square.svg");
		pixLogo.setAttribute("alt", "Pixabay logo");
		pixLogoLink.appendChild(pixLogo);
		pixLogoLink.setAttribute("href", "https://pixabay.com/");
		pixLogoLink.setAttribute("target", "_blank");
		pixLogoLink.setAttribute("title", "Go to Pixabay");
		pixImageWrapper.appendChild(pixLogoLink);
		hero.appendChild(pixImageWrapper);
	}
	slideIndex = 0;
	heroRotation();
})
.catch((err) => {
// Do something for an error here
	console.log("Pixabay API encountered an error.");
	//hero.classList.add("hidden");
})

// PEXELS ---------------------------------------------------------------------------------------------------
// Currently unused, due to redundancy
/*let pexelsRequest = "https://api.pexels.com/v1/search";
pexelsRequest = pexelsRequest + "?query=" + param;
pexelsRequest = pexelsRequest + "&locale=da-DK"; // 	Language code of the language to be searched in.
pexelsRequest = pexelsRequest + "&page=1"; // Result page  (also is used in relation to per_page)
pexelsRequest = pexelsRequest + "&per_page=5"; // Limit results (also is used in relation to page)
//console.log(pexelsRequest);

let pexelsImages = document.getElementById("pexels-images")

fetch(pexelsRequest,{
headers: {
	Authorization: pexels_key
}})
.then((response) => {
	return response.json()
})
.then((data) => {
	if (document.contains(document.getElementById("pexelsLogo"))) {
		// Remove logo on load - forces the logo to be the last image
		document.getElementById("pexelsLogo").remove();
	}
	pexelsImages.classList.remove("hidden");
	//console.log(data)
	for (var i = 0; i < data.photos.length; i++){
		var obj = data.photos[i];
		var pexImage = document.createElement("img");
		pexImage.setAttribute("src", obj.src.original);
		var pexImageAbout = "Af: " + obj.photographer;
		pexImage.setAttribute("alt", pexImageAbout);
		pexImage.setAttribute("title", pexImageAbout);
		pexelsImages.appendChild(pexImage);
	}
	var pexLogoLink = document.createElement("a");
	pexLogoLink.setAttribute("id", "pexelsLogo");
	var pexLogo = document.createElement("img");
	pexLogo.setAttribute("src", "img/pexels-logo.png");
	pexLogo.setAttribute("alt", "Pexels logo");
	pexLogoLink.appendChild(pexLogo);
	pexLogoLink.setAttribute("href", "https://pexels.com/");
	pexLogoLink.setAttribute("target", "_blank");
	pexLogoLink.setAttribute("title", "Gå til Pexels");
	pexelsImages.appendChild(pexLogoLink);
})
.catch((err) => {
// Do something for an error here
	console.log("Pexels forespørgslen udløste en fejl.");
	pexelsImages.classList.add("hidden");
})*/

// MAPBOX ---------------------------------------------------------------
let mapboxMapWrapper = document.getElementById("mapbox-map-wrapper");
lat=1;
lon=1;
var map = new mapboxgl.Map({
	container: 'mapbox-map', // container id
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [lon, lat], // starting position [lng, lat]
	zoom: 10 // starting zoom
});
let mapboxMap = document.getElementById("mapbox-map");
mapboxMap.setAttribute("title", "Breddegrad: " + lat + ". Længdegrad: " + lon + ".");
	
// OPEN LIBRARY ----------------------------------------------------------
//http://openlibrary.org/search.json?q=Odense&lan=dan

// > Request
let openBookRequest = "http://openlibrary.org/search.json";
let openBookRequest_one = openBookRequest + "?title=" + param; // Filter for diabetes
let openBookRequest_two = openBookRequest + "?title=" + param_alt; // Filter for low carb recipies
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
	//console.log(data.docs)
	for (var i = 0; i < data.docs.length; i++){
		var obj = data.docs[i];
		//console.log(obj)
		var li = document.createElement("li");
		var img = document.createElement("img");
		var text = ""
		var title = obj.title; 
		if(title){
			text = text + title
		}
		var publish_year = obj.publish_year; 
		if(publish_year && title){
			text = text + " - "
		}
		if(publish_year){
			text = text + publish_year
		}
		var author_name = obj.author_name; 
		if(publish_year && author_name){
			text = text + " - "
		}
		if(author_name){
			text = text + " af " + author_name
		}
		var cover = obj.cover_i
		if(cover){
			img.src = "https://covers.openlibrary.org/b/id/" + cover + ".jpg";
			img.title = text;
			var img_wrapper = document.createElement("div");
			img_wrapper.classList = "image-wrapper";
			img_wrapper.appendChild(img);
			li.appendChild(img_wrapper);
		}
		li.appendChild(document.createTextNode(text));
		//li.setAttribute("title", "isbn:" + obj.isbn[0]);
		diabetesBookList.appendChild(li);
	}
})
.catch((err) => {
	diabetesBookList.innerHTML = "";
	console.log("Openlibrary API encountered an error with openBookRequest_one.");
})

// > Fetch 2:  Recipies booklist -----------
fetch(openBookRequest_two).then((response) => {
	return response.json()
})
.then((data) => {
	recipeBookList.classList.remove("hidden");
	//console.log(data.docs)
	for (var i = 0; i < data.docs.length; i++){
		var obj = data.docs[i];
		//console.log(obj)
		var li = document.createElement("li");
		var img = document.createElement("img");
		var text = ""
		var title = obj.title; 
		if(title){
			text = text + title
		}
		var publish_year = obj.publish_year; 
		if(publish_year && title){
			text = text + " - "
		}
		if(publish_year){
			text = text + publish_year
		}
		var author_name = obj.author_name; 
		if(publish_year && author_name){
			text = text + " - "
		}
		if(author_name){
			text = text + " af " + author_name
		}
		var cover = obj.cover_i
		if(cover){
			img.src = "https://covers.openlibrary.org/b/id/" + cover + ".jpg";
			img.title = text;
			var img_wrapper = document.createElement("div");
			img_wrapper.classList = "image-wrapper";
			img_wrapper.appendChild(img);
			li.appendChild(img_wrapper);
		}
		li.appendChild(document.createTextNode(text));
		//li.setAttribute("title", "isbn:" + obj.isbn[0]);
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
//include("js/omdbapi.js");

// CSV DATA
// MÅL 8.9
var results = Papa.parse("data/goal891.csv", { // Load file
	download: true, // Fluff that needs to be there
	complete: function(results) { // On complete
		/*OMR20 = Object.values(extractColumn(results.data, 0));
		OMR20.shift();
		OMR20.pop();
		console.log(OMR20); //OMR20	*/
		TID = Object.values(extractColumn(results.data, 1));
		TID.shift();
		TID.pop();
		//console.log(TID); //TID
		
		INDHOLD = Object.values(extractColumn(results.data, 2));
		INDHOLD.shift();
		INDHOLD.pop();
		for (i = 0; i < INDHOLD.length; i++) {
			INDHOLD[i] = parseFloat(INDHOLD[i]);
		}
		//console.log(INDHOLD); //INDHOLD
		
		
		Highcharts.chart('container', {

			title: {
				text: 'Værditilvækst i turistindustrien i forhold til det samlede BNP og vækstraten heri'
			},

			subtitle: {
				text: 'År'
			},

			yAxis: {
				title: {
					text: 'OMR20'
				}
			},

			xAxis: {
				accessibility: {
					rangeDescription: 'Årerække: 2014 til 2016'
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
					pointStart: 2014
				}
			},

			series: [{
				name: 'Indhold',
				data: INDHOLD
			}],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
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
	},
	error: function() { // On error
		console.log("CSV could not load.");
	}
});