import { changeFruit, getFruits } from "./fruitsApi";
import { createElements } from "./createMarkup";

const list = document.querySelector(".list");
const changeForm = document.querySelector(".change__form");


// const data = await getFruits()
const renderPage = async () => {
    const dataFruits = await getFruits();
    const listFruits = createElements(dataFruits);
    list.insertAdjacentHTML("beforeend", listFruits);
    const addButton = document.querySelector(".addButton")
    const changeButton = document.querySelector(".change__button");
    const openButton = document.querySelector(".openDeleteModal")
    const addModal = document.querySelector(".addfruitModal")
    const changeBox = document.querySelector(".change");
    const deletefruitModal = document.querySelector(".deleteFruitModal");
    console.log(changeButton);
    if (changeButton !== null && changeButton !== undefined) {
      console.log("test");
      list.addEventListener("click", (e) => {
        if (e.target.classList.contains("change__button")) {
          changeBox.classList.toggle("change__invisible");
        }
      });
    }
    if (openButton !== null && openButton !== undefined) {
      console.log("tedelest");
      list.addEventListener("click", (e) => {
        if (e.target.classList.contains("openDeleteModal")) {
          deletefruitModal.classList.toggle("change__invisible");
        }
      });
    }
}




renderPage()




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
  // const options = {
  //   method: "PATCH",
  //   body: JSON.stringify(fruit),
  // };
  changeFruit(fruit, changeID).then((data) => {
    renderPage(data)
  }).catch((error) => {
    console.log(error)
  })
});