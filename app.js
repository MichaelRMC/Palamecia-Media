const ul = document.querySelector("ul");
const form = document.querySelector("form");

console.log(form);

form.addEventListener("submit", (event) => {
  let boxArt = event.target.imageUrl.value;
  let name = event.target.name.value;
  let genre = event.target.genre.value;
  let platform = event.target.platform.value;
  let price = event.target.price.value;
  let inStock = event.target.inStock.value;
});

function getGameInfo(boxArt, name, genre, platform, price, inStock) {
 const li = document.createElement("li");
 li.innerHTML = boxArt


 switch (form.value) {
	case name:
		const h2 = document.createElement("h2")
		h2.textContent = name		
		break;
	case genre:
		const p = document.createElement("p")
		p.textContent = genre;
		break;
	case platform:
		const p = document.createElement("p")
		p.textContent = platform;
		break;
	case price:
		const p = document.createElement("p")
		p.textContent = price;
		break;
	case inStock:
		let stockButton = document.createElement("button")
		stockButton = inStock
		stockButton.addEventListener("click", (event) => {
			stockButton.classList.toggle ("in-stock")
			stockButton.classList.toggle ("not-in-stock")

			const className = stockButton.className
			if (className == "in-stock") {
				this.textContent = "In Stock"
			} else {
				this.textContent = "Not In Stock"
			}
		})

	default:
		const remove = document.createElement("button")
		remove.textContent = "Remove"
		break;
 }
		

}