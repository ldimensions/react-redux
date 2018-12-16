import * as actionTypes from './actions';

const initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter+1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter+action.val
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter-action.val
            }
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: Math.floor(Math.random() * 100000) + 1, value:state.counter})
            }
        case actionTypes.DELETE_RESULTS:
            const updatedArray = state.results.filter(result => result.id != action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }    
    return state;
}

export default reducer;