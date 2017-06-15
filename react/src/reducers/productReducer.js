import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { GET_PRODUCTS } from "../actions/productActions";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PRODUCTS}_${FULFILLED}`:
      state = Object.assign({}, state, {
        products: action.payload.data
      });
      break;
  }
  return state;
};
