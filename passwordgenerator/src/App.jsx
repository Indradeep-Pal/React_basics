
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password,setPassword] = useState('')
  const [length,setLength] =useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed])

  const copyToClipboard= ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-800 bg-gray-400  p-20 rounded-lg">
        <h1 className='text-4xl m-auto'>Password Generator</h1>
        <div className='justify-center mb-8'>
        <input 
          type='text'
          value={password}
          className='mt-5 md:w-96 max-[420px]:w-32 text-black m-auto rounded p-3'
          onChange={passwordGenerator}
          ref={passwordRef}
        />
        <button className=' bg-indigo-800 p-3 rounded' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='gap-5'>
          <input
            type='range'
            size='1.5rem'
            min={8}
            max={32}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            className='mr-2'
           />

           <label className='mr-3'>
            Length({length})
           </label>

           <input 
           type='checkbox'
           value={numberAllowed}
           onClick={()=>setNumberAllowed((prev)=>!prev)}
           />

           <label className='mr-3'>
            Numbers
           </label>

          <input
            type='checkbox'
            value={charAllowed}
            onClick={() => setCharAllowed((prev)=>!prev)}
          />

          <label>
            Special Characters
          </label>
        </div>
    </div>  
    </>
  )
}

export default App
