import { SELECT_SONGS } from "../actions/actionTypes";

// for every action creater file we have one reducer file.
// reducer is a function which helps to implenent actions.

const INITIAL_STATE = null;

export const songsReducer = (state=INITIAL_STATE, action) => {

     // actions means which action we are going to implememt
    // reducer function gives us two parameters 1) state 2) actions(this is object)

    switch (action.type) {
        case SELECT_SONGS:
            return action.payload
    
        default:
            return state
    }
}

// actions
//if some one is calling -----  songsReducer(state,selectSongs)   they will pass action creator



 

