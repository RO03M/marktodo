import { v4 } from "uuid";

const initialState = {
    groupList: []
};

export const groupsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "add":
            action.payload["id"] = v4();
            return {
                ...state,
                groupList: [...state.groupList, action?.payload]
            };
        case "edit": {
            const indexOfGroup = state.groupList.map(x => x?.id).indexOf(action?.payload?.id); 
            return {
                ...state
            };
        }
        default:
            return state;
    }
}