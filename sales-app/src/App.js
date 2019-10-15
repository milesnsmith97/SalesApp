import React from 'react';
import Main from './Main';
import Navigation from './Navigation';
import NavButtons from './NavButtons';
import './App.css'
import { withRouter } from "react-router-dom";


class App extends React.Component {

  


  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("Route change!", this.props.location.pathname);
    }
   

  }

  render(){
    return(
    <div class ="nav_buttons" >
    
      <Navigation/>
      <NavButtons/>
      <Main/>
      
  
      
    
    </div>
    )
  }

}
export default withRouter(props => <App {...props} />);
