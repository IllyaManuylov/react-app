export const addItem = (items) => {
    return{
        type: "ADD_ITEM",
        payload: items
    }
};
export const addComment = (items, comments) => {
    return{
        type: "ADD_COMMENT",
        payload: {items, comments}
    }
};
export const removeItem = (items) => {
    return{
        type: "REMOVE_ITEM",
        payload: items
    }
};