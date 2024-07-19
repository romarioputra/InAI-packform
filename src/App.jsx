import { useMemo, useState } from 'react'
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
import RowChangeContainer, { LineBreak } from './components/PortfolioPerformance'
import { allRegion, australiaRegion, europeRegion, usaRegion } from './data/data'
import NetAssetsCard from './components/card/NetAssets'
import GrossIncomeCard from './components/card/GrossIncome'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0)
  const data = useMemo(() => {
    let prop = allRegion
    if (selectedRegionIndex == 1) {
      prop = australiaRegion
    }
    else if (selectedRegionIndex == 2) {
      prop = usaRegion
    }
    else if (selectedRegionIndex == 3) {
      prop = europeRegion
    }
    return prop
  }, [selectedRegionIndex])

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AskAIButton></AskAIButton>
      <RegionButtonContainer selectedIndex={selectedRegionIndex} setSelectedRegionIndex={setSelectedRegionIndex}></RegionButtonContainer>
      <NetAssetsCard net={data.netAssets} gross={data.grossAssets} percent={data.lastDayPercentageGain} liab={data.liabilities}></NetAssetsCard>
      <AddInvestmentContainer></AddInvestmentContainer>
      <RowChangeContainer portfolioPerformance={data.portfolioPerformance}></RowChangeContainer>
      <GrossIncomeCard grossIncome={data.grossIncome}></GrossIncomeCard>
      <AIQueryButtonContainer></AIQueryButtonContainer>
      <LineBreak $margin></LineBreak>
      <ConfigurationButtonContainer></ConfigurationButtonContainer>
    </>
  )
}

export default App
