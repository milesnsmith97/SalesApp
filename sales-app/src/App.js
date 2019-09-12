import React, {Component} from 'react';
import Chart from './components/Chart';
import {axios} from 'axios';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component{
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  constructor(){
    super();
    this.state = {
      isLoaded: false,
      chartData:[],
      sideDrawerOpen: false,
    };
  }

componentDidMount(){ 
  this.getChartData();
}

getChartData(){
  fetch('https://raw.githubusercontent.com/lauzrussell/POC/master/data')
  .then(res => res.json()) //results converted to json format
  .then((json) => { 
    console.log(json)
    this.setState({
        isLoaded: true, //got the data from the api
        items: json, //set the items state to json
    })
    console.log(this.state.items)
  });
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
            <Chart chartData={this.state.items.chartData}/>
          </div>
          <br></br>
        </div>
     </div>
    );
  }
}
}

export default App;
