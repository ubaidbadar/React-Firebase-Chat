const { USER_STATE_CHANGED } = require("../actionTypes");

const user = (state = null, action) => {
    switch (action.type) {
        case USER_STATE_CHANGED:
            return action.payload;
        default:
            return state;
    }
}

export default user;