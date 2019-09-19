import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import ChartSelect from './components/ChartSelect/ChartSelect';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
// import PolarChart from './components/PolarChart/PolarChart';
// import Chart from './components/Chart';


///////////////// API links:///////////////////////////////

// const API_EVERYTHING = 'https://cors-anywhere.herokuapp.com/https://qmyxgbg5bl.execute-api.eu-west-2.amazonaws.com/dev/getlatest'

const API_ONLINE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_online_cpe_process'

const API_WHOLESALE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_wholesale_cpe_process'

const API_FOLDEALS = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_foldeals_cpe_process'

///////////////////////////////////////////////////////////

// const lineChartOne = props => {
//     let chartOneClasses = 'chart-one';
//     if (props.show) {
//         chartOneClasses = 'chart-one-open';
//     }
//     return (
//       <div className={chartOneClasses}>
//         <LineChart />
//       </div>
//     )}

class App extends Component {
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  // chartSelectClickHandler = () => {
  //   this.setState((prevState) => {
  //     return { lineChartOneOpen: !prevState.lineChartOneOpen };
  //   })
  // }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chartData: [],
      sideDrawerOpen: false,
    };
  }

                      /// Calls API's and maps for stacked bar chart ///

  async componentDidMount() {
    axios.all([axios.get(API_ONLINE),
    axios.get(API_WHOLESALE),
    axios.get(API_FOLDEALS)])
      .then(await axios.spread((firstResponse, secondResponse, thirdResponse) => {
        this.setState({
          isLoaded: true,
          chartData: Object.assign({}, { firstResponse, secondResponse, thirdResponse })
         
        })
        console.log({firstResponse, secondResponse, thirdResponse})
      }
      ))
  }

  render() {
    var { isLoaded } = this.state; //access properties within the state
    if (!isLoaded) { //If not loaded display loading div
      return <div>Loading...</div>
    } else {

      let backdrop;

      if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      return (
        <div style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '64px' }}>
        
          </main>

          <div className="App-Header-Page-Title">
            <header className="Page-Header">
              <p>DASHBOARD</p>
              {/* <SelectBox /> */}
            </header>
          </div>
            <br></br>
            <div className="Chart-Style">
              <BarChart chartData={this.state.chartData} />
            
              
            </div>
            <div className="Chart-Style">
            <div className="Button-Container">
                <div className="dropdown">
                  <p><ChartSelect /></p>
                </div>
              </div>

              <LineChart chartData={this.state.chartData} />
            </div>

            
            <br></br>
          
        </div>
      );
    }
  }
}

export default App;
