import React from 'react'
import Sidebar from './sidebar'
import Main from './Main'
import './App.css'
import {Helmet} from "react-helmet";

function App() {
  return (
   

    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Byte App</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Byte Web App" />
    </Helmet>
    <div className='main'>
    <Sidebar />
      <Main />
    </div>
    </>
  );
}

export default App
