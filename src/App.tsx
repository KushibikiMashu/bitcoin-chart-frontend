import React from 'react'
import './App.css'
import HtmlHeader from './HtmlHeader'
import Navibar from './Navibar'
import Footer from './Footer'
import Detail from './Detail'
import Chart from './Chart'

const App: React.FC = () => (
  <div>
    <HtmlHeader />
    <Navibar />
    <Chart />
    <Detail />
    <Footer />
  </div>
)

export default App
