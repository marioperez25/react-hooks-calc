import React, { useState } from 'react';
import styled from 'styled-components';

export default function Calculator(){
    
    const [result = Int8Array, setResult] = useState(0);

    const [inputField = Int8Array, setInputField] = useState(0);

    const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        text-align: center;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;
    
    const Buttons = styled.div`
        display: grid;
        grid-template-columns: auto auto auto;
        max-width: 600px;
        margin: auto;
    `;

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
        if (inputField === 0) {
            setResult(result);
            setInputField(0);
        } else {
            setResult(result / inputField);
            setInputField(0);
        }

        
    }

    const multipliedBy = event =>{
        setResult(result * inputField);
        setInputField(0);
    }
    
    return (
        <div>
            <p>Result= {result}</p>
            <input type="number" value={inputField} onChange={handleChange}/>
            <Buttons>
                <Button primary onClick={() => setResult(add)}>
                +
                </Button>
                <Button onClick={() => setResult(minus)}>
                -
                </Button>
                <Button onClick={() => setResult(dividedBy)}>
                /
                </Button>
                <Button onClick={() => setResult(multipliedBy)}>
                *
                </Button>
                <Button onClick={() => setResult(0)}>
                reset
                </Button>
            </Buttons>
        </div>
    );
}