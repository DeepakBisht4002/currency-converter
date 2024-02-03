import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passworderef = useRef(null);

  const passwordgenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) str += '0123456789';
    if(charallowed) str += '!@#$%^&*-_[]{}~`';

    for(let i = 1 ;i < length ;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, numberallowed, charallowed])

  useEffect(()=>{
    passwordgenerator();
  },[length, numberallowed, charallowed])

  const copypassword = useCallback(()=>{
    passworderef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
    <div className="main">
      <div className="container">
        <h1>password generator</h1>
        <div className="input_section">
          <input type="text"  placeholder='Password' value={password} ref={passworderef} readOnly/>
          <i className="ri-restart-line  icon" onClick={()=> passwordgenerator()}></i>
          <button className='btn' onClick={copypassword}>copy</button>
          </div>

          <div className="user_section">
            <div className="first">
              <input type="range" min={6} max={100} onChange={(e)=> setLength(e.target.value)} />
              <label>Length : {length}</label>
            </div>

            <div className="second">
              <input type="checkbox"  id="number"  onChange={()=> setNumberAllowed((prev)=> !prev)} />
              <label htmlFor="number">Numbers</label>

              <input type="checkbox"  id="char" onChange={()=> setCharAllowed((prev)=> !prev)}/>
              <label htmlFor="char">Characters</label>
            </div>
          </div>

        
      </div>
    </div>
      
    </>
  )
}

export default App
