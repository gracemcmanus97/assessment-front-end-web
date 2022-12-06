console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector(`img`)
image.addEventListener(`mouseover`, alertMouse)