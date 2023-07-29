import React from 'react'

export default function About(props) {
    let font = props.mode==="dark"?"light":"dark";
  return (
    <div className='container mt-5'>
            <h2 className={`text-${font}`}>About Page</h2>
            <div className="container my-4">
                <p className={`text-${font}`}>This is a page that can help you to convert your entire text into either UpperCase or LowerCase.</p>
                <p className={`text-${font}`}>This page is developed using <strong>REACT JS and BootStrap.</strong></p>
                <p className={`text-${font}`}>This is a <strong>Single page Web-Application.</strong></p>
                <p className={`text-${font}`}>Development credits to <strong>Mohammed Tajuddin.</strong></p>
            </div>
    </div>
  )
}
