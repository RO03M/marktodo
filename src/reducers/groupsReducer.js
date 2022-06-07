const initialState = {
    groupList: []
};

export const groupsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "add":
            return {
                ...state,
                groupList: [...state.groupList, action?.payload]
            };
        default:
            return state;
    }
}