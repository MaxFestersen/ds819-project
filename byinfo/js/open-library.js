//http://openlibrary.org/search.json?q=Odense&lan=dan

let openBookRequest = "http://openlibrary.org/search.json";
openBookRequest = openBookRequest + "?title=" + town; // Filter for towns
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
	}
)
