import axios from "axios";
const api_key = "669a39809ba098ed61fed14b"
axios.defaults.baseURL = `https://${api_key}.mockapi.io/fruits/fruits`;


// export const getFruits = () => {
//   return fetch("http://localhost:3000/fruits")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createElements(data));
//       const changeButton = document.querySelector(".change__button");
//       const changeBox = document.querySelector(".change");
//       console.log(changeButton);
//       if (changeButton !== null && changeButton !== undefined) {
//         console.log("test");
//         list.addEventListener("click", (e) => {
//           if (e.target.classList.contains(change__button)) {
//             changeBox.classList.toggle("change__invisible");
//           }
//         });
//       }
//     });
// };

export const getFruits = async () => {
  try {
    const axiosResponse = await axios.get("");
    const data = axiosResponse.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// export const addFruit = (fruitname, fruitprice, fruitphoto) => {
//   const fruit = {
//     name: fruitname,
//     price: fruitprice,
//     photo: fruitphoto,
//   };
//   const options = {
//     method: "POST",
//     body: JSON.stringify(fruit),
//   };
//   return fetch("http://localhost:3000/fruits", options);
// };



export const addFruit = async (fruit) => {
  try {
    const addAxios = await axios.post("", fruit);
    const dataResponse = addAxios.data;
    return dataResponse;
  } catch (error) {
    throw new Error()
  }
}



export const changeFruit = async (fruit, changeID) => {
  
  try {
    const updateProduct = await axios.put(`/${changeID}`, fruit);
    const response = updateProduct.data;
    return response;
  } catch (error) {
    throw new Error();
  }
};


export const deleteFruit = async (fruitID) => {
  try {
    const deleteProduct = await axios.delete(`/${fruitID}`)
    const response = deleteProduct.data;
    return response;
  } catch (error) {
    throw new Error()
  }
}