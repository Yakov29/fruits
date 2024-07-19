import { changeFruit, getFruits } from "./fruitsApi";

const changeForm = document.querySelector(".change__form");
const closeModalButton = document.querySelector(".change__close");
const changeBox = document.querySelector(".change");

closeModalButton.addEventListener("click", () => {
  changeBox.classList.toggle("change__invisible");
});
