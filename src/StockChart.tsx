import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios'
import localforage from 'localforage'
import { setupCache } from 'axios-cache-adapter'

const SPREADSHEET = 'https://script.google.com/macros/s/AKfycbzymYPlML4oiQopSAHEUl7B9Do-W-ECADJ6zKuCYR7g9wkHAJg/exec'
const EXCHANGE_NAMES = ['zaif', 'bitflyer', 'coincheck']

const store = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'app',
  storeName: 'bitcoinchart',
  version: 1,
})

const cache = setupCache({
  maxAge: 5 * 60 * 1000,
  store,
})

const api = axios.create({
  adapter: cache.adapter,
})

const initialOptions: Highcharts.Options = {
  chart: {
    height: 525,
  },
  title: {
    text: '国内主要取引所毎のビットコイン金額',
  },
  rangeSelector: {
    allButtonsEnabled: false,
    selected: 0,
    buttons: [
      {
        type: 'minute', // 分単位 (0)
        count: 1440, // 単位は分
        text: '1d', // 一日分
      },
      {
        type: 'minute', // 日単位 (1)
        count: 1440 * 7, // 1週間分
        text: '7d',
      },
      {
        type: 'minute', // 日単位 (2)
        count: 1440 * 7 * 2, // 2週間分
        text: '2w',
      },
      {
        type: 'all', // 全データ(3)
        count: 1,
        text: 'All',
      },
    ],
  },
  yAxis: {
    plotLines: [
      {
        value: 0,
        width: 2,
        color: 'white',
      },
    ],
    opposite: false,
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    series: {
      compare: 'price',
      showInNavigator: true,
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,1f}</b><br/>',
    valueDecimals: 2,
    valuePrefix: '¥',
    split: true,
  },
  global: {
    useUTC: false,
  },
  lang: {
    thousandsSep: ',',
    numericSymbols: undefined,
  },
}

function useFetchOptions(): Highcharts.Options {
  const [options, updateOptions] = useState(initialOptions)

  useEffect(() => {
    async function fetchSeries() {
      try {
        const res = await api({ url: SPREADSHEET, method: 'get' })
        const data = res.data
        const newOptions: Highcharts.Options = {
          ...initialOptions,
          series: EXCHANGE_NAMES.map(name => ({
            type: 'line',
            name,
            data: data[name],
          })),
        }
        updateOptions(newOptions)
      } catch (e) {
        throw Error('Something is wrong with the connection to Spreadsheet.')
      }
    }

    fetchSeries()
  }, [])

  return options
}

function useTimer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000)
  })

  return count
}

const StockChart: React.FC = () => {
  const options = useFetchOptions()
  const count = useTimer()

  if (!options.series)
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 48,
        }}
      >
        You are waiting for {count} seconds
        <br />
        Now Loading...
      </div>
    )

  return <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
}

export default StockChart
