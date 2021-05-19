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

// Set section variables -----------
// None

// NEW YORK TIMES  -------------------------------------------------------------------------------------------------------------
//https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20160101&end_date=20220101&q=Odense&sort=newest&api-key=PSSQeujJ0dHAmk63HPmszThFprc5mIcn
//We place the different parts of the REST request on constants so it is easy to read or change
const nyt_url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'; //endpoint
var nyt_params = 'begin_date=20160101&end_date=20220101&sort=newest';
var nyt_topic = '&q=Odense';

var nyt_request = nyt_url + nyt_params + nyt_topic + nyt_key;

//display on the console the full API request to make sure you did everything right
console.log(nyt_request);



// PIXABAY -------------------------------------------------------------------------------------------------------------------
let pixabayRequest = "https://pixabay.com/api/";
pixabayRequest = pixabayRequest + "?q=" + param;
pixabayRequest = pixabayRequest + "&image_type=all"; // Get all image types. Set to photo if results get wierd
pixabayRequest = pixabayRequest + "&safesearch=true"; //  Filter for only images suitable for all ages 
pixabayRequest = pixabayRequest + "&lang=da"; // 	Language code of the language to be searched in. If removed defaults to en
pixabayRequest = pixabayRequest + "&lang=da"; 
pixabayRequest = pixabayRequest + "&page=1"; // Result page  (also is used in relation to per_page)
pixabayRequest = pixabayRequest + "&per_page=5"; // Limit results (also is used in relation to page)
pixabayRequest = pixabayRequest + "&key=" + pixabay_key;
//console.log(pixabayRequest);

let pixabayImages = document.getElementById("pixabay-images")

fetch(pixabayRequest)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		if (document.contains(document.getElementById("pixabayLogo"))) {
			// Remove logo on load - forces the logo to be the last image
			document.getElementById("pixabayLogo").remove();
		}
		pixabayImages.classList.remove("hidden");
		//console.log(data.hits)
		for (var i = 0; i < data.hits.length; i++){
			var obj = data.hits[i];
			var pixImage = document.createElement("img");
			pixImage.setAttribute("src", obj.webformatURL);
			var pixImageAbout = "Af: " + obj.user + " - Tags: " + obj.tags;
			pixImage.setAttribute("alt", pixImageAbout);
			pixImage.setAttribute("title", pixImageAbout);
			pixabayImages.appendChild(pixImage);
		}
		var pixLogoLink = document.createElement("a");
		pixLogoLink.setAttribute("id", "pixabayLogo");
		var pixLogo = document.createElement("img");
		pixLogo.setAttribute("src", "img/pixabay_logo_square.svg");
		pixLogo.setAttribute("alt", "Pixabay logo");
		pixLogoLink.appendChild(pixLogo);
		pixLogoLink.setAttribute("href", "https://pixabay.com/");
		pixLogoLink.setAttribute("target", "_blank");
		pixLogoLink.setAttribute("title", "Gå til Pixabay");
		pixabayImages.appendChild(pixLogoLink);
	})
	.catch((err) => {
	// Do something for an error here
		console.log("Pixabay forespørgslen udløste en fejl.");
		pixabayImages.classList.add("hidden");
	})

// PEXELS ---------------------------------------------------------------------------------------------------
let pexelsRequest = "https://api.pexels.com/v1/search";
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
	})

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

let openBookRequest = "http://openlibrary.org/search.json";
openBookRequest = openBookRequest + "?title=" + param; // Filter for towns
openBookRequest = openBookRequest + "&lan=dan"; // Filter for danish results
//console.log(openBookRequest);
//display on the console the full API request to make sure you did everything right

let bookSection = document.getElementById("books")
let bookList = document.getElementById("book-list")

fetch(openBookRequest)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		bookSection.classList.remove("hidden");
		bookList.classList.remove("hidden");
		//console.log(data.docs)
		for (var i = 0; i < data.docs.length; i++){
			var obj = data.docs[i];
			//console.log(obj)
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(obj.title + ", " + obj.publish_year + ", af " + obj.author_name));
			//li.setAttribute("title", "isbn:" + obj.isbn[0]);
			bookList.appendChild(li);
		}
	})
	.catch((err) => {
		bookSection.classList.add("hidden");
		bookList.classList.add("hidden");
		bookList.innerHTML = "";
		console.log("openlibrary forespørgslen udløste en fejl.")
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
		console.log("CSV kunne ikke indlæses.");
	}
});