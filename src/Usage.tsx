import React from 'react'

const Usage: React.FC = () => (
  <div className="row">
    <div className="col-md-12">
      <h1 className="text-center text-primary h3">チャートの使い方</h1>
      <div className="text-center">
        <p>
          チャート右上の <i className="fa d-inpne fa-lg fas fa-bars" />{' '}
          をクリックすると、各種形式でデータをダウンロードすることができます。
        </p>
        <p>チャート下の凡例をクリックすると、クリックした色の折れ線グラフが非表示になります。</p>
        <p>（注）All表示の場合、1時間の平均を表示するため、金額には小数点が表示されます。</p>
        <p>なお、チャートは2018年4月19日からのデータを表示しています。</p>
      </div>
    </div>
  </div>
)

export default Usage
