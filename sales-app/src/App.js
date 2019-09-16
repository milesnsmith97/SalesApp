import React, { Component } from 'react';
import Chart from './components/Chart';
import axios from 'axios';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
// import DropDownSelector from './components/DropdownSelector/DropDownSelector';

///////////////// API links:///////////////////////////////

// const API_URL = 'https://raw.githubusercontent.com/lauzrussell/POC/master/data';

const API_URL_TOTAL = 'https://cors-anywhere.herokuapp.com/https://efvmrqvf3e.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_total/';
const API_URL_COMPLETED = 'https://cors-anywhere.herokuapp.com/efvmrqvf3e.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_completed/';
const API_URL_PENDING = 'https://cors-anywhere.herokuapp.com/efvmrqvf3e.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_pending/';
const API_URL_ERROR = 'https://cors-anywhere.herokuapp.com/efvmrqvf3e.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_error/'

///////////////////////////////////////////////////////////

class App extends Component {
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

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

  async componentDidMount() {
    axios.all([axios.get(API_URL_TOTAL),
    axios.get(API_URL_ERROR),
    axios.get(API_URL_PENDING),
    axios.get(API_URL_COMPLETED)])
      .then(await axios.spread((firstResponse, secondResponse, thirdResponse, fourthResponse) => {
        this.setState({
          isLoaded: true,
          chartData: Object.assign({}, { firstResponse, secondResponse, thirdResponse, fourthResponse })
        })
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
            {/* <p>This is the page content</p> */}
          </main>

          <div className="App-Header-Page-Title">
            <header className="Page-Header">
              <p>DASHBOARD</p>
            </header>
            <br></br>
            <div className="Chart-Style">
              <Chart chartData={this.state.chartData} />
            </div>
            <br></br>
          </div>
        </div>
      );
    }
  }
}

export default App;
