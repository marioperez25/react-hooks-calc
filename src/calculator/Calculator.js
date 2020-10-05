import React, { useState } from 'react';

export default function Calculator(){
    
    const [result = Int8Array, setResult] = useState(0);

    const [inputField = Int8Array, setInputField] = useState(0);

    const handleChange = event => {
        if (parseInt(event.target.value) !== isNaN) {
           return setInputField(parseInt(event.target.value));
        }
        return setInputField(inputField);
    }

    const add = event =>{
        setResult(result + inputField);
        setInputField(0);
    }

    const minus = event =>{
        setResult(result - inputField);
        setInputField(0);
    }

    const dividedBy = event =>{
        setResult(result / inputField);
        setInputField(0);
    }

    const multipliedBy = event =>{
        setResult(result * inputField);
        setInputField(0);
    }
    
    return (
        <div>
            <p>Result= {result}</p>
            <input type="number" value={inputField} onChange={handleChange}/>
            <button onClick={() => setResult(add)}>
             +
            </button>
            <button onClick={() => setResult(minus)}>
             -
            </button>
            <button onClick={() => setResult(dividedBy)}>
            /
            </button>
            <button onClick={() => setResult(multipliedBy)}>
            *
            </button>
            <button onClick={() => setResult(0)}>
            reset
            </button>
        </div>
    );
}