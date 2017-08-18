import {
    BOOTSTRAP_SHOW_LOADER,
    BOOTSTRAP_HIDE_LOADER,
    BOOTSTRAP_ADD_FLASH_MESSAGE,
    BOOTSTRAP_REMOVE_FLASH_MESSAGE,
    BOOTSTRAP_OPEN_CONFIRM_MODAL,
    BOOTSTRAP_CLOSE_CONFIRM_MODAL,
} from "../actions/bootstrapActions";

const initialState = {
    showLoader: false,
    flashMessages: [],
    confirmModal: {
        open: false,
        message: '',
        onConfirm: () => {
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BOOTSTRAP_SHOW_LOADER:
            state = {
                ...state,
                showLoader: true
            };
            break;
        case BOOTSTRAP_HIDE_LOADER:
            state = {
                ...state,
                showLoader: false
            };
            break;
        case BOOTSTRAP_ADD_FLASH_MESSAGE:
            state = {
                ...state,
                flashMessages: [
                    ...state.flashMessages,
                    {
                        type: action.payload.type,
                        message: action.payload.message
                    }
                ]
            };
            break;
        case BOOTSTRAP_REMOVE_FLASH_MESSAGE:
            let index = action.payload;
            state = {
                ...state,
                flashMessages: [
                    ...state.flashMessages.slice(0, index), ...state.flashMessages.slice(index + 1)
                ]
            };
            break;
        case BOOTSTRAP_OPEN_CONFIRM_MODAL :
            state = {
                ...state,
                confirmModal: {
                    open: true,
                    message: action.payload.message,
                    onConfirm: action.payload.onConfirm
                }
            }
            break;
        case BOOTSTRAP_CLOSE_CONFIRM_MODAL:
            state = {
                ...state,
                confirmModal: {
                    open: false,
                    message: '',
                    onConfirm: () => {
                    }
                }
            }
            break;
    }
    return state;
};
