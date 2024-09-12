import React from 'react'
import GosterUsers from './pages/GosterUsers'
import KullaniciProvider from './context/KullaniciProvider'


const App = () => {
  return (
    <div>
      <KullaniciProvider>
        <GosterUsers />
      </KullaniciProvider>
    </div>
  );
}

export default App