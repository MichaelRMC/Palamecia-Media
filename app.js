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

function getWorldInfo(boxArt, name, genre, platform, price, inStock) {
  if(boxArt) {
		const div = document.createElement("div");
		div.className = "boxArt";
		li append(div, boxArt);
	}	
 
	if(name) {
	  const h2 = document.createElement("h2")
	  h2.textContent = name		
	  li.append(h2)
	}
	if(genre) {
	  const p = document.createElement("p")
	   p.textContent = genre;
	  li.append(p)
	}
	if(platform){
	  const p = document.createElement("p")
	  p.textContent = platform;
	  li.append(p)
	}
	if (price) {
	  const p = document.createElement("p")
	  p.textContent = price;
	  li.append(p)
	}
	if(inStock) {
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
	  li.append(stockButton)
	}

	const remove = document.createElement("button")
	remove.textContent = "Remove"
	li.append(remove)

	remove.addEventListener("click", (event) => {
	    li.remove()
		})
 }

function createGalaxyMap(boxArt, name, genre, platform, price, inStock) {
	const li = getWorldInfo(boxArt, name, genre, platform, price, inStock)
	ul.prepend(li)
}