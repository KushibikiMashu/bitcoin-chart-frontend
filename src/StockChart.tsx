import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}

const StockChart: React.FC = () => (
    <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
    />
)

export default StockChart