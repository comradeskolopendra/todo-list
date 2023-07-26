const initialState = {
    todos: []
};

const SET_DATA = "SET_DATA";

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, todos: [...state.todos, ...action.payload] };

        default:
            return state;
    }
}

export const setDataAction = (payload) => ({ type: SET_DATA, payload })