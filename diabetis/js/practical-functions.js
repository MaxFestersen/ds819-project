function include(file) {
	//https://www.geeksforgeeks.org/how-to-include-a-javascript-file-in-another-javascript-file/
	var script  = document.createElement('script');
	script.src  = file;
	script.type = 'text/javascript';
	script.defer = true;
	document.getElementsByTagName('head').item(0).appendChild(script);
}

function scrollTo(){
	// Logic
	event.preventDefault(); // Stop default scroll logic
	
	// Vars
	var id = event.target.href.split("#")[1]; // ID target of href
	var target = document.getElementById(id);

	// Update URL
	window.history.pushState(window.location.href, document.title, "#"+id);

	// Scroll smoothly to section
	target.scrollIntoView({ behavior: 'smooth' });
}
