import {push} from "react-router-redux";
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER
} from "../actions/authActions";
const initialState = {
    token: null,
    isAuthenticated: false,
    statusText: null,
    hasError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            state = Object.assign({}, state, {
                hasError: false,
                isAuthenticated: true,
                token: action.payload.token,
                statusText: "You have been successfully logged in."
            });
            break;
        case LOGIN_USER_FAILURE:
            state = Object.assign({}, state, {
                hasError: true,
                isAuthenticated: false,
                token: null,
                statusText: `Authentication Error.`
            });
            break;
        case LOGOUT_USER:
            state = Object.assign({}, state, {
                hasError: false,
                isAuthenticated: false,
                token: null,
                statusText: "You have been successfully logged out."
            });
            break;
    }
    return state;
};
