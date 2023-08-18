
import { dataReducer } from "./reducer/dataReducer";
import { songsReducer } from "./reducer/songsReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    data : dataReducer,
    selectedSong: songsReducer
})

export const store = createStore(rootReducer);        //store the state variable


// store => keeping the state updates and also reducer functions(state, action)