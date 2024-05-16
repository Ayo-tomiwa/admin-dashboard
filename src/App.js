import React from 'react'
import Sidebar from './sidebar'
import Main from './Main'
import './detail'
import './App.css'

function App() {
  return (
    <>
    <div className='main'>
    <Sidebar />
     <Main />
      <Detail />
    </div>
    </>
  );
}

export default App
