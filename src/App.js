import React, { useEffect, useState } from 'react'
import { useClient, getTheme } from './hooks'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import styled from 'styled-components'


function App() {
  const [state, setState] = useState({})
  const [width, setWidth] = useState(window.innerWidth - 50)
  const client = useClient()
  const theme = getTheme()

  useEffect(function() {
    window.addEventListener('resize', function() {
      setWidth(window.innerWidth - 50)
    })
  }, [])

  useEffect(async function () {
    console.log(client)
    if (state.currentSymbol) {}
  }, [state.currentSymbol])

  return (
    <ChartScreen>
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        theme={theme === 'dark' ? Themes.DARK : Themes.LIGHT}
        locale="en"
        width={width}
        height={500}
      />
    </ChartScreen>
  )
}

const ChartScreen = styled.div`
`

export default App

