import { changeFruit, getFruits } from "./fruitsApi";
import { createElements } from "./createMarkup";

const list = document.querySelector(".list");
const changeForm = document.querySelector(".change__form");

const renderPage = async () => {
  const dataFruits = await getFruits();
  const listFruits = createElements(dataFruits);
  list.insertAdjacentHTML("beforeend", listFruits);
  const changeButton = document.querySelector(".change__button");
  const openButton = document.querySelector(".openDeleteModal");
  const changeBox = document.querySelector(".change");
  const deletefruitModal = document.querySelector(".deleteFruitModal");
  if (changeButton !== null && changeButton !== undefined) {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("change__button")) {
        changeBox.classList.toggle("change__invisible");
      }
    });
  }
  if (openButton !== null && openButton !== undefined) {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("openDeleteModal")) {
        deletefruitModal.classList.toggle("change__invisible");
      }
    });
  }
};

renderPage();

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.changeid.value);
  const changeID = e.target.elements.changeid.value;
  const changeName = e.target.elements.changename.value;
  const changePrice = e.target.elements.changeprice.value;
  const changePhoto = e.target.elements.changephoto.value;

  const fruit = {
    id: changeID,
    name: changeName,
    price: changePrice,
    photo: changePhoto,
  };

  changeFruit(fruit, changeID)
    .then((data) => {
      renderPage(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
