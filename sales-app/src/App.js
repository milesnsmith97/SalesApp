import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';


import './App.css';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
import DateSelect from './components/DateSelect/DateSelect';
import SelectRange from './components/DateSelect/SelectRange';
import ButtonAppBar from './components/NavBar/NavBar';
import Loading from './components/Loading';



// import Backdrop from './components/Backdrop/Backdrop';
// import Toolbar from './components/Toolbar/Toolbar';
// import SideDrawer from './components/SideDrawer/SideDrawer';
// import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar'
// import ChartSelect from './components/ChartSelect/ChartSelect';
// import PolarChart from './components/PolarChart/PolarChart';
// import Chart from './components/Chart';


///////////////// API links:///////////////////////////////

const API_EVERYTHING = 'https://cors-anywhere.herokuapp.com/https://qmyxgbg5bl.execute-api.eu-west-2.amazonaws.com/dev/getlatest'

// const API_ONLINE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_online_cpe_process'

// const API_WHOLESALE = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_wholesale_cpe_process'

// const API_FOLDEALS = 'https://cors-anywhere.herokuapp.com/https://g640240ci7.execute-api.eu-west-2.amazonaws.com/dev/stats/sales_foldeals_cpe_process'

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

  selectOtherClickHandler = () => {
    this.setState((prevState) => {
      return { dateSelectOpen: !prevState.dateSelectOpen };
    });
    console.log('option selected')
  };

  // chartSelectClickHandler = () => {
  //   this.setState((prevState) => {
  //     return { lineChartOneOpen: !prevState.lineChartOneOpen };
  //   })
  // }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false , drillDownOpen:false});
  };

  constructor(props) {
    super(props);
  
    this.state = {
      isLoaded: false,
      chartData: [],
      drillDownData: [],
      sideDrawerOpen: false,
      dateSelectOpen: false,
      chartOptions:{
        title: {
          display: this.props.displayTitle,
          text: this.props.titleText,
          fontSize: this.props.titleFontSize,
          defaultProps: this.props.maintainAspectRatio,
          isResponsive: this.props.isResponsive
        },
        legend: {
          display: this.props.displayLegend,
          position: this.props.legendPosition,
          labels: {
            fontColor:this.props.titleFontColor,
          }
        }
        }
        };
  }

  

                      /// Calls API's and maps for stacked bar chart ///

  componentDidMount() {
    this.getChartData();
    // this.getDrillDownData();
  }

  // async getDrillDownData() {
  //   axios.all([axios.get(API_FOLDDEALS_ERROR),
  //   axios.get(API_ONLINE_ERROR),
  //   axios.get(API_WHOLESALE_ERROR)])
  //     .then(await axios.spread((responseone, responsetwo, responsethree ) => {
  //       this.setState({
  //         isLoaded: true,
  //         drillDownData: Object.assign({}, { responseone, responsetwo , responsethree,  })
         
  //       })
  //       console.log({responseone, responsetwo, responsethree})
  //     }
  //     ))
  // }

  async getChartData(){
    axios.all([axios.get(API_EVERYTHING)])
      .then(await axios.spread((everything) => {
        this.setState({
          isLoaded: true,
          chartData: Object.assign({}, { everything })
        })
        console.log("everything: "+ everything)
      }))
  }

  




  render() {
    var { isLoaded } = this.state; //access properties within the state
    if (!isLoaded) {              //If not loaded display loading div
      return (
      <div style={{ height: '100%' }} className="Loading-Container">
        <div className="Loading-Circle"><Loading/>

        </div>
      </div>)
    } else {

      // let backdrop;

      // if (this.state.sideDrawerOpen) {
      //   backdrop = <Backdrop click={this.backdropClickHandler} />
      // }
      return (
        
        <div style={{ height: '100%' }} className="Main-App">
          {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
          {/* <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop} */}
          <div>
            <ButtonAppBar />
          </div>
          <main style={{ marginTop: '64px' }}>
        
          </main>
            <div className="Chart-Style">
          

          
            <BarChart chartData={this.state.chartData} />
              {/* <OnClick OnClick={this.state.OnClick}                  /> */}

              
            </div>
            <div className="Filter-Nav">
              <div className="Button-Container">
                  <div className="dropdown">
                    <SelectRange OtherClickHandler={this.selectOtherClickHandler} />
                    {/* <DateSelect show={this.state.dateSelectOpen} /> */}
                  </div>
              {/* </div> */}
              <br></br>
            {/* <div className="Filter-Nav-two"> */}
              <div className="Date-Container">
                  <DateSelect show={this.state.dateSelectOpen} />
              </div>
            </div>
              
              
            </div>
            <div className="Line-Chart-Style">
                  <LineChart chartData={this.state.chartData} />
              </div>
            
            <br></br>
            
          
        </div>
      );
      
    }
    
  }
}

export default App;
