        import React, {Component} from 'react';
        import { Line } from 'react-chartjs-2';
        // import Moment from 'react-moment';

        class LineChart extends Component {

        constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
        }

        static defaultProps = {
            displayTitle: true,
            titleText: ['Wholesale Filter View',],
            titleFontSize: 25,
            titleFontColor: 'rgb(95, 95, 95)',
            displayLegend: true,
            legendPosition: 'bottom',
            maintainAspectRatio: false,
            isResponsive: true,
            labels: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
                ],
            displayScaleLabel: true,
            scaleLabelText: 'Process Status / Count',
            colors: [
                    'rgba(45, 145, 245, 1)',    // Blue 
                    'rgba(80, 243, 43, 1)',     // Green
                    'rgba(243, 168, 43, 1)',    // Yellow
                    'rgba(199, 0, 57, 1)',      // Red
                    ],
            colorFill:
                    'rgba(45, 145, 245, 0)',
            LegendTitles: [
                        'Total', 
                        'Completed', 
                        'Pending',
                        'Error',
                        ],
            stackedBars: true,
            AxisAtZero: true,
        }

        render() {
        return (
            <div>
                <Line
                    data={{
                        datasets: [
                            {
                                label:this.props.LegendTitles[0],
                                data: this.state.chartData.response.data.sales_online_cpe_process.total,
                                //    [ this.state.chartData.response.data.created_dt],
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [0],
                                borderWidth: 2,
                            },
                            {
                                label:this.props.LegendTitles[1],
                                data: this.state.chartData.response.data.sales_online_cpe_process.completed,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [1],
                                borderWidth: 2,
                            },
                            {
                                label:this.props.LegendTitles[2],
                                data: this.state.chartData.response.data.sales_online_cpe_process.total,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [2],
                                borderWidth: 2,
                            },
                            {
                                label:this.props.LegendTitles[3],
                                data: this.state.chartData.response.data.sales_online_cpe_process.error,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [3],
                                borderWidth: 2,
                          
                            }
                        ]
                        }}

                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleText,
                            fontSize: this.props.titleFontSize,
                            responsive: true,
                            defaultProps: this.props.maintainAspectRatio
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                            labels: {
                                fontColor: this.props.titleFontColor
                            }
                        },
                        scales: {
                            xAxes: [{
                                stacked: this.props.stackedBars,
                                ticks: {
                                    beginAtZero: this.props.AxisAtZero
                                },
                                // type:'time',
                                // time: {
                                //     unit: 'month'
                                // }
                            }],
                            yAxes: [{
                                stacked: this.props.stackedBars,
                                ticks: {
                                    beginAtZero: this.props.AxisAtZero
                                },
                                scaleLabel: {
                                    display: this.props.displayScaleLabel,
                                    labelString: this.props.scaleLabelText
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