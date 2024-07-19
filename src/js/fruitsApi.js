import axios from "axios";
const api_key = "669a39809ba098ed61fed14b";
axios.defaults.baseURL = `https://${api_key}.mockapi.io/fruits/fruits`;

export const getFruits = async () => {
  try {
    const axiosResponse = await axios.get("");
    const data = axiosResponse.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addFruit = async (fruit) => {
  try {
    const addAxios = await axios.post("", fruit);
    const dataResponse = addAxios.data;
    return dataResponse;
  } catch (error) {
    throw new Error();
  }
};

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
    const deleteProduct = await axios.delete(`/${fruitID}`);
    const response = deleteProduct.data;
    return response;
  } catch (error) {
    throw new Error();
  }
};
