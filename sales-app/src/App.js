import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
// import OnClick from './components/OnClickFunction/OnClick'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import ChartSelect from './components/ChartSelect/ChartSelect';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
import DrillDownDisplayOff from './components/DrillDownDisplay/DrillDownDisplayOff';
import DrillDownDisplayOn from './components/DrillDownDisplay/DrillDownDisplayOn';
// import PolarChart from './components/PolarChart/PolarChart';
// import Chart from './components/Chart';


///////////////// API links:///////////////////////////////

const API_EVERYTHING = 'https://cors-anywhere.herokuapp.com/https://qmyxgbg5bl.execute-api.eu-west-2.amazonaws.com/dev/getlatest'

const API_ONLINE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_online_cpe_process'

const API_WHOLESALE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_wholesale_cpe_process'

const API_FOLDEALS = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_foldeals_cpe_process'

//////////////// DRILLDOWN Links //////////////////////////

const API_FOLDDEALS_ERROR = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/query/drilldown_sales_foldeals_cpe_process_error'  

const API_ONLINE_ERROR = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/query/drilldown_sales_wholesale_cpe_process_error'

const API_WHOLESALE_ERROR = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/query/drilldown_sales_online_cpe_process_error'

///////////////////////////////////////////////////////////


class App extends Component {
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  drillDownToggleClickHandler = () => {
    this.setState((prevState)  => {
      return { drillDownOpen: !prevState.drillDownOpen };

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
      drillDownData: [],
      sideDrawerOpen: false,
      drillDownView:false
      

    };
  }

                      /// Calls API's and maps for stacked bar chart ///

  componentDidMount() {
    this.getChartData();
    this.getDrillDownData();
  }

  async getChartData() {
    axios.all([axios.get(API_ONLINE),
      axios.get(API_WHOLESALE),
      axios.get(API_FOLDEALS),
      axios.get(API_EVERYTHING)])
        .then(await axios.spread((firstResponse, secondResponse, thirdResponse, fourthResponse) => {
          this.setState({
            isLoaded: true,
            chartData: Object.assign({}, { firstResponse, secondResponse, thirdResponse, fourthResponse })
           
          })
          console.log({firstResponse, secondResponse, thirdResponse, fourthResponse})
        }
        ))
  }

  async getDrillDownData() {
    axios.all([axios.get(API_FOLDDEALS_ERROR),
    axios.get(API_ONLINE_ERROR),
    axios.get(API_WHOLESALE_ERROR)])
      .then(await axios.spread((reponseone, responsetwo, responsethree ) => {
        this.setState({
          isLoaded: true,
          drillDownData: Object.assign({}, { reponseone, responsetwo, responsethree })
         
        })
        console.log({reponseone, responsetwo, responsethree})
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
            <DrillDownDisplayOn  />
            <DrillDownDisplayOff/>
              <BarChart chartData={this.state.chartData} />
              {/* <OnClick OnClick={this.state.OnClick}                  /> */}

              
            </div>
            <div className="Chart-Style">
              <div className="Button-Container">
                  <div className="dropdown">
                    <ChartSelect />
                  </div>


                  <LineChart chartData={this.state.chartData} />
              </div>


              
            </div>
           
            
            <br></br>
            <DrillDownDisplayOff/>
            <DrillDownDisplayOn/>
          
        </div>
      );
      
    }
    
  }
}

export default App;
