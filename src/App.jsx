import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegionButtonContainer from './components/RegionButton'
import AskAIButton from './components/AskAIButton'
import AIQueryButtonContainer from './components/AIQuery'
import ConfigurationButtonContainer from './components/Config'

function App() {

  return (
    <>
      <RegionButtonContainer></RegionButtonContainer>
      <AskAIButton></AskAIButton>
      <AIQueryButtonContainer></AIQueryButtonContainer>
      <ConfigurationButtonContainer></ConfigurationButtonContainer>
    </>
  )
}

export default App
