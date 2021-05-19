let pixabayRequest = "https://pixabay.com/api/";
pixabayRequest = pixabayRequest + "?q=" + town;
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
	}
)
