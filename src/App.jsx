import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegionButtonContainer, { RegionTitle } from './components/RegionButton'
import AskAIButton from './components/AskAIButton'
import AIQueryButtonContainer from './components/AIQuery'
import ConfigurationButtonContainer from './components/Config'
import ChangePercentageButton from './components/ChangePercentage'
import IntervalButtonContainer from './components/IntervalButton'
import PortfolioChangeButtonContainer from './components/PortfolioChangeButton'
import AddInvestmentContainer from './components/AddInvestment'
import LastIntervalButton from './components/LastInterval'
import RowChangeContainer, { LineBreak, RowChanges } from './components/PortfolioPerformance'
import { allRegion, australiaRegion, europeRegion, usaRegion } from './data/data'
import NetAssetsCard from './components/card/NetAssets'
import GrossIncomeCard, { Heading } from './components/card/GrossIncome'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Flex } from './components/FlexCointainer'
import { CardHeaderSC, CardSC } from './components/card/Card'
import { SectionTitle, Title } from './components/SectionHeading'

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
            <CardHeaderSC><h1 className="title mb-3">Net assets</h1></CardHeaderSC>
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
          <CardSC $maxContent $backgroundColor="white" $borderRadius="10px" style={{ flexGrow: "1" }}>
            <CardHeaderSC><h1 className="title mb-3">Gross income</h1></CardHeaderSC>
            <Flex $rowGap="1.5rem" $direction="column">
              <Flex $columnGap="1.5rem">
                <GrossIncomeCard marginTop='0' region="All" grossIncome={allRegion.grossIncome}></GrossIncomeCard>
                <GrossIncomeCard marginTop='0' region="Australia" grossIncome={australiaRegion.grossIncome}></GrossIncomeCard>
              </Flex>
              <Flex $columnGap="1.5rem">
                <GrossIncomeCard marginTop='0' region="USA" grossIncome={usaRegion.grossIncome}></GrossIncomeCard>
                <GrossIncomeCard marginTop='0' region="Europe" grossIncome={europeRegion.grossIncome}></GrossIncomeCard>
              </Flex>
            </Flex>
          </CardSC>
        </Flex >
        <Flex className='mt-5'>
          <CardSC $maxContent $backgroundColor="white" $borderRadius="10px">
            <CardHeaderSC><h1 className="title mb-3">Portfolio Performance</h1></CardHeaderSC>
            <Flex $columnGap="1.5rem">
              <CardSC>
                <CardHeaderSC>
                  <Heading className="title">All</Heading>
                </CardHeaderSC>
                <RowChanges portfolioPerformance={allRegion.portfolioPerformance}></RowChanges>
              </CardSC>
              <CardSC>
                <CardHeaderSC>
                  <Heading className="title">Australia</Heading>
                </CardHeaderSC>
                <RowChanges portfolioPerformance={australiaRegion.portfolioPerformance}></RowChanges>
              </CardSC>
              <CardSC>
                <CardHeaderSC>
                  <Heading className="title">USA</Heading>
                </CardHeaderSC>
                <RowChanges portfolioPerformance={usaRegion.portfolioPerformance}></RowChanges>
              </CardSC>
              <CardSC>
                <CardHeaderSC>
                  <Heading className="title">Europe</Heading>
                </CardHeaderSC>
                <RowChanges portfolioPerformance={europeRegion.portfolioPerformance}></RowChanges>
              </CardSC>
            </Flex>
          </CardSC>
        </Flex>
      </div >
    </>
  )
}

export default App
