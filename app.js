const ul = document.querySelector("ul");
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
	event.preventDefault();
	let boxArt = event.target.imageUrl.value;
	let name = event.target.name.value;
	let genre = event.target.genre.value;
	let platform = event.target.platform.value;
	let price = event.target.price.value;
	let inStock = event.target.inStock.value;

	console.log(boxArt);
	console.log(name);
	console.log(genre);
	console.log(platform);
	console.log(price);
	console.log(inStock);
});