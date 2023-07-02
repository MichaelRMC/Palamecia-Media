const form = document.querySelector("form");
const worldCard = document.querySelector("worldCard");
const worldDetails = document.querySelector("worldDetails");
const galaxyMap = document.querySelector("#galaxyMap");


form.addEventListener("submit", (event) => {
  let boxArt = event.target.imageUrl.value;
  let name = event.target.name.value;
  let genre = event.target.genre.value;
  let platform = event.target.platform.value;
  let price = event.target.price.value;
  let inStock = event.target.inStock.value;

  createGalaxyMap( boxArt, name, genre, platform, price, inStock)

  form.reset()
});

function getWorldInfo(boxArt, name, genre, platform, price, inStock) {
  if(boxArt) {
		const img = document.createElement("img");
		img.setAttribute(src, boxArt);
	  worldCard.append(img);
	}	
 
	if(name) {
	  const h4 = document.createElement("h4")
	  h4.innerHTML = name;
	  worldDetails.append(h4);
	}
	if(genre) {
	  const p = document.createElement("p")
	   p.innerHTML = genre;
	  worldDetails.append(p)
	}
	if(platform){
	  const p = document.createElement("p")
	  p.innerHTML = platform;
	  worldDetails.append(p)
	}
	if (price) {
	  const p = document.createElement("p")
	  p.innerHTML = price;
	  worldDetails.append(p)
	}
	if(inStock) {
	  let stockButton = document.createElement("button")
	  stockButton = inStock
	  stockButton.addEventListener("click", (event) => {
		  stockButton.classList.toggle ("in-stock")
		  stockButton.classList.toggle ("not-in-stock")

		  const className = stockButton.className
		  if (className == "in-stock") {
		      this.innerHTML = "In Stock"
			} else {
			  this.innerHTML = "Not In Stock"
			}
		})

	  worldDetails.append(stockButton)
	}

	const remove = document.createElement("button")
	remove.innerHTML = "Remove"
	galaxyMap.append(remove)

	remove.addEventListener("click", (event) => {
	    worldCard.remove()
		return galaxyMap
		})
 }

function createGalaxyMap(boxArt, name, genre, platform, price, inStock) {
	const worldCard = getWorldInfo(boxArt, name, genre, platform, price, inStock)
	galaxyMap.prepend(li)
}