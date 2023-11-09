'use client'
import { useState } from "react"

export default function Likebutton ({id}) {
    const [liked, setLiked] = useState(false)

    return(
        <button onClick={()=> setLiked(!liked)}>
            {liked? <p className="font-bold"> Liked</p> : <p>Like</p>}    
        </button>
    )
}   