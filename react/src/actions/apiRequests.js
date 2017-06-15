import axios from "axios";
import { localApiUrl, localSiteUrl } from "../config";

const requestHeaders = {
  responseType: "json",
  headers: {
    Authorization: localStorage.getItem("token")
  }
};
export default {
  getProductImageUrl: () => {
    return localSiteUrl + "images/showProduct?i=";
  },
  getProducts: () => {
    return axios.get(`${localApiUrl}/products/`, requestHeaders);
  },
  getProduct: id => {
    return axios.get(`${localApiUrl}/products/${id}`, requestHeaders);
  },
  addProduct: product => {
    return axios.post(`${localApiUrl}/products/`, product, requestHeaders);
  },
  updateProduct: (id, product) => {
    console.log(product)
    return axios.put(`${localApiUrl}/products/${id}`, product, requestHeaders);
  }
};
