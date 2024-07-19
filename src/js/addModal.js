import { addFruit } from "./fruitsApi";
import { getFruits } from "./fruitsApi";
const form = document.querySelector(".form");
const name = document.querySelector(".name");
const price = document.querySelector(".price");
const photo = document.querySelector(".photo");
const buttonAdd = document.querySelector(".submit");
const buttonChange = document.querySelector(".change");
const buttonDelete = document.querySelector(".delete");
const closeAddModal = document.querySelector(".closeAddModal");
const addfruitModal = document.querySelector("addfruitModal");
const addButton = document.querySelector(".addButton");
const addModal = document.querySelector(".addfruitModal");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.target.elements.name.value)
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
