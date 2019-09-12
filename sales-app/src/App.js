import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';
import {axios} from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      isLoaded: false,
      chartData:[]
    };
  }

componentDidMount(){ 
  this.getChartData();
}

getChartData(){
  fetch('https://raw.githubusercontent.com/lauzrussell/POC/master/data')
  .then(res => res.json()) //results converted to json format
  .then((json) => { 
    this.setState({
        isLoaded: true, //got the data from the api
        items: json, //set the items state to json
    })
  });
}

render(){

  var { isLoaded, items } = this.state; //access properties within the state
  if (!isLoaded){ //If not loaded display loading div
    return <div>Loading...</div>
  } else{
    return(
      <div className="App">
        <div className="App-Header-Page-Title">
          <header className="Page-Header">
            <h1>DASHBOARD</h1>
          </header>
          <div className="Chart-Style">
            <Chart chartData={this.state.items.chartData}/>
          </div>
        </div>
     </div>
    );
  }
}
}

export default App;
