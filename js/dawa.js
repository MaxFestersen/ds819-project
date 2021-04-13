//https://api.dataforsyningen.dk/steder?hovedtype=Bebyggelse&undertype=by&primærtnavn=Odense
let dawaRequest = "https://api.dataforsyningen.dk/steder";
dawaRequest = dawaRequest + "?hovedtype=Bebyggelse&undertype=by"; // Filter for towns
dawaRequest = dawaRequest + "&primærtnavn=" + town; // Filter for specific town
console.log(dawaRequest);

fetch(dawaRequest)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		var lon = data[0].visueltcenter[0];
		console.log(town + " has longitude: " + lon + ".");
		var lat = data[0].visueltcenter[1];
		console.log(town + " has latitude: " + lat + ".");
		var reseidents = data[0].egenskaber.indbyggerantal;
		console.log(town + " has: " + reseidents + " residents.");
		var commune = data[0].kommuner[0].navn;
		console.log(town + " is part of: " + commune + "-komune.");
	})
	.catch((err) => {
	// Do something for an error here
		console.log("Dawa forespørgslen udløste en fejl.");
		pixabayImages.classList.add("hidden");
	})