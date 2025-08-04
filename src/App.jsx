
import { useState } from 'react'
import './App.css'
function App(){

  
  const[character,setCharacter]=useState('');
const handleInput=(e)=>{
  setCharacter(e.target.value);
}
  return(<><input type='text'value={character} onChange={handleInput}/>
  <p>Characters: {character}</p>
  <p>Length: {character.length}</p>
  </>)
}
export default App