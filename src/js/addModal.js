import { addFruit } from "./fruitsApi";
import { getFruits } from "./fruitsApi";
const form = document.querySelector(".form");
const addButton = document.querySelector(".addButton");
const addModal = document.querySelector(".addfruitModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruitID = e.target.elements.fruitID.value;
  const fruitname = e.target.elements.fruitname.value;
  const fruitprice = e.target.elements.fruitprice.value;
  const fruitphoto = e.target.elements.fruitphoto.value;

  const fruit = {
    id: fruitID,
    name: fruitname,
    price: fruitprice,
    photo: fruitphoto,
  };
  addFruit(fruit);
  getFruits();
});

addButton.addEventListener("click", (e) => {
  addModal.classList.toggle("change__invisible");
});
