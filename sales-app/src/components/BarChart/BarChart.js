import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import HandleDrillDown from '../HandleDrillDown/HandleDrillDown'

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
        displayLegend: true,
        legendPosition: 'bottom',
        maintainAspectRatio: false,
        handleClick:false,
        labels: ['Total', 'Completed', 'Pending', 'Error'],
    }
    

    render() {
        return (
          <div className="chart" id="chart">
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
                    },
                    
                  ],
                


        

              }}
    
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: 'Transactions',
                  defaultProps: this.props.maintainAspectRatio
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                  labels: {
                    fontColor:'rgb(95, 95, 95)'
                  },
                  

                  },

                  events: HandleDrillDown,
                

                  

                  // events: ['click'], onClick: function(event) {

                  //   var data_type = this.state.chartData.data.label.getElementAtEvent(event)
                  //    var data_data = this.state.chartData.data.datasets.data.getElementAtEvent(event)
                  //                     if(data_type = undefined) {
                    
                  //                        var label = this.state.BarChart.data.datasets.label[data_type._index];
                  //                        console.log("failed");
                    
                                       
                    
                  //                      if(data_data) {
                    
                  //                       var value = this.state.BarChart.data.datasets.data[data_data._datasetIndex].data[data_data._index];
                    
                    
                                       
                                       
                                      
                  //                     console.log(value)
                  //                     console.log(label)


         
                  //                      }
                  //                     }
                  //                   },
                                     
                          

                                    

                
              
                





                  

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
    
                },


    

                
              }}
              
            />
            <br></br>
            <hr></hr>
          </div>
        )
      }
    }
  
  
    
    export default BarChart;