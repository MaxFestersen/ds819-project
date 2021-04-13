
let request = "https://pixabay.com/api/";
request = request + "?q=" + town;
request = request + "&image_type=all"; // Get all image types. Set to photo if results get wierd
request = request + "&safesearch=true"; //  Filter for only images suitable for all ages 
request = request + "&lang=da"; // 	Language code of the language to be searched in. If removed defaults to en
request = request + "&lang=da"; 
request = request + "&page=1"; // Result page  (also is used in relation to per_page)
request = request + "&per_page=5"; // Limit results (also is used in relation to page)
request = request + "&key=" + pixabay_key;
//console.log(request);
//display on the console the full API request to make sure you did everything right
let pixabayImages = document.getElementById("pixabay-images")
console.log(request)

fetch(request)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
	// Work with JSON data here
		pixabayImages.classList.remove("hidden");
		console.log(data.hits)
		for (var i = 0; i < data.hits.length; i++){
			//console.log(data.hits[i])
			var obj = data.hits[i];
			var pixImage = document.createElement("img");
			pixImage.setAttribute("src", obj.webformatURL);
			pixImage.setAttribute("alt", obj.tags);
			pixImage.setAttribute("title", obj.tags);
			pixabayImages.appendChild(pixImage);
		}
		var pixLogoLink = document.createElement("a");
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
