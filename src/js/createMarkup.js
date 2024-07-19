export const createElements = (data) => {
  return data
    .map((element) => {
      return `
    <li class="list__item">
      <h2 class="name">${element.name}</h2>
      <div class="description__box"><span class="item__description">Ціна: ${element.price}</span>
      <span class="item__description">ID: ${element.id}</span></div>
      <img class="item__image" src="${element.photo}" alt="image">
     <div class="button__box"><button type="button" class="item__button openDeleteModal">Видалити</button>
      <button class="item__button change__button" type="button">Редагувати</button></div>
    </li>`;
    })
    .join("");
};
