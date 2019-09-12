import React, {Component} from 'react';
import {Bar, Line, Pie, Polar } from 'react-chartjs-2';

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
        width: 50

    }

    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}

                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Transactions',
                            fontSize:25
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
                <Polar
                    data={this.state.chartData}

                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Transactions',
                            fontSize:25
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
            </div>
        )
    }
}

export default Chart;