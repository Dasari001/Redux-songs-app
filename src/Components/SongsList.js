import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSongs } from "../redux/actions/song.actions";

export const SongsList = () => {

    let data = useSelector((state)=>state.data);

    console.log(data)

    const dispatch = useDispatch();

    return(
        <div>
             <h1>Song List</h1>
             {
                data.map((song, index)=> (
                    <div key={index}
                         onClick={()=>dispatch(selectSongs(song))}>
                        
                        <h3>{song.name}</h3>
                    </div>
                ))
             }
        </div>
    )
}



