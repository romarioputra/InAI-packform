import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegionButtonContainer from './components/RegionButton'
import AskAIButton from './components/AskAIButton'
import AIQueryButtonContainer from './components/AIQuery'
import ConfigurationButtonContainer from './components/Config'
import ChangePercentageButton from './components/ChangePercentage'
import IntervalButtonContainer from './components/IntervalButton'
import PortfolioChangeButtonContainer from './components/PortfolioChangeButton'
import AddInvestmentContainer from './components/AddInvestment'

function App() {

  return (
    <>
      <RegionButtonContainer></RegionButtonContainer>
      <AskAIButton></AskAIButton>
      <AIQueryButtonContainer></AIQueryButtonContainer>
      <ConfigurationButtonContainer></ConfigurationButtonContainer>
      <ChangePercentageButton percentage="5.0"></ChangePercentageButton>
      <ChangePercentageButton percentage="-5.0"></ChangePercentageButton>
      <IntervalButtonContainer></IntervalButtonContainer>
      <PortfolioChangeButtonContainer></PortfolioChangeButtonContainer>
      <AddInvestmentContainer></AddInvestmentContainer>
    </>
  )
}

export default App
