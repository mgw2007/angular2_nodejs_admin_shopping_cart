import {
  ADD_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE
} from "../actions/flashMessageActions";

const initialState = [];

export default (state = initialState, action) => {
  let oldMesages = state.messages;
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      state = [
        ...state,
        {
          type: action.payload.type,
          message: action.payload.message
        }
      ];
      break;
    case REMOVE_FLASH_MESSAGE:
      let index = action.payload;
      state = [...state.slice(0, index), ...state.slice(index + 1)];
      break;
  }
  return state;
};
