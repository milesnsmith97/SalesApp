import react from 'react';


const drillDownSelect = (event) => {

 document.getElementsByClassName("chart").onclick
    = function(event) {
    
    var chart = this.chartData.getElementsAtEvent(event)
    var type = this.label.getElementsAtEvent(event)
    var data = this.chartData.getElementsAtEvent(event)
    
    
    alert(chart.type[0].indexof(type[0]) + ": ",
          chart.data[0].indexof(data[0]));
          
    };
}

    export default drillDownSelect 
