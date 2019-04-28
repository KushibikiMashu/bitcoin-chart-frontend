import React from 'react';
import './theme.css';

const App: React.FC = () => {
  return (
      <body>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary text-left">
              <div className="container">
                  <a className="navbar-brand" href="">
                      <i className="fa d-inline fa-lg fa-bitcoin"></i>
                      <b style={{fontSize:27, position: "absolute", bottom: 11}}>itcoin Chart</b>
                  </a>
                  <div className="collapse navbar-collapse text-center justify-content-end"
                       id="navbar2SupportedContent"></div>
              </div>
          </nav>
          <div className="text-center py-3" style={{paddingTop:0}}>
              <div className="container py-5">
                  <h1 className="text-center display-3 text-primary" style={{fontSize:24}}>ビットコインチャート</h1>
                  <ul style={{listStyle:'none', textAlign: 'center',padding: '0 20'}}>
                      <li style={{paddingBottom:10}}>このチャートでは、ビットコインの15分ごとの金額を各取引所ごとに比較しています。</li>
                      <li style={{paddingBottom:10}}>価格は15分毎の購入価格です。チャートは15分ごとに更新されます。</li>
                  </ul>
                  <div id="container" style={{height: 400, minWidth: 310}}></div>
              </div>
          </div>
          <div className="py-5" style={{paddingBottom: 1}}>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <h1 className="text-center display-3 text-primary" style={{fontSize:24}}>チャートの使い方</h1>
                          <ul style={{listStyle:'none', textAlign: 'center',padding: '0 20'}}>
                              <li style={{paddingBottom:10}}>チャート右上の<i className="fa d-inline fa-lg fas fa-bars"
                                                                        style={{fontSize: 18,paddingBottom:10}}/>をクリックすると、各種形式でデータをダウンロードすることができます。
                              </li>
                              <li style={{paddingBottom:10}}>チャート下の凡例をクリックすると、クリックした色の折れ線グラフが非表示になります。</li>
                              <li style={{paddingBottom:10}}>（注）All表示の場合、1時間の平均を表示するため、金額には小数点が表示されます。</li>
                              <li style={{paddingBottom:10}}>なお、チャートは2018年4月19日からのデータを表示しています。</li>
                          </ul>
                      </div>
                      <div className="col-md-12" style={{textAlign: 'center'}}>
                          <h1 className="text-center display-3 text-primary"
                              style={{fontSize:28, paddingTop: 20}}>Twitter Bot</h1>
                          <a className="twitter-timeline" data-border-color="#000000"
                             href="https://twitter.com/Bitcoin_Exchg?ref_src=twsrc%5Etfw" style={{padding: '0 auto', width:440, height:620}}>ビットコイン価格
                                                                                                                  by
                                                                                                                  Bitcoin_Exchg</a>
                          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                      </div>
                      <div className="col-md-12">
                          <h1 className="text-center display-3 text-primary"
                              style={{fontSize:18, paddingTop: 16}}>作者について</h1>
                          <ul style={{listStyle:'none', textAlign: 'center', padding: '0 20'}}>
                              <li style={{paddingBottom:10}}>
                                  作者は
                                  <a href="https://twitter.com/panda_program">
                                      @Panda_Program
                                      <i className="fa d-inline fa-lg fab fa-twitter"></i>
                                  </a>
                                  です。
                                  <br/>
                                      上記ビットコインのtwitter botも運営しています。
                                      <br/>
                              </li>
                              <li style={{paddingBottom:10}}>本サイトでは<a
                                  href="http://xn--eck3a9bu7cul981xhp9b.com/">BITCOIN相場</a>様のデータを使用しています。
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-primary text-white py-2" id="footer">
              <div className="container" style={{fontSize: 16, textAlign: 'center', padding: '10 0'}}>
                  Created by
                  <a href="https://twitter.com/Panda_Program" target="_blank" style={{color:'white'}}>
                      @Panda_Program
                      <i className="fa fa-fw fa-twitter fa text-white" id="twitter-icon"></i>
                  </a>
              </div>
          </div>
      </body>
          );
}

export default App;
