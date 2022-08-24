import car from "./export.js";

const mark = (car) => {
  return `
  <div>
    <h2>${car.company} ${car.model}</h2>
    <img width=${car.widthImg}; src=${car.img}>
    <ul>
  <li>Company: ${car.company};</li>
  <li>Model: ${car.model};</li>
  <li>Year: ${car.year};</li>
  <li>Color: ${car.color};</li>
  <li>Engine: ${car.engine};</li>
  <li>Prices range from ${car.price}</li>
</ul>

  </div>
  `;
}

const view = document.createElement("view");
view.innerHTML = mark(car);
document.body.appendChild(view);