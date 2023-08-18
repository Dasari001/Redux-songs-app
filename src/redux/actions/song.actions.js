
import { SELECT_SONGS } from "./actionTypes";

// action creator functions:
// action creators: why do we need them?
// action creators are kind of function that will return action object
// action is an object in redux

export const selectSongs = (song) => {     // action creater function
      
    return{                                  // return is returining object. this object is called as actions
        type: SELECT_SONGS,                  // this 'type' means what action this particular object is going to perform
        payload: song
    }
}



// action : {
//     type: SELECT_SONGS,   // this 'type' means what action this particular object is going to perform
//     payload: song
// }