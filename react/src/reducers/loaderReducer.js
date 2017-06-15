import { SHOW_LOADER, HIDE_LOADER } from "../actions/loaderActions";

const initialState = {
  showLoader: false
};

export default (state = initialState, action) => {
  let oldMesages = state.messages;
  switch (action.type) {
    case SHOW_LOADER:
      state = {
        ...state,
        showLoader: true
      };
      break;
    case HIDE_LOADER:
      state = {
        ...state,
        showLoader: false
      };
      break;
  }
  return state;
};
