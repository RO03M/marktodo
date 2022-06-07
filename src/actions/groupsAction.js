export const addGroup = (name = "", description = "") => ({
    type: "add",
    payload: {
        name,
        description
    }
});

export const editGroup = (id, name, description) => ({
    type: "edit",
    payload: {
        id,
        name,
        description
    }
})