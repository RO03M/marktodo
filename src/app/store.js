import { configureStore } from "@reduxjs/toolkit";
import { groupsReducer } from "../reducers/groupsReducer";

export default configureStore({
    reducer: {
        groups: groupsReducer
    }
});