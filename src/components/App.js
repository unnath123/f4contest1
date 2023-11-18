import React, { useState } from 'react'
import style from '../style.css'

const App = () =>{

    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [result, setResult] = useState(null)
    const [error,setError] = useState(null)
    const [er,setEr] = useState(null)


    function fetchResult(e){
        let op = e.target.name;
        
        if(!num1 || !num2){
            setEr("Error!")
            setError("Please fill both the values")
            // setResult("Please fill both the values")
        }
        else{
            if(op === 'add'){
                setResult("Result = "+(parseInt(num1) + parseInt(num2)))
            }
            else if(op === 'sub'){
                setResult("Result = "+(parseInt(num1) - parseInt(num2)))
            }
            else if(op === 'mul'){
                setResult("Result = "+(parseInt(num1) * parseInt(num2)))
            }
            else if(op === 'div'){
                setResult("Result = "+(parseInt(num1) / parseInt(num2)))
            }
        }
        console.log(e.target.name)
        
    }

    return (
        <div className='calculator'>
            <h1>React Calculator</h1>
            <div className='inputDiv'>
                <input type='text' placeholder='Input-1' onChange={(e)=>setNum1(e.target.value)}></input>
                <input type='text' placeholder='Input-2' onChange={(e)=>setNum2(e.target.value)}></input>
            </div>
            
            <div className='buttons'>
                <button name='add' onClick={fetchResult}>+</button>
                <button name='sub' onClick={fetchResult}>-</button>
                <button name='mul' onClick={fetchResult}>*</button>
                <button name='div' onClick={fetchResult}>/</button>
            </div>
            <div className='result'>
                {
                    result ? <div><p  className='success'>Success!</p><p>{result}</p></div> 
                    : <div><p  className='error'>{er}</p><p>{error}</p></div>
                }
            </div>
        </div>
    )
}

export default App