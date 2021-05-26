// Scroll to id of event href (use onclick from a a element)
// From previous project by me
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

// Initiate or advance hero slideshow
function heroRotation() {
	var i;
	var slides = document.getElementsByClassName("hero-image-wrapper");
	//console.log(slides);
	if (slideIndex > slides.length-1) {
		slideIndex = 0;
	}
	for (i = 0; i < slides.length; i++) {
		if(i == slideIndex){
			slides[i].classList.remove("hidden");
		} else{
			slides[i].classList.add("hidden");
		}
	}
	slideIndex = slideIndex + 1;
	setTimeout(heroRotation, 12000); // Change image every 12 seconds
}
