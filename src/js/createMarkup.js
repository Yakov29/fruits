export const createElements = (data) => {
  console.log(data)
  return data
    .map((element) => {
      return `
    <li class="list__item">
      <h2 class="name">${element.name}</h2>
      <span class="price">${element.price}</span>
      <span class="id">${element.id}</span>
      <img src="${element.photo}" alt="image">
      <button type="button" class="openDeleteModal">Видалити</button>
      <button class="change__button" type="button">Редагувати</button>
    </li>`;
    })
    .join("");
};
