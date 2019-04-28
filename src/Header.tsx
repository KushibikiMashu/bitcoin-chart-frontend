import React from 'react';
import {Helmet} from 'react-helmet'

const Header: React.FC = () => (
    <Helmet>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="ビットコイン, bitcoin, Bitcoin, exchange, 取引所, 価格 price, チャート, chart"/>
        <meta name="description" content="ビットコインの価格を取引所ごとに比較しています。"/>
        <meta property="og:title" content="ビットコインチャート.info"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://bitcoin-chart.info/"/>
        <meta property="og:image" content="http://bitcoin-chart.info/assets/image/thumbnail.jpg"/>
        <meta property="og:site_name" content="ビットコインチャート.info"/>
        <meta property="og:description" content="ビットコインの価格を取引所ごとに比較しています。"/>
        <title>ビットコインチャート.info</title>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>

        {/*Twitter共通設定*/}
        <meta name="twitter:card" content="photo"/>
        <meta name="twitter:site" content="@Panda_Program"/>
        <meta name="twitter:player" content="@Panda_Program"/>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              type="text/css"/>
    </Helmet>
)

export default Header