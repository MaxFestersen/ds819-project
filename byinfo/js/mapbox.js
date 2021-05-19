let mapboxMapWrapper = document.getElementById("mapbox-map-wrapper");
if(townValid){
	mapboxMapWrapper.classList.remove("hidden");
	var map = new mapboxgl.Map({
		container: 'mapbox-map', // container id
		style: 'mapbox://styles/mapbox/streets-v11', // style URL
		center: [lon, lat], // starting position [lng, lat]
		zoom: 10 // starting zoom
	});
	let mapboxMap = document.getElementById("mapbox-map");
	mapboxMap.setAttribute("title", "Breddegrad: " + lat + ". Længdegrad: " + lon + ".");
} else{
	mapboxMapWrapper.classList.add("hidden");
}
