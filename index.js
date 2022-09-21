let dom = {
	add: null,
	inputField: null
}

const init = () => {
	dom.add = document.querySelector('button');
	dom.inputField = document.querySelector('input');
	console.log(dom);
	dom.add.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('clicked');
	})
}