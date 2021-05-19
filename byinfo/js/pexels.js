let pexelsRequest = "https://api.pexels.com/v1/search";
pexelsRequest = pexelsRequest + "?query=" + town;
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
	}
)
