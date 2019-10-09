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

        titleFontColor: 'rgb(95, 95, 95)',
        stackedBars: true,
        AxisAtZero: true,
        datasetArray: [],
        yscaleLabelText: '(£)',
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
  
      // console.log("resutkeyslength"+resultKeys.length)
      
      for (var i=0; i<resultKeys.length; i++) {
        
        var index = 0
        var scenarioName = resultKeys[i]
        var lab = scenarioName.replace(/_|cpe|sales|process/g, "" )
        lab =lab.replace(/fold/g, "FOL D")
        lab = lab.replace(lab[0], lab[0].toUpperCase())
        var scenarioObject = result[scenarioName]

        var orderArray = ['pending', "error", "completed", "total"]
        
        
        var newDataset = {
          label: [lab],
          data: [],
          backgroundColor: this.props.colors[i],
          borderColor: this.props.colors[i],
          borderWidth: 1,
        }     
        // console.log(JSON.stringify(newDataset))
          
       for(var j = 0; j<orderArray.length; j++)  {

          var status = orderArray[j]
        
          var obj = scenarioObject[index][status]
  
        newDataset.data[j] = obj
        
        
      } 
      datasetArray.push(newDataset)
    }

//// onClick 1 ////
    // function newLegendClickHandler(e, legendItem) {
    //   var index = legendItem.datasetIndex;
    //   var ci = this.chart;
    //   var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
    
    //   ci.data.datasets.forEach(function(e, i) {
    //     var meta = ci.getDatasetMeta(i);
    
    //     if (i !== index) {
    //       if (!alreadyHidden) {
    //         meta.hidden = meta.hidden === null ? !meta.hidden : null;
    //       } else if (meta.hidden === null) {
    //         meta.hidden = true;
    //       }
    //     } else if (i === index) {
    //       meta.hidden = null;
    //     }
    //   });
    
    //   ci.update();
    // };


//// onClick 2 ////
    function newLegendClickHandler(e, legendItem) {
      var index = legendItem.datasetIndex;
      var ci = this.chart;
      var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;       
      var anyOthersAlreadyHidden = false;
      var allOthersHidden = true;
    
      // figure out the current state of the labels
      ci.data.datasets.forEach(function(e, i) {
        var meta = ci.getDatasetMeta(i);
    
        if (i !== index) {
          if (meta.hidden) {
            anyOthersAlreadyHidden = true;
          } else {
            allOthersHidden = false;
          }
        }
      });
    
      // if the label we clicked is already hidden 
      // then we now want to unhide (with any others already unhidden)
      if (alreadyHidden) {
        ci.getDatasetMeta(index).hidden = null;
      } else { 
        // otherwise, lets figure out how to toggle visibility based upon the current state
        ci.data.datasets.forEach(function(e, i) {
          var meta = ci.getDatasetMeta(i);
    
          if (i !== index) {
            // handles logic when we click on visible hidden label and there is currently at least
            // one other label that is visible and at least one other label already hidden
            // (we want to keep those already hidden still hidden)
            if (anyOthersAlreadyHidden && !allOthersHidden) {
              meta.hidden = true;
            } else {
              // toggle visibility
              meta.hidden = meta.hidden === null ? !meta.hidden : null;
            }
          } else {
            meta.hidden = null;
          }
        });
      }
    
      ci.update();
    }


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
                },

                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                  labels: {
                    fontColor:this.props.titleFontColor,
                    fontSize: this.props.legendFontSize,
                  },
                  onClick:newLegendClickHandler,
                  // onClick:defaultLegendClickHandler,
                },

                scales: {

                  yAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      // callback: function(value) {
                      //   return '£' + value;},
                      beginAtZero: this.AxisAtZero,
                      fontSize: this.props.tickFontSize,
                    },
                  }],

                  xAxes: [{
                    stacked: this.props.stackedBars,
                    ticks: {
                      fontSize: this.props.tickFontSize,
                      beginAtZero: this.AxisAtZero
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