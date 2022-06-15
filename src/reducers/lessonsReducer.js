import { v4 } from "uuid";

const INITIAL_STATE = {
    lessonsList: []
};

export const lessonsReducer = (state = INITIAL_STATE, action) => {
    switch(action?.type) {
        case "addLesson":
            action.payload["id"] = v4();
            return {
                ...state,
                lessonsList: [...state.lessonsList, action?.payload]
            };
        case "editLesson": {
            const indexOfLesson = state.lessonsList.map(x => x?.id).indexOf(action?.id);
            const tempLessonsList = [...state.lessonsList];
            if (indexOfLesson !== -1) {
                const groupId = tempLessonsList[indexOfLesson]?.groupId;
                tempLessonsList[indexOfLesson] = {
                    id: action?.id,
                    name: action?.name,
                    description: action?.description,
                    groupId: groupId
                };
            }
            
            return {
                ...state,
                lessonsList: [...tempLessonsList]
            };
        }
        case "deleteLesson":
            const groups = state.lessonsList.filter(x => x?.id !== action?.id);
            return {
                ...state,
                lessonsList: groups
            };
        default:
            return state;
    }
}