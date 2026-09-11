import { useState } from "react"

function FormSabt() {
    const[Name, SetName] = useState()
    const[Family, SetFamily] = useState()
    const[Age, SetAge] = useState()
    const[City, SetCity] = useState()
    const HandleSubmit = () => {
        console.log({Name})
        console.log({Family})
        console.log({Age})
        console.log({City})
    }
    return(
        <div className="Form">
            <label htmlFor="name">input name: </label>
            <input type="text" id="name" value={Name} onChange={(e) => SetName(e.target.value)}/><br />
            <label htmlFor="family">input Family: </label>
            <input type="text" id="family" value={Family} onChange={(e) => SetFamily(e.target.value)}/><br />
            <label htmlFor="age">input Age: </label>
            <input type="text" id="age" value={Age} onChange={(e) => SetAge(e.target.value)}/><br />
            <label htmlFor="city">input City:</label>
            <input type="text" id="city" value={City} onChange={(e) => SetCity(e.target.value)} /><br />
            <button onClick={HandleSubmit}>Submit</button>
            
            
        </div>
    )
}

export default FormSabt