import { useState } from "react"

function ToggleSwitch() {
    const[IsOn, SetIsOn] = useState(false)
    return(
        <>
        <button 
        onClick={() => SetIsOn(!IsOn)}
        style={
            {color: IsOn ? "green" : "black"}
        }
        >{IsOn ? "It's On" : "It's Off"}</button>
        <h4>{IsOn}</h4>
        </>
    )
}

export default ToggleSwitch