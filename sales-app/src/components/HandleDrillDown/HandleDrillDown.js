import React from 'react';
import DrillDownDisplayOn from '../DrillDownDisplay/DrillDownDisplayOn';
import DrillDownFunction from '../DrillDownFunction/DrillDownFunction';
import DrillDownDisplayOff from '../DrillDownDisplay/DrillDownDisplayOff';


class HandleDrillDown extends React.Component  {

constructor(props) {
super(props)
this.handleDrillDown = 
this.handleDrillDown.bind(this);
this.handleDrillUp =
this.handleDrillUp.bind(this);
this.state = {isDrilledDown: false};
}


handleDrillDown() {
    this.setState({isDrilledDown: true});
}
handleDrillUp() {
    
    this.setState({isDrilledDown: false });
}

render() {

    const isDrilledDown = this.state.isDrilledDown;
    let graphClick;

    if(isDrilledDown) {
        graphClick = <DrillDownDisplayOn 
        onclick={this.handleDrillDown}
        
        />;
    }
        else {
            graphClick = <DrillDownDisplayOff
            
            onclick={this.handleDrillUp}
            
            
            />

            return (
                <div>
                    <DrillDownFunction
                    isDrilledDown={isDrilledDown}
                    />
                    {graphClick}

                </div>
            );

        }




    }


}


export default HandleDrillDown;
