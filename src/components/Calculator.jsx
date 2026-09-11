import { useState } from "react"
function Calculator(){
    const[InputValue, SetInputValue] = useState("")
    const[Num1 , SetNum1] = useState("")
    const[PlusPresed, SetPlusPresed] = useState(false)
    const[MinusPresed, SetMinusPresed] = useState(false)
    const[MultipyPresed, SetMultipyPresed] = useState(false)
    const[DividePresed, SetDividePresed] = useState(false)
    const AddNumber = (number) => {
        SetInputValue(InputValue + number)
    }
    const DeleteBtn = () => {
        SetInputValue(InputValue.slice(0,-1))
    }
    const Clear = () => {
        SetInputValue("")
    }
    const Plus = () => {
        SetNum1(Number(InputValue))
        SetInputValue("")
        SetPlusPresed(true)
    }
    const Minus = () => {
        SetNum1(Number(InputValue))
        SetInputValue("")
        SetMinusPresed(true)
    }
    const Multipy = () => {
        SetNum1(Number(InputValue))
        SetInputValue("")
        SetMultipyPresed(true)
    }
    const Divide = () => {
        SetNum1(Number(InputValue))
        SetInputValue("")
        SetDividePresed(true)
    }
    const Equal = () => {
        if(PlusPresed){
            const Num2 = Number(InputValue)
            const result = Num1 + Num2
            SetInputValue(result)
            SetPlusPresed(false)
        }if(MinusPresed){
            const Num2 = Number(InputValue)
            const result = Num1 - Num2
            SetInputValue(result)
            SetMinusPresed(false)
        }if(MultipyPresed){
            const Num2 = Number(InputValue)
            const result = Num1 * Num2
            SetInputValue(result)
            SetMultipyPresed(false)
        }if(DividePresed){
            const Num2 = Number(InputValue)
            const result = Num1 / Num2
            SetInputValue(result)
            SetDividePresed(false)
        }
    }
    return(
        <div className="Calculator">
            <input type="text" value={InputValue} onChange={(e) => SetInputValue(e.target.value)} readOnly id="CalInput"/>
            <button onClick={DeleteBtn}>Delete</button>
            <button onClick={Clear}>C</button><br />
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
            <button onClick={Multipy}>*</button>
            <button onClick={Divide}>/</button>
            <button onClick={Equal}>=</button><br />
            <span><button onClick={() => AddNumber("1")}>1</button></span>
            <span><button onClick={() => AddNumber("2")}>2</button></span>
            <span><button onClick={() => AddNumber("3")}>3</button></span><br />
            <span><button onClick={() => AddNumber("4")}>4</button></span>
            <span><button onClick={() => AddNumber("5")}>5</button></span>
            <span><button onClick={() => AddNumber("6")}>6</button></span><br />
            <span><button onClick={() => AddNumber("7")}>7</button></span>
            <span><button onClick={() => AddNumber("8")}>8</button></span>
            <span><button onClick={() => AddNumber("9")}>9</button></span><br />
            <span><button onClick={() => AddNumber("0")}>0</button></span>
        </div>
    )
}

export default Calculator