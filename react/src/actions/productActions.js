import API from "./apiRequests";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const UPLOAD_PRODUCT_IMAGE = "UPLOAD_PRODUCT_IMAGE";
export const TOUCH_PRODUCT_IMAGE = "TOUCH_PRODUCT_IMAGE";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_INIT_STATE = "ADD_PRODUCT_INIT_STATE";
export const GET_PRODUCT_DATA_FOR_UPDATE = "GET_PRODUCT_DATA_FOR_UPDATE";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: API.getProducts()
});
export const getProductDataForUpdate = id => ({
    type: GET_PRODUCT_DATA_FOR_UPDATE,
    payload: API.getProduct(id)
});

export const touchProductImage = () => ({
    type: TOUCH_PRODUCT_IMAGE
});
export const addProductInitialState = () => ({
    type: ADD_PRODUCT_INIT_STATE
});
export const uploadProductImage = file => dispach => {
    let reader = new FileReader();
    reader.onload = e => {
        let uploadedImage = e.target.result;
        dispach({
            type: UPLOAD_PRODUCT_IMAGE,
            payload: {
                file,
                uploadedImage
            }
        });
    };
    reader.readAsDataURL(file);
};

export const addProduct = (data, uploadedImage) => dispach => {
    let formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key]);
    }
    formData.append("upload", uploadedImage, uploadedImage.name);
    dispach({type: ADD_PRODUCT, payload: API.addProduct(formData)});
};
export const updateProduct = (id, data, uploadedImage = null) => dispach => {
    let formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key]);
    }
    if (uploadedImage) {
        formData.append("upload", uploadedImage, uploadedImage.name);
    }
    dispach({type: UPDATE_PRODUCT, payload: API.updateProduct(id, formData)});
};
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: API.deleteProduct(id)
})
