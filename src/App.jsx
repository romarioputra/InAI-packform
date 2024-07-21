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
import { Flex } from './components/FlexCointainer'
import { CardSC } from './components/card/Card'

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
  const fy = `FY ${new Date().getFullYear()}`
  return (
    <>
      <div className='sm:hidden block'>
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
      </div>
      <div className="sm:block hidden mt-5">
        <Navbar></Navbar>
        <Flex>
          <CardSC $maxContent $backgroundColor="white" $borderRadius="10px" style={{ flexGrow: "1" }}>
            <Flex $rowGap="1.5rem" $direction="column">
              <Flex $columnGap="1.5rem">
                <NetAssetsCard region="All" net={allRegion.netAssets} gross={allRegion.grossAssets} percent={allRegion.lastDayPercentageGain} liab={allRegion.liabilities}></NetAssetsCard>
                <NetAssetsCard region="Australia" net={australiaRegion.netAssets} gross={australiaRegion.grossAssets} percent={australiaRegion.lastDayPercentageGain} liab={australiaRegion.liabilities}></NetAssetsCard>
              </Flex>
              <Flex $columnGap="1.5rem">
                <NetAssetsCard region="USA" net={usaRegion.netAssets} gross={usaRegion.grossAssets} percent={usaRegion.lastDayPercentageGain} liab={usaRegion.liabilities}></NetAssetsCard>
                <NetAssetsCard region="Europe" net={europeRegion.netAssets} gross={europeRegion.grossAssets} percent={europeRegion.lastDayPercentageGain} liab={europeRegion.liabilities}></NetAssetsCard>
              </Flex>
            </Flex>
          </CardSC>
          <CardSC $maxContent $backgroundColor="white" $borderRadius="10px" style={{ flexGrow: "1", height: "max-content" }}>
            <Flex $rowGap="1.5rem" $direction="column">
              <Flex $columnGap="1.5rem">
                <GrossIncomeCard marginTop='0' intervalText='Day' grossIncome={data.grossIncome} defaultSelectedIndex={0} showInterval={false}></GrossIncomeCard>
                <GrossIncomeCard marginTop='0' intervalText='Month' grossIncome={data.grossIncome} defaultSelectedIndex={1} showInterval={false}></GrossIncomeCard>
              </Flex>
              <Flex $columnGap="1.5rem">
                <GrossIncomeCard marginTop='0' intervalText='Quarter' grossIncome={data.grossIncome} defaultSelectedIndex={2} showInterval={false}></GrossIncomeCard>
                <GrossIncomeCard marginTop='0' intervalText={fy} grossIncome={data.grossIncome} defaultSelectedIndex={3} showInterval={false}></GrossIncomeCard>
              </Flex>
            </Flex>
          </CardSC>
        </Flex>
      </div>
    </>
  )
}

export default App
