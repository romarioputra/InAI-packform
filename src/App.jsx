import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegionButtonContainer from './components/RegionButton'
import AskAIButton from './components/AskAIButton'

function App() {

  return (
    <>
      <RegionButtonContainer></RegionButtonContainer>
      <AskAIButton></AskAIButton>
    </>
  )
}

export default App
