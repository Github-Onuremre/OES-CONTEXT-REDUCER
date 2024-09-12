import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../App'

const OgrenciItem = () => {

  //! 3 (context consumer) globalde (mesela App.js yada ayrı bir context sayfası) tanımladığım değerleri buraya çağırdık

  const {students, changeColor} = useContext(StudentContext)

 
  
  return (
    <div>
      {students.map((std)=>(
        <div key={std.id}  style={{background:std.color}}>
<h3>NAME: {std.name}</h3>
<h4>EMAIL: {std.email} </h4>
<h4>AGE: {std.age} </h4>

Color: <input type="text" value={std.color}
onChange={(e)=>changeColor(std.id,e.target.value)}

/>
        </div>
      ))}
    </div>
  )
}

export default OgrenciItem