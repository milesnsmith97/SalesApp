import React, {Component} from 'react';
import Chart from './components/Chart';
import axios from 'axios';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
// import DropDownSelector from './components/DropdownSelector/DropDownSelector';

// const API_URL = 'https://raw.githubusercontent.com/lauzrussell/POC/master/data';
const API_URL_TOTAL = 'https://cors-anywhere.herokuapp.com/https://841yj3ejf3.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_total/';
const API_URL_COMPLETED = 'https://cors-anywhere.herokuapp.com/https://841yj3ejf3.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_completed/';
const API_URL_PENDING = 'https://cors-anywhere.herokuapp.com/https://841yj3ejf3.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_pending/';
const API_URL_ERROR = 'https://cors-anywhere.herokuapp.com/https://841yj3ejf3.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_error/'

///////////////// API links:///////////////////////////////

// Errors - https://5cv2jbtn7j.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_error/

// Pending - https://5cv2jbtn7j.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_pending/

// Completed - https://5cv2jbtn7j.execute-api.eu-west-2.amazonaws.com/dev/query/sales_online_cpe_process_completed/

///////////////////////////////////////////////////////////

class App extends Component{
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      chartData:[],
      sideDrawerOpen: false,
    };
  }

componentDidMount(){ 
  this.getChartData();
  // const url = `${API_URL}`;
  // axios.get(url).then(response => response.data)
  // .then((data) =>{
  //   this.setState({chartData: data})
  //   console.log(this.state.chartData)
  // })
}

getChartData(){
  axios.get(API_URL_TOTAL) //results converted to json format
  .then((json) => { 
    console.log(json.data.summary_count)
    this.setState({
        isLoaded: true, //got the data from the api
        items: json, //set the items state to json
    })
    console.log(this.state.items)
  });

  axios.get(API_URL_COMPLETED)
  .then((json) => {
    console.log(json.data.summary_count)
    this.setState({
      isLoaded: true,
      items: json
    })
    console.log(this.state.items)
  });

  axios.get(API_URL_PENDING)
  .then((json) => {
    console.log(json.data.summary_count)
    this.setState({
      isLoaded: true,
      items: json
    })
    console.log(this.state.items)
  });

  axios.get(API_URL_ERROR)
  .then((json) => {
    console.log(json.data.summary_count)
    this.setState({
      isLoaded: true,
      items: json
    })
    console.log(this.state.items)
  });

  // const url = `${API_URL}`;
  // axios.get(url).then(response => response.data)
  // .then((data) =>{
  //   this.setState({chartData: data})
  //   console.log(this.state.chartData)
  // })
}

render(){
  var { isLoaded, items } = this.state; //access properties within the state
  if (!isLoaded){ //If not loaded display loading div
    return <div>Loading...</div>
  } else{
  
  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler} />
  }
    return(
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer  show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          {/* <p>This is the page content</p> */}
        </main>

        <div className="App-Header-Page-Title">
          <header className="Page-Header">
            <p>DASHBOARD</p>
          </header>
          <br></br>
          <div className="Chart-Style">
            <Chart chartData={this.state.items.data}/>
          </div>
          <br></br>
        </div>
     </div>
    );
  }
}
}

export default App;
