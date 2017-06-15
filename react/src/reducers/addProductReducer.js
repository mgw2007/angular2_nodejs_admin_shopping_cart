import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import {
  UPLOAD_PRODUCT_IMAGE,
  TOUCH_PRODUCT_IMAGE,
  ADD_PRODUCT,
  ADD_PRODUCT_INIT_STATE,
  GET_PRODUCT_DATA_FOR_UPDATE,
  UPDATE_PRODUCT
} from "../actions/productActions";
import API from "../actions/apiRequests";
const initialState = {
  productSaved: false,
  productImage: null,
  productImageTouched: false,
  productUploadedImage: null,
  isOldProduct: false,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_INIT_STATE:
      state = Object.assign({}, state, initialState);
      break;
    case TOUCH_PRODUCT_IMAGE:
      state = Object.assign({}, state, {
        productImageTouched: true
      });
      break;
    case UPLOAD_PRODUCT_IMAGE:
      state = Object.assign({}, state, {
        productImageTouched: true,
        productImage: action.payload.file,
        productUploadedImage: action.payload.uploadedImage
      });
      break;
    case `${ADD_PRODUCT}_${FULFILLED}`:
      state = Object.assign({}, state, {
        productSaved: true
      });
      break;
    case `${UPDATE_PRODUCT}_${FULFILLED}`:
      state = {
        ...state,
        productSaved: true
      };
      break;
    case `${GET_PRODUCT_DATA_FOR_UPDATE}_${FULFILLED}`:
      state = {
        ...state,
        isOldProduct: true,
        productImage: action.payload.data.imagePath,
        productUploadedImage: `${API.getProductImageUrl()}${action.payload.data
          .imagePath}`,
        data: {
          ...state.data,
          ...action.payload.data
        }
      };
      break;
  }
  return state;
};
