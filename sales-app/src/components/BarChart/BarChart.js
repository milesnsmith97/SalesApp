import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {

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
        maintainAspectRatio: false,
        labels: ['Total', 'Completed', 'Pending', 'Error'],
    }
    

    render() {
        return (
          <div className="chart">
            <Bar
              data={{
                labels: this.props.labels,
                datasets: [
                    { ///// ONLINE /////
                      label: 'Online',
                      data: [
                        this.state.chartData.firstResponse.data.total,
                        this.state.chartData.firstResponse.data.completed,
                        this.state.chartData.firstResponse.data.pending,
                        this.state.chartData.firstResponse.data.error,
                      ]
                      ,
                      backgroundColor: 
                        'rgba(45, 145, 245, 0.5)',
                      borderColor: 
                        'rgba(45, 145, 245, 1)',
                      borderWidth: 1,
                    },
                    { ///// WHOLESALE /////
                      label: 'Wholesale',
                      data: [
                        this.state.chartData.secondResponse.data.total,
                        this.state.chartData.secondResponse.data.completed,
                        this.state.chartData.secondResponse.data.pending,
                        this.state.chartData.secondResponse.data.error,
                      ],
                      backgroundColor: 
                        'rgba(235, 42, 194, 0.5)',
                      borderColor: 
                        'rgba(235, 42, 194, 1)',
                      borderWidth: 1,
                    },
                    { ///// FOLD DEALS /////
                      label: 'Fol Deals',
                      data: [
                        this.state.chartData.thirdResponse.data.total,
                        this.state.chartData.thirdResponse.data.completed,
                        this.state.chartData.thirdResponse.data.pending,
                        this.state.chartData.thirdResponse.data.error,
                      ],
                      backgroundColor: 
                        'rgba(255, 195, 0, 0.5)',
                      borderColor: 
                        'rgba(255, 195, 0, 0.5)',
                      borderWidth: 1,
                    }
                  ]

              //     data: [
              //       // this.state.chartData.firstResponse.data.summary_count, 
              //       // this.state.chartData.secondResponse.data.summary_count,
              //       // this.state.chartData.thirdResponse.data.summary_count, 
              //       // this.state.chartData.fourthResponse.data.summary_count
              //       this.state.chartData.firstResponse.data.total,
              //       this.state.chartData.firstResponse.data.completed,
              //       this.state.chartData.firstResponse.data.pending,
              //       this.state.chartData.firstResponse.data.error,
                    
                    
              //     ],
              //     data: [
              //       this.state.chartData.secondResponse.dataTwo.total,
              //       this.state.chartData.secondResponse.dataTwo.completed,
              //       this.state.chartData.secondResponse.dataTwo.pending,
              //       this.state.chartData.secondResponse.dataTwo.error,
              //     ],
              //     backgroundColor: [
              //       'rgba(93, 155, 234, 0.2)',
              //       'rgba(138, 234, 93, 0.2)',
              //       'rgba(235, 127, 42, 0.2)',
              //       'rgba(235, 127, 42, 0.2)',
              //     ],
              //     borderColor: [
              //       'rgba(93, 155, 234, 1)',
              //       'rgba(138, 234, 93, 1)',
              //       'rgba(235, 127, 42, 1)',
              //       'rgba(235, 127, 42, 1)',
              //     ],
              //     borderWidth: 1,
                // }]
              }}
    
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Transactions',
                  fontSize: 25,
                  defaultProps: this.props.maintainAspectRatio
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                  labels: {
                    fontColor:'rgb(255, 99, 132)'
                  }
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
          </div>
        )
      }
    }
    
    export default BarChart;