import React from 'react'

export default function ColorPick(props) {
  let font = props.mode==="dark"?"light":"dark";


  const handleChange=(event) =>{
    props.setColor(event.target.value);
    document.body.style.backgroundColor=props.color
    props.colorPicked(true);
  }
  return (
    <div className='container my-5 d-flex'>
      <h3 className={`text-${font}`}>Pick Background Theme Color: </h3>
      <input type="color" className="form-control form-control-color mx-2" onChange={handleChange}id="colorInput" value={props.color} title="Choose your color"></input>
    </div>
  )
}
