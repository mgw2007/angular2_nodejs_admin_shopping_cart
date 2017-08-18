import API from "./apiRequests";

export const GET_ADMINS = "GET_ADMINS";
export const UPLOAD_ADMIN_IMAGE = "UPLOAD_ADMIN_IMAGE";
export const TOUCH_ADMIN_IMAGE = "TOUCH_ADMIN_IMAGE";
export const ADD_ADMIN = "ADD_ADMIN";
export const ADD_ADMIN_INIT_STATE = "ADD_ADMIN_INIT_STATE";
export const GET_ADMIN_DATA_FOR_UPDATE = "GET_ADMIN_DATA_FOR_UPDATE";
export const UPDATE_ADMIN = "UPDATE_ADMIN";
export const DELETE_ADMIN = "DELETE_ADMIN";

export const getAdmins = () => ({
    type: GET_ADMINS,
    payload: API.getAdmins()
});
export const getAdminDataForUpdate = id => ({
    type: GET_ADMIN_DATA_FOR_UPDATE,
    payload: API.getAdmin(id)
});

export const touchAdminImage = () => ({
    type: TOUCH_ADMIN_IMAGE
});
export const addAdminInitialState = () => ({
    type: ADD_ADMIN_INIT_STATE
});
export const uploadAdminImage = file => dispach => {
    let reader = new FileReader();
    reader.onload = e => {
        let uploadedImage = e.target.result;
        dispach({
            type: UPLOAD_ADMIN_IMAGE,
            payload: {
                file,
                uploadedImage
            }
        });
    };
    reader.readAsDataURL(file);
};

export const addAdmin = (data) => dispach => {
    dispach({type: ADD_ADMIN, payload: API.addAdmin(data)});
};
export const updateAdmin = (id, data) => dispach => {
    dispach({type: UPDATE_ADMIN, payload: API.updateAdmin(id, data)});
};
export const deleteAdmin = (id) => ({
    type: DELETE_ADMIN,
    payload: API.deleteAdmin(id)
})
