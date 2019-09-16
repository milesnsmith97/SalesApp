import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    // width: 200,
    // height:100,
    maintainAspectRatio: false

  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={{
            labels: ['All', 'Completed', 'Pending', 'Error'],
            datasets: [{
              data: [this.state.chartData.firstResponse.data.summary_count, this.state.chartData.secondResponse.data.summary_count,
              this.state.chartData.thirdResponse.data.summary_count, this.state.chartData.fourthResponse.data.summary_count],
              backgroundColor: [
                'rgba(93, 155, 234, 0.2)',
                'rgba(138, 234, 93, 0.2)',
                'rgba(235, 127, 42, 0.2)',
                'rbga(235, 42, 42, 0.2)',
              ],
              borderColor: [
                'rgba(93, 155, 234, 1)',
                'rgba(138, 234, 93, 1)',
                'rgba(235, 127, 42, 1)',
                'rbga(235, 42, 42, 1)',
              ],
              borderWidth: 1
            }]
          }
          }

          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Transactions',
              fontSize: 25,
              defaultProps: this.props.maintainAspectRatio
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }]

            }
          }}
        />
        <br></br>
        <hr></hr>
        {/* <Polar
data={this.state.chartData}

options={{
title:{
display:this.props.displayTitle,
// text:'Transactions',
fontSize:25
},
legend:{
display:this.props.displayLegend,
position:this.props.legendPosition
},
}}
/> */}
      </div>
    )
  }
}

export default Chart;