window.addEventListener('scroll', function(){
	let element = document.querySelector('#skillsarea');
	let position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		console.log('Element is fully visible in screen');
	}

	// checking for partial visibility
	if(position.top <= window.innerHeight && position.bottom > 80) {
		let skilldivs = document.getElementsByClassName("skill");
        for(let skilldiv of skilldivs){
            skilldiv.className += " displayig highlighting";
            
        }

	}
});