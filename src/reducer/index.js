
const initialState = {
    items: [],
    comments: []
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: action.payload,
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                items: action.payload.items,
                comments: action.payload.comments
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
};
