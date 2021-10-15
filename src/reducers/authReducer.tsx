import { types } from "../types/types";

//Interfaces 
interface action_ {
    type: string,
    payload: {
        uid: '',
        displayName: ''
    }
}
export const authReducer = (state = {}, action: action_) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}