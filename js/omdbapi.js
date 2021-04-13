let request = "http://www.omdbapi.com/?s=turist&apikey=";
request = request + omdbapi_key;
//console.log(request);
//display on the console the full API request to make sure you did everything right
let target = document.getElementById("movie_list")

fetch(request)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
	// Work with JSON data here
		//console.log(data.Search)
		for (var i = 0; i < data.Search.length; i++){
			console.log(data.Search[i])
			var obj = data.Search[i];
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(obj.Title));
			target.appendChild(li);
		}

	})
	.catch((err) => {
	// Do something for an error here
		target.innerHTML = "Fuck. Noget gik galt";
	})
