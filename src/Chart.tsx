import React from 'react'
import StockChart from './StockChart'

const Chart: React.FC = () => (
  <div className="text-center">
    <div className="chart px-sm-5 py-4">
      <StockChart />
    </div>
    <div className="container pt-5 mt-140px">
      <h1 className="text-primary h3">ビットコインチャート</h1>
      <p>このチャートでは、ビットコインの15分ごとの金額を各取引所ごとに比較しています。</p>
      <p>価格は15分毎の購入価格です。チャートは15分ごとに更新されます。</p>
    </div>
  </div>
)

export default Chart
