const e=e=>e.map(e=>`
    <li>
      <h2 class="name">${e.name}</h2>
      <span class="price">${e.price}</span>
      <img src="${e.photo}" alt="image">
    </li>`).join(""),t=document.querySelector(".list"),o=()=>fetch("http://localhost:1234/fruits").then(e=>e.json()).then(o=>{console.log(o),t.insertAdjacentHTML("beforeend",e(o))});document.querySelector(".form"),document.querySelector(".name"),document.querySelector(".price"),document.querySelector(".photo");const n=document.querySelector(".submit"),r=(e,t,o)=>fetch("http://localhost:1234/fruits",{method:"POST",body:json.stringify({name:e,price:t,photo:o})});n.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.fruitname,n=e.target.elements.fruitprice,c=e.target.elements.fruitphoto;console.log(t),r(t,n,c),o()}),o();
//# sourceMappingURL=index.bc290483.js.map
