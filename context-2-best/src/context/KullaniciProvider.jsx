import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'



//! 1- creating context
export const KullaniciContext=createContext()
//! 2- Provider
const KullaniciProvider = ({children}) => {

const[users,setUsers]=useState([])

useEffect(()=>{
fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>setUsers(veri)  )
},[])


const changeWidth=(id,widtH)=>{


setUsers(users.map((a)=>a.id===id  ? {...a, width: widtH} : a))


}




  return (
    <KullaniciContext.Provider value={{users,changeWidth}}>
{children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider