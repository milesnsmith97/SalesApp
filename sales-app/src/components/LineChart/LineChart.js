        import React, {Component} from 'react';
        import { Line } from 'react-chartjs-2';

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
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
            ]
        }

        render() {
        return (
            <div>
                <Line
                    data={{
                        labels: this.props.labels,
                        datasets: [
                            {
                                label:'Wholesale',
                                data: [
                                    this.state.chartData.secondResponse.data.total,
                                    this.state.chartData.secondResponse.data.completed,
                                    this.state.chartData.secondResponse.data.pending,
                                    this.state.chartData.secondResponse.data.error,
                                ],
                                backgroundColor:
                                'rgba(235, 42, 194, 0)',
                                borderColor: 
                                'rgba(235, 42, 194, 0.5)',
                                borderWidth: 2,
                            },
                            {
                                label:'Online',
                                data: [
                                    this.state.chartData.firstResponse.data.total,
                                    this.state.chartData.firstResponse.data.completed,
                                    this.state.chartData.firstResponse.data.pending,
                                    this.state.chartData.firstResponse.data.error,
                                ],
                                backgroundColor:
                                'rgba(45, 145, 245, 0)',
                                borderColor: 
                                'rgba(45, 145, 245, 1)',
                                borderWidth: 2,
                            }]
                        }}

                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Filter View',
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
                                }
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
        }

        export default LineChart;