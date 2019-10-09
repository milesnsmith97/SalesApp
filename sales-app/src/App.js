import React, { Component } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';


import './App.css';
import BarChart from './components/BarChart/BarChart';
import ButtonAppBar from './components/NavBar/NavBar';
import Loading from './components/Loading';
// import SignInSide from './components/SignIn/SignIn';

import Logo from './components/img/MorrisonsLogo.png';

///////////////// API links:///////////////////////////////

const API_EVERYTHING = 'https://cors-anywhere.herokuapp.com/https://qmyxgbg5bl.execute-api.eu-west-2.amazonaws.com/dev/getlatest'

// const API_EVERYTHING = 'https://demo3341101.mockable.io/'  // this is mock data with more channels

// const API_ONLINE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_online_cpe_process'

// const API_WHOLESALE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_wholesale_cpe_process'

// const API_FOLDEALS = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_foldeals_cpe_process'

////////////////////////////////////////////////////////////


class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      isLoaded: false,
      chartData: [],
        };
  }

  componentDidMount() {
    this.getChartData();
  }
  
  /// Calls API's and maps for stacked bar chart ///
  async getChartData(){
    axios.all([axios.get(API_EVERYTHING)])
      .then(await axios.spread((everything) => {
        this.setState({
          isLoaded: true,
          chartData: Object.assign({}, { everything })
        })
        // console.log("everything: "+ everything)
      }))
  }

  




  render() {
    var { isLoaded } = this.state; //access properties within the state
    if (!isLoaded) {              //If not loaded display loading div
      return (
        <div style={{ height: '100%' }} className="Loading-Container">

          <div className="Loading-Circle">

            <div className="loading-Logo">
                <img src={Logo} className="App-logo" alt="logo" />

                  <Loading/>
            </div>

          </div>

        </div>
        )
      } 
    else {
      return (
        
        // <div style={{ height: '100%' }} className="Main-App">
        <div>
          <div>
              <ButtonAppBar />
          </div>

          <main style={{ marginTop: '50px' }}>

            <div className="Chart-Style">
            {/* <div> */}
                <BarChart chartData={this.state.chartData} />
            </div> 

          </main>

        </div>
      );
      
    }
    
  }

}

export default App;
