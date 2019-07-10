//1.Create reducer function
const initialState = {
    counter: 0,
    result: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'Add 5':
            return {
                ...state,
                counter: state.counter + action.val,
            }
        case 'Subtract 5':
            return {
                ...state,
                counter: state.counter - action.val,
            }
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat({ id: new Date(), val: state.counter })
            }
        case 'DELETE_RESULT':
        // let id = 2 
        // const newArray = [...state.result];
        // newArray.splice(id, 1);
            const newArray = state.result.filter((result) => result.id !== action.resultElId);
        return {
            ...state,
            result: newArray
        }
    }
    return state;
}

export default reducer;