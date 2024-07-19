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
import LastIntervalButton from './components/LastInterval'
import RowChangeContainer from './components/PortfolioPerformance'
import { allRegion } from './data/data'

function App() {
  const data = allRegion
  return (
    <>
      <AskAIButton></AskAIButton>
      <RegionButtonContainer></RegionButtonContainer>
      <IntervalButtonContainer></IntervalButtonContainer>
      <PortfolioChangeButtonContainer></PortfolioChangeButtonContainer>
      <AddInvestmentContainer></AddInvestmentContainer>
      <LastIntervalButton></LastIntervalButton>
      <RowChangeContainer portfolioPerformance={data.portfolioPerformance}></RowChangeContainer>
      <AIQueryButtonContainer></AIQueryButtonContainer>
      <ConfigurationButtonContainer></ConfigurationButtonContainer>
    </>
  )
}

export default App
