import React from 'react';
import * as actionTypes from "../action/type"

const todoReducer = (state=[],action) => {


    switch(action.type) {
        case actionTypes.ADDNEW_TODO:
            return[action.payload,...state]

        default:
        return state;
    }

}

export default todoReducer;