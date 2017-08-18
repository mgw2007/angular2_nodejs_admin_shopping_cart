import axios from "axios";
import {push} from "react-router-redux";
import {localApiUrl} from "../config";

export const GET_USER_DATA = "GET_USER_DATA";

export const getUserData = () => ({
    type: GET_USER_DATA,
    payload: axios.get(`${localApiUrl}/adminProfile`, {
        responseType: "json",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    // .then(response => {
    //   dispatch({

    //     payload: response.data.admin
    //   });
    // });
});
