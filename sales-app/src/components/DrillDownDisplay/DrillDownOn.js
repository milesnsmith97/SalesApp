import React ,{Component} from 'react';

class DrillDownOn extends Component {
    
     DrillDownOn = props => {
        if(props){
            return window.open("_blank","fullscreen=no","height=300","width=300")
                       
        }
        if(props) {
            return window.open("_blank","fullscreen=no","height=300","width=300")
        }
        if(props) {
        return window.open("_blank","fullscreen=no","height=300","width=300")                 
        }
        if(props) {
        return window.open("_blank","fullscreen=no","height=300","width=300")       
        }
        else {
            return console.log("Failed")
          
        }
        
    }
    render(){
        return(

            <div>
                    this.state.drillDownData.firstResponse.data
                    console.log


            </div>
        );
    }


}



export default DrillDownOn;