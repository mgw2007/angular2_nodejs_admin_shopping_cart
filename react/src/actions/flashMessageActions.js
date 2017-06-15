export const ADD_FLASH_MESSAGE = "ADD_FLASH_MESSAGE";
export const REMOVE_FLASH_MESSAGE = "REMOVE_FLASH_MESSAGE";

export const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  payload: message
});
export const removeFlashMessage = messageKey => ({
  type: REMOVE_FLASH_MESSAGE,
  payload: messageKey
});
