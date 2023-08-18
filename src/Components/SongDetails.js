import React from "react";
import { useSelector } from "react-redux";

const SongDetails = () => {

    let selectedSong = useSelector((state)=> state.selectedSong)

    console.log(selectedSong)

  return (
    <div>
        <h1>Songs Details</h1>
        {
            selectedSong &&(
                <div>
                   <h3>{selectedSong.name}</h3>
                   <h3>{selectedSong.duration}</h3>
                   <h3>{selectedSong.genre}</h3>
                   <h3>{selectedSong.author}</h3>
                </div>
            )
        }
    </div>
  )
}

export default SongDetails
