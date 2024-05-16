import React from 'react'
import Sidebar from './sidebar'
import Main from './Main'
import './App.css'
import './detail.js'
function App() {
  return (
    <>
    <div className='main'>
    <Sidebar/>
     <Main/>
     <Detail/>
    </div>
    </>
  )
}

export default App
