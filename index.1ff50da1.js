const e=e=>e.map(e=>`
    <li>
      <h2 class="name">${e.name}</h2>
      <span class="price">${e.price}</span>
      <img src="${e.photo}" alt="image">
    </li>`).join(""),t=document.querySelector(".list"),o=()=>fetch("http://localhost:1234/fruits").then(e=>e.json()).then(o=>{console.log(o),t.insertAdjacentHTML("beforeend",e(o))}).catch(e=>{console.error(e)});document.querySelector(".form"),document.querySelector(".name"),document.querySelector(".price"),document.querySelector(".photo");const r=document.querySelector(".submit"),n=(e,t,o)=>fetch("http://localhost:1234/fruits",{method:"POST",body:json.stringify({name:e,price:t,photo:o})});r.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.fruitname,r=e.target.elements.fruitprice,c=e.target.elements.fruitphoto;console.log(t),n(t,r,c),o()}),o();
//# sourceMappingURL=index.1ff50da1.js.map
