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
        legendPosition: 'right',
        maintainAspectRatio: false,
        labels: [
                'Pending', 
                'Error', 
                'Completed', 
                'Total'
              ],
        isResponsive: true,
        colors: [
                'rgba(45, 145, 245, 0.5)',  
                'rgba(235, 42, 194, 0.5)', 
                'rgba(255, 195, 0, 0.5)',   
                'rgba(0, 0, 204, 0.5)',   
                'rgba(179, 0, 0, 0.5)',   
                'rgba(255, 153, 0, 0.5)'
              ],
        // LegendTitles: [
        //               'Online', 
        //               'Wholesale', 
        //               'FOL Deals'
        //             ],
        titleFontColor: 'rgb(95, 95, 95)',
        stackedBars: true,
        AxisAtZero: true,
        datasetArray: [],
        yscaleLabelText: 'Cost (£)',
        xscaleLabelText: 'Status',
        displayScaleLabel: true,
        yscaleLabelFontSize: 20,
        tickFontSize: 17,
        legendFontSize: 15,
      }
    

    
    render() {
      
      var result = this.state.chartData.everything.data
      var resultKeys = Object.keys(result)
      var datasetArray =this.props.datasetArray
      String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
      console.log("resutkeyslength"+resultKeys.length)
      
      for (var i=0; i<resultKeys.length; i++) {
        
        var index = 0
        var scenarioName = resultKeys[i]
        var lab = scenarioName.replace(/_|cpe|sales|process/g, "" )
        lab =lab.replace(/fold/g, "FOL D")
        lab = lab.replace(lab[0], lab[0].toUpperCase())
        var scenarioObject = result[scenarioName]
        var scenarioObjectKey = Object.keys(scenarioObject)

        var orderArray = ['pending', "error", "completed", "total"]
        
        
        var newDataset = {
          label: [lab],
          data: [],
          backgroundColor: this.props.colors[i],
          borderColor: this.props.colors[i],
          borderWidth: 1,
        }     
        console.log(JSON.stringify(newDataset))
          
       for(var j = 0; j<orderArray.length; j++)  {

          var status = orderArray[j]
        
          var obj = scenarioObject[index][status]
  
        newDataset.data[j] = obj
        
        
      } 
      datasetArray.push(newDataset)
    

  }
    
      // console.log("dataSetArray: "+JSON.stringify("LOOKHERE: "+this.props.dataSetArray))
      

  // }
      // const chartLabels = [ 'Pending', 'Error', 'Completed', 'Total']
        return (
          <div className="chart" id="chart" height="100%">
            <Bar id="barChart"
              data={{
                labels: this.props.labels,
                datasets: this.props.datasetArray
                
              }}
    
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: this.props.titleText,
                  fontSize: this.props.titleFontSize,
                  defaultProps: this.props.maintainAspectRatio,
                  responsive: this.props.isResponsive,
                  fontSize: this.props.titleFontSize,
                },
                tooltips: {
                  enabled: true,
                  callbacks: {
                    label: function(tooltipItem, data) {
                      var label = data.labels[tooltipItem.index];
                      var val = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                      return label + ':' + val  + ", sum: £"+ Math.floor(Math.random() * 300) + 1+ ', (' + (100 * val / 130).toFixed(0) + '%),'
                    }
                  }
            
                }
              ,
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                  labels: {
                    fontColor:this.props.titleFontColor,
                    fontSize: this.props.legendFontSize,
                  }
                },

                scales: {
                  yAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      beginAtZero: this.AxisAtZero,
                      fontSize: this.props.tickFontSize,
                    },
                    scaleLabel: {
                      display: this.props.displayScaleLabel,
                      labelString: this.props.yscaleLabelText,
                      fontSize: this.props.yscaleLabelFontSize,
                    },
                  }],
                  xAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      fontSize: this.props.tickFontSize,
                      beginAtZero: this.AxisAtZero
                    },
                    scaleLabel:{
                      
                    },
                  }],
    
                },
                


    

                
              }}
              
            />

          </div>

        )
      }
    }
  
  
    
    export default BarChart;