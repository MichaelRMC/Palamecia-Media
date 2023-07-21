const form = document.querySelector("form");
const submit = document.querySelector("submit");
const galaxyMap = document.querySelector("#galaxyMap");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let boxArt = event.target.imageUrl.value
  let title = event.target.title.value;
  let genre = event.target.genre.value;
  let platform = event.target.platform.value;
  let price = event.target.price.value;
  let inStock = event.target.inStock.value;

  createGalaxyMap(boxArt, title, genre, platform, price, inStock);

  form.reset();
});

function getWorldInfo(boxArt, title, genre, platform, price, inStock) {
  cont section = document.createElement("section")
  section.classList.add("worldCard")

  if (boxArt) {
    const img = document.createElement("img");
    img.setAttribute("src", boxArt);
    section.append(img);
  }

  if (title) {
    const h4 = document.createElement("h2");
    h4.innerHTML = title;
    section.append(h4);
  }
  if (genre) {
    const p = document.createElement("p");
    p.innerHTML = genre;
    section.append(p);
  }
  if (platform) {
    const p = document.createElement("p");
    p.innerHTML = platform;
    section.append(p);
  }
  if (price) {
    const p = document.createElement("p");
    p.innerHTML = price;
    section.append(p);
  }
  if (inStock) {
    let stockButton = document.createElement("button");
    stockButton = inStock;
    stockButton.addEventListener("click", (event) => {
      stockButton.classList.toggle("in-stock");
      stockButton.classList.toggle("not-in-stock");

      const className = stockButton.classList;
      if (className == "in-stock") {
        this.innerHTML = "In Stock";
      } else {
        this.innerHTML = "Not In Stock";
      }
    });

    section.append(stockButton);
  }

  const remove = document.createElement("button");
  remove.innerHTML = "Remove";
  section.append(remove);

  remove.addEventListener("click", (event) => {
    section.remove();
    return galaxyMap;
  });
}

function createGalaxyMap(boxArt, title, genre, platform, price, inStock) {
  const world = getWorldInfo(boxArt, title, genre, platform, price, inStock);

  galaxyMap.prepend(world);
}