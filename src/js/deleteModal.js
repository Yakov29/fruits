import { deleteFruit } from "./fruitsApi";
import { getFruits } from "./fruitsApi";

const deleteForm = document.querySelector(".deleteForm");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.deleteid.value);
  const fruitID = e.target.elements.deleteid.value;
  deleteFruit(fruitID);
  getFruits();
});
