import {push} from "react-router-redux";
import {PENDING, FULFILLED, REJECTED} from "redux-promise-middleware";
import {GET_USER_DATA} from "../actions/appActions";

const initialState = {
    user: {
        email: "",
        name: ""
    },
    dataFetched: false,
    authenticated: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${GET_USER_DATA}_${FULFILLED}`:
            state = Object.assign({}, state, {
                user: {
                    email: action.payload.data.admin.email,
                    name: action.payload.data.admin.name
                },
                dataFetched: true,
                authenticated: true
            });
            break;
        case `${GET_USER_DATA}_${REJECTED}`:
            state = Object.assign({}, state, {
                dataFetched: true,
                authenticated: false
            });
    }
    return state;
};
