export default (state = {}, {type, payload}) => {
    if (type === 'USER_LOGGED_IN') {
        return payload
    }
    if (type === 'USER_LOGGED_OUT') {
        return {}
    }
    return state
}