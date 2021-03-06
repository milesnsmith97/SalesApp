import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

class PolarChart extends Component {

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
            <Polar
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
                    ],
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
              }}
            />
            <br></br>
            <hr></hr>
          </div>
        )
      }
    }
    
    export default PolarChart;