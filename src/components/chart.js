import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

    render () {
        return (
            <div>
                <Line
                    data={this.props.chartData}
                    option={{
                        title:{
                            display: true,
                            text: "Cotação Euro",
                            fontSize:25
                          },
                    }}
                />
            </div>
        );
    }

}

export default Chart;