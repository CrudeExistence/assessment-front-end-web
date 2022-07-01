console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form has been submitted successfully')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const imgObj = document.querySelector('img')

const imgHover = (event) => {
	event.preventDefault()
	alert('Secret Unlocked: You\'re kinda cute')
}

imgObj.addEventListener('mouseover', imgHover)
