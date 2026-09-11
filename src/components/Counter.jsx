import { useState } from "react"
function Counter(){
    const[Count, SetCount] = useState(0)
    const handlePlus = ()  => {
        const C = SetCount(Count+1)
        return C
    }
    const handleMenha = () => {
        const C = SetCount(Count-1)
        return C
    }
    const handleReset = () => {
        const C = SetCount(0)
        return C
    }
    return(
        <div className="Counter">
        <h1>Counter Exercise</h1>
        <div>
            <input type="text" value={Count} onChange={(e) => SetCount(e.target.value)}/>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMenha}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </div>
    )
    
}

export default Counter