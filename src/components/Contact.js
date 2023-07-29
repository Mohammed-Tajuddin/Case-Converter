import React from 'react'

export default function About(props) {
    let font = props.mode==="dark"?"light":"dark";
  return (
    <div className='container mt-5'>
            <h2 className={`text-${font}`}>Contact Us</h2>
            <div className="container my-4">
                <p className={`text-${font}`}><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/mohammed-tajuddin-cs/" target="_blank" rel="noreferrer"className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">@Mohammed Tajuddin</a></p>
                <p className={`text-${font}`}><strong>Email Address: </strong>: <a href="mailto:mohdtajuddin4@gmail.com" target="_blank" rel="noreferrer"className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">@mohdtajuddin4@gmail.com</a></p>
                <p className={`text-${font}`}><strong>Facebook</strong>: <a href="https://www.facebook.com/mohd.tajuddin.794/" target="_blank" rel="noreferrer"className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">@Mohammed Tajuddin</a></p>
                <p className={`text-${font}`}><strong>Instagram</strong>: <a href="https://www.instagram.com/mohd_tajuddin.4/" target="_blank" rel="noreferrer"className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">@mohd_tajuddin.4</a></p>
                <p className={`text-${font}`}><strong>Phone Number</strong>: +91-7816037300</p>
            </div>
    </div>
  )
}