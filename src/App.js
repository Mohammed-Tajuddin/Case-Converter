import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
// import ColorPick from './components/ColorPick';
// import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ColorPick from './components/ColorPick';

function App() {
  const [mode,setMode]=useState("light");
  const [color,setColor]=useState("#000000");
  const [isColorPicked,setisColorPicked]=useState(false);

  

  const toggleMode= ()=> {
    setMode(mode==="light"?"dark":"light");
    if(!isColorPicked){
      document.body.style.backgroundColor=(mode==="dark")?("#FFFFFF"):("#000000")
    }
    else{
      document.body.style.backgroundColor=color;
    }
  }

  return (
    <div >
      <BrowserRouter>
      {/* <Nav/> */}
      <Navbar title="Case Converter" toggleMode={toggleMode} mode={mode}/>
      <Routes>
        <Route path="/" element={<TextBox mode={mode} />}/>
        <Route path="/About" element={<About mode={mode}/>} />
        <Route path="/Contact" element={<Contact mode={mode}/>} />

      </Routes>
      <ColorPick mode={mode} color={color} setColor={setColor} colorPicked={setisColorPicked}/>
      {/* <TextBox mode={mode} color={color} setColor={setColor} colorPicked={setisColorPicked}/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextBox mode={mode} color={color} setColor={setColor} colorPicked={setisColorPicked}/>}/>
          {/* <Route index element={<TextBox mode={mode} color={color} setColor={setColor} colorPicked={setisColorPicked}/>} /> */}
          {/* <Route path="/About" element={<About/>} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      {/* </Routes>
      </BrowserRouter> */} 
      {/* <Navbar title="Case Converter" toggleMode={toggleMode} mode={mode}/>
      <About mode={mode}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
