const contacts = (state, {type, payload}) => {
    switch(type) {
        case 'GET_CONTACT':
            return {};
        default:
            return state;            

    }
};
export default contacts;