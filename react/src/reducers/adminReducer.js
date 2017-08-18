import {PENDING, FULFILLED, REJECTED} from "redux-promise-middleware";
import {
    GET_ADMINS,
    UPLOAD_ADMIN_IMAGE,
    TOUCH_ADMIN_IMAGE,
    ADD_ADMIN,
    ADD_ADMIN_INIT_STATE,
    GET_ADMIN_DATA_FOR_UPDATE,
    UPDATE_ADMIN,
    DELETE_ADMIN,
} from "../actions/adminActions";
import API from "../actions/apiRequests";
const initialState = {
    adminIsSave: false,
    adminIsDelete: false,
    isOldAdmin: false,
    data: {},
    admin: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADMIN_INIT_STATE:
            state = Object.assign({}, state, initialState);
            break;
        case TOUCH_ADMIN_IMAGE:
            state = Object.assign({}, state, {
                productImageTouched: true
            });
            break;
        case UPLOAD_ADMIN_IMAGE:
            state = Object.assign({}, state, {
                productImageTouched: true,
                productImage: action.payload.file,
                productUploadedImage: action.payload.uploadedImage
            });
            break;
        case `${ADD_ADMIN}_${FULFILLED}`:
            state = Object.assign({}, state, {
                productSaved: true
            });
            break;
        case `${UPDATE_ADMIN}_${FULFILLED}`:
            state = {
                ...state,
                productSaved: true
            };
            break;
        case `${DELETE_ADMIN}_${PENDING}`:
            state = {
                ...state,
                productIsDelete: true
            };
            break;
        case `${DELETE_ADMIN}_${FULFILLED}`:
            state = {
                ...state,
                productIsDelete: false
            };
            break;
        case `${GET_ADMIN_DATA_FOR_UPDATE}_${FULFILLED}`:
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
        case `${GET_ADMINS}_${FULFILLED}`:
            state = {
                ...state,
                products: action.payload.data
            }
            break;

    }
    return state;
};
