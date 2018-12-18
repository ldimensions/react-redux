export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
}

export const substract = (value) => {
    return {
        type: SUBSTRACT,
        val: value
    }
}

export const storeResult = (res) => {
    return {
        type: STORE_RESULTS,
        result: res
    }
}

export const deleteResult = (value) => {
    return {
        type: DELETE_RESULTS,
        resultElId: value
    }
}