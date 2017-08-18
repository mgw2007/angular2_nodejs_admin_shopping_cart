export const BOOTSTRAP_SHOW_LOADER = "BOOTSTRAP_SHOW_LOADER";
export const BOOTSTRAP_HIDE_LOADER = "BOOTSTRAP_HIDE_LOADER";
export const BOOTSTRAP_ADD_FLASH_MESSAGE = "BOOTSTRAP_ADD_FLASH_MESSAGE";
export const BOOTSTRAP_REMOVE_FLASH_MESSAGE = "BOOTSTRAP_REMOVE_FLASH_MESSAGE";
export const BOOTSTRAP_OPEN_CONFIRM_MODAL = "BOOTSTRAP_OPEN_CONFIRM_MODAL";
export const BOOTSTRAP_CLOSE_CONFIRM_MODAL = "BOOTSTRAP_CLOSE_CONFIRM_MODAL";


export default  {
    showLoader: () => ({
        type: BOOTSTRAP_SHOW_LOADER
    }),
    hideLoader: () => ({
        type: BOOTSTRAP_HIDE_LOADER
    }),
    addFlashMessage: message => ({
        type: BOOTSTRAP_ADD_FLASH_MESSAGE,
        payload: message
    }),
    removeFlashMessage: messageKey => ({
        type: BOOTSTRAP_REMOVE_FLASH_MESSAGE,
        payload: messageKey
    }),
    openConfirmModal: (message, onConfirm) => ({
        type: BOOTSTRAP_OPEN_CONFIRM_MODAL,
        payload: {
            message, onConfirm
        }
    }),
    closeConfirmModal: () => ({
        type: BOOTSTRAP_CLOSE_CONFIRM_MODAL
    })
}

