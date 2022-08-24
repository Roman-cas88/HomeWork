import car from "/.import.js"

function funcInfo() {
  return `
    <ul>
    <li>Company: ${car.company};</li>
    <li>Model: ${car.model};</li>
    <li>Year: ${car.year};</li>
    <li>Color: ${car.color};</li>
    <li>Engine: ${car.engine};</li>
    <li>Prices range from ${car.price}</li>
  </ul>
  `
}

const view = document.createElement("view");
view.innerHTML = funcInfo();
document.body.appendChild(view);

