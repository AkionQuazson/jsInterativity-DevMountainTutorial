let dom = {
	add: null,
	inputField: null,
	movieList: null,
	form: null,
	message: null
}

const init = () => {
	dom.add = document.querySelector('button');
	dom.inputField = document.querySelector('input');
	dom.movieList = document.querySelector('ul');
	dom.form = document.querySelector('form');
	dom.message = document.getElementById('message');
	dom.add.addEventListener('click', (e) => {
		e.preventDefault();
		addMovie(e);
	});
	dom.form.addEventListener('submit', (e) => {
		e.preventDefault();
		addMovie(e);
	});
}

const addMovie = (event) => {
console.log(dom)
	let movie = document.createElement('li');
	let movieTitle = document.createElement('span');
	movieTitle.textContent = dom.inputField.value;
	movieTitle.addEventListener('click', (e) => crossOffMovie(e));
	let deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'X';
	deleteBtn.addEventListener('click', (e) => deleteMovie(e))

	movie.appendChild(movieTitle);
	movie.appendChild(deleteBtn);
	dom.movieList.appendChild(movie);
	revealMessage('Movie added');
}

const deleteMovie = (event) => {
	event.target.parentNode.remove();
	revealMessage('Movie deleted');
}

const crossOffMovie = (event) => {
	event.target.classList.toggle('checked');
	revealMessage((event.target.classList.contains('checked')) 
		? 'Movie watched'
		: 'Movie unwatched');
}

const revealMessage = (message) => {
	dom.message.textContent = message;
	dom.message.classList.remove('hide');
	setTimeout(() => {
		dom.message.classList.add('hide');
	}, 5000)
}