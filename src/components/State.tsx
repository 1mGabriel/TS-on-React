import {ChangeEvent, useState} from 'react'
// States
const State = () => {
    const [text, setText] = useState <string | null> (null)

    // Mudança do State com TS
const handleChange = (e:ChangeEvent <HTMLInputElement>) =>{ //***** */
    setText(e.target.value)
}
const resetText = () =>{
    setText("")
}
  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
      <button onClick={resetText}>Limpar Texto</button>
    </div>
  )
}

export default State
