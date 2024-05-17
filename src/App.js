import React from 'react'
import Sidebar from './sidebar'
import Main from './Main'
import './App.css'

function App() {
  return (
    <>
    <div className='main'>
    <Sidebar />
      <Main />
    </div>
    </>
  );
}

export default App
