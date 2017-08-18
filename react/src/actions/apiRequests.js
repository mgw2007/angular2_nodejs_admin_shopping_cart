import axios from "axios";
import {localApiUrl, localSiteUrl} from "../config";

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
    },
    deleteProduct: (id) => {
        return axios.delete(`${localApiUrl}/products/${id}`, requestHeaders)
    },
    getAdmins: () => {
        return axios.get(`${localApiUrl}/admins/`, requestHeaders);
    },
    getAdmin: id => {
        return axios.get(`${localApiUrl}/admins/${id}`, requestHeaders);
    },
    addAdmin: product => {
        return axios.post(`${localApiUrl}/admins/`, product, requestHeaders);
    },
    updateAdmin: (id, product) => {
        console.log(product)
        return axios.put(`${localApiUrl}/admins/${id}`, product, requestHeaders);
    },
    deleteAdmin: (id) => {
        return axios.delete(`${localApiUrl}/admins/${id}`, requestHeaders)
    }


};
