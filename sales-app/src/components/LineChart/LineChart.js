        import React, {Component} from 'react';
        import { Line } from 'react-chartjs-2';
        import './LineChart.css';
        
    
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
            titleFontSize: 17,
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
            datasetOne: [20, 25, 32, 33, 35, 40, 41, 42, 44, 40, 35, 37, 40, 39, 36, 35, 34, 30,28, 25, 22, 20, 15, 11],
            datasetTwo: [2, 3, 6, 5, 8, 6, 7, 10, 12, 12, 12, 14, 16, 16, 16, 17, 18, 18,18, 20, 18, 13, 10, 10],
            datasetThree: [8, 9, 4, 8, 8, 10,14, 18, 20, 22, 25, 29, 35, 39, 45, 54, 63, 66,69, 70, 73, 74, 79, 84],
            datasetFour: [30, 37, 42, 46, 50, 60, 66, 67, 70, 72, 73, 75, 80, 81, 84, 89, 90, 91,92, 94, 95, 95, 96, 100],
        }

        render() {
        return (
            <div className="chart" height="100%">
                <Line
                    data={{
                        labels: ["00:00", "01:00", "02:00","03:00", "04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
                        datasets: [
                            {
                                label:"Pending",
                                data: this.props.datasetOne,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [1],
                                borderWidth: 2,
                            },
                            {
                                label:"Error",
                                data: this.props.datasetTwo,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [2],
                                borderWidth: 2,
                            },
                            {
                                label:"Completed",
                                data: this.props.datasetThree,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [3],
                                borderWidth: 2,
                          
                            },
                            {    
                                label:"Total",
                                data: this.props.datasetFour,
                                backgroundColor: this.props.colorFill,
                                borderColor: this.props.colors [0],
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
                            defaultProps: this.props.maintainAspectRatio,
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
                                stacked: false,
                                ticks: {
                                    beginAtZero: this.props.AxisAtZero
                                },
                            }],
                            yAxes: [{
                                stacked: false,
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