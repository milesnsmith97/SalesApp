import React, {Component} from 'react';
import {Bar, Polar } from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps ={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom',
        // width: 200,
        // height:100,
        maintainAspectRatio: false

    }

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}

                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Transactions',
                            fontSize:25,
                            defaultProps:this.props.maintainAspectRatio
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
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
                <Polar
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
                />
            </div>
        )
    }
}

export default Chart;