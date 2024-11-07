import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Menu from './components/Menu/Menu'

function App() {
  const [hideBar, setHideBar] = useState(false)

  return (
    <>
      <Sidebar hideBar={hideBar} setHideBar={setHideBar}/>
      <Menu hideBar={hideBar} setHideBar={setHideBar}/>
    </>
  )
}

export default App
