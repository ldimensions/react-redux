import * as actionTypes from '../actions/actions';

const initialState = {    
    results: []
}

const reducer = (state = initialState, action) => {
    console.log("reducer");
    switch (action.type){
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: Math.floor(Math.random() * 100000) + 1, value:action.result})
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