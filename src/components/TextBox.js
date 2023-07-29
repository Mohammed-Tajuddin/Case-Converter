import React, { useState } from 'react'

export default function TextBox(props) {
    let font = props.mode==="dark"?"light":"dark";

    let textStyle= {backgroundColor:(props.mode==="dark"?"#212529":"#FFFFFF"),color:(props.mode==="dark"?"#FFFFFF":"rgb(0,0,0)")}

    const metUpClick = () => {
        setText(text.toUpperCase())
    }
    
    const metLoClick = () => {
        setText(text.toLowerCase())
    }
    
    const metClClick = () => {
        setText("")
    }

    const metSlClick = (event) => {
        let textArea= document.getElementById('textBox');
        textArea.select();
    }
   
    const metCpClick = (event) => {
        let textArea= document.getElementById('textBox');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    }
    

    const metOnChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText]=useState("")
    return (
        <>
            <div className='container mt-5'>
                <h2 className={`text-${font}`}>Try Case Converter</h2>
                <div className='mb-3 mt-10'>
                    <textarea className="form-control" style={textStyle} id="textBox" placeholder="Enter text" value={text} onChange={metOnChange} rows="6"></textarea>
                </div>
                <button type="button" className="btn btn-primary me-3" onClick={metUpClick}>To Upper Case</button>
                <button type="button" className="btn btn-primary me-3" onClick={metLoClick}>To Lower Case</button>
                <button type="button" className="btn btn-primary me-3" onClick={metClClick}>Clear Text</button>
                <button type="button" className="btn btn-primary me-3" onClick={metSlClick}>Select Text</button>
                <button type="button" className="btn btn-primary me-3" onClick={metCpClick}>Copy to Clipboard</button>
            </div>
        </>
    )
}
