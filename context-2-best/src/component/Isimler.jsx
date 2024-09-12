import React from 'react'

import AnaUser from "./AnaUser";
import { useContext } from 'react';
import { KullaniciContext } from '../context/KullaniciProvider';
const Isimler = () => {

  const {users} = useContext(KullaniciContext)

  return (
    <div>
    {/* diziden 4 kişinin ismini bastır */}

{users.slice(0,4).map((a)=>(
  <div key={a.id} style={{textAlign:"center", background:"pink"}}>

{a.login}

  </div>
)) }

   <AnaUser/>

    </div>
  );
}

export default Isimler