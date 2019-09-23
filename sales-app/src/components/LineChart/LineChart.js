        import React, {Component} from 'react';
        import { Line } from 'react-chartjs-2';
        import Moment from 'react-moment';

        class LineChart extends Component {

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
        labels: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
            ]
        }

        render() {
        return (
            <div>
                <Line
                    data={{
                        datasets: [
                            {
                                label:'Total',
                                data: 
                                // [this.state.chartData.firstResponse.data.total,
                                   [ this.state.chartData.fourthResponse.data.created_dt],
                                backgroundColor:
                                'rgba(45, 145, 245, 0)',
                                borderColor: 
                                'rgba(45, 145, 245, 1)',
                                borderWidth: 2,
                            },
                            {
                                label:'Completed',
                                data: [this.state.chartData.firstResponse.data.completed,],
                                backgroundColor:
                                'rgba(80, 243, 43, 0)',
                                borderColor: 
                                'rgba(80, 243, 43, 1)',
                                borderWidth: 2,
                            },
                            {
                                label:'Pending',
                                data: [this.state.chartData.firstResponse.data.pending,],
                                backgroundColor:
                                'rgba(243, 168, 43, 0)',
                                borderColor: 
                                'rgba(243, 168, 43, 1)',
                                borderWidth: 2,
                            },
                            {
                                label:'Error',
                                data: [this.state.chartData.firstResponse.data.error,],
                                backgroundColor:
                                'rgba(199, 0, 57, 0)',
                                borderColor: 
                                'rgba(199, 0, 57, 1)',
                                borderWidth: 2,
                          
                            }
                        ]
                        }}

                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Wholesale Filter View',
                            fontSize: 20,
                            defaultProps: this.props.maintainAspectRatio
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            labels: {
                                fontColor: 'rgb(95, 95, 95)'
                            }
                        },
                        scales: {
                            xAxes: [{
                                stacked: false,
                                ticks: {
                                    beginAtZero: true
                                },
                                // type:'time',
                                // time: {
                                //     unit: 'month'
                                // }
                            }],
                            yAxes: [{
                                stacked:false,
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
        };

export default LineChart;