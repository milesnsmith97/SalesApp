import React from 'react';
import {Switch , Route} from 'react-router-dom'
import LoginPage from './LoginPage';
import LineGraph from './LineGraph';
import Charts from './Charts';


class Main extends React.Component {
    

    

    render() {




        return (
            <div>

    <Switch>
        <Route path="/LineGraph" component={LineGraph}/>
    
   
        <Route  path="/Charts" component={Charts} />
        {/* <Route path="/Page3"  component={Page3}/> */}
    </Switch>
    
</div>


            
        )
    }



}






export default Main;



