import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';



class BarChart extends Component {


  

    constructor(props) {
        
        super(props);
        this.state = {
            chartData: props.chartData,
            BarChart:props.BarChart
            
        }
        

    }

    
  

    static defaultProps = {
        displayTitle: true,
        titleText: 'Transactions',
        titleFontSize: 25,
        displayLegend: true,
        legendPosition: 'bottom',
        maintainAspectRatio: false,
        labels: [
                'Pending', 
                'Error', 
                'Completed', 
                'Total'
              ],
        isResponsive: true,
        colors: [
                'rgba(45, 145, 245, 0.5)',  // Blue
                'rgba(235, 42, 194, 0.5)',  // Wholesale
                'rgba(255, 195, 0, 0.5)'    // FOL Deals
              ],
        LegendTitles: [
                      'Online', 
                      'Wholesale', 
                      'FOL Deals'
                    ],
        titleFontColor: 'rgb(95, 95, 95)',
        stackedBars: true,
        AxisAtZero: true,
    }
    

    
    render() {
      // const chartLabels = [ 'Pending', 'Error', 'Completed', 'Total']
        return (
          <div className="chart" id="chart" height="100%">
            <Bar id="barChart"
              data={{
                labels: this.props.labels,
                datasets: [
                    { ///// ONLINE /////
                      label: this.props.LegendTitles[0],
                      data: [
                        this.state.chartData.response.data.sales_online_cpe_process.pending,
                        this.state.chartData.response.data.sales_online_cpe_process.error,
                        this.state.chartData.response.data.sales_online_cpe_process.completed,
                        this.state.chartData.response.data.sales_online_cpe_process.total,
                      ],
                      backgroundColor: this.props.colors[0],
                      borderColor: this.props.colors[0],
                      borderWidth: 1,
                    },

                    { ///// WHOLESALE /////
                      label: this.props.LegendTitles[1],
                      data: [
                        this.state.chartData.response.data.sales_wholesale_cpe_process.pending,
                        this.state.chartData.response.data.sales_wholesale_cpe_process.error,
                        this.state.chartData.response.data.sales_wholesale_cpe_process.completed,
                        this.state.chartData.response.data.sales_wholesale_cpe_process.total,
                      ],
                      backgroundColor: 
                        this.props.colors[1],
                      borderColor: 
                        this.props.colors[1],
                      borderWidth: 1,
                    },
                    
                    { ///// FOLD DEALS /////
                      label: this.props.LegendTitles[2],
                      data: [
                        this.state.chartData.response.data.sales_foldeals_cpe_process.pending,
                        this.state.chartData.response.data.sales_foldeals_cpe_process.error,
                        this.state.chartData.response.data.sales_foldeals_cpe_process.completed,
                        this.state.chartData.response.data.sales_foldeals_cpe_process.total,
                      ],
                      backgroundColor: 
                        this.props.colors[2],
                      borderColor: 
                        this.props.colors[2],
                      borderWidth: 1,
                    },
                    
                  ],
                


        

              }}
    
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: this.props.titleText,
                  fontSize: this.props.titleFontSize,
                  defaultProps: this.props.maintainAspectRatio,
                  responsive: this.props.isResponsive
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                  labels: {
                    fontColor:this.props.titleFontColor,
                  }
                },

                scales: {
                  yAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      beginAtZero: this.AxisAtZero
                    }
                  }],
                  xAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      beginAtZero: this.AxisAtZero
                    }
                  }]
    
                },
                


    

                
              }}
              
            />

            <br></br>
            {/* <hr></hr> */}
          </div>

        )
      }
    }
  
  
    
    export default BarChart;