import axios from "axios";
import {push} from "react-router-redux";
import {localApiUrl} from "../config";

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_PROTECTED_DATA = "RECEIVE_PROTECTED_DATA";

export const loginInUser = (formValues, redirect) => {
    if (!formValues.email || !formValues.password) {
        return {
            type: LOGIN_USER_FAILURE
        };
    } else {
        return dispatch => {
            axios
                .post(`${localApiUrl}_login`, formValues, {
                    responseType: "json"
                })
                .then(response => {
                    let data = response.data;
                    if (data.success) {
                        dispatch({
                            type: LOGIN_USER_SUCCESS,
                            payload: data
                        });
                        dispatch(push(redirect));
                    } else {
                        dispatch({
                            type: LOGIN_USER_FAILURE
                        });
                    }
                });
        };
    }
};
